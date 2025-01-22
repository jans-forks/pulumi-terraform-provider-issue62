import * as pulumi from "@pulumi/pulumi";
import * as sentry from "@pulumi/sentry";

const SENTRY_ORG = "dummy";
const slack = {
  WORKSPACE_ID: "dummy",
};

interface SentryNotificationChannelArgs {
  projectName: pulumi.Input<string>;
  /**
   * Also sets the notification environment.
   */
  tier: string;
  /** Show these tags in the Slack message */
  tags?: pulumi.Input<string[]>;
  /** for some projects sentry insists on returning a name for the channel which contains an empty array of tags */
  forceTagsInName?: boolean;
  /**
   * Overrides environment in sentry notification.
   * To select all environments use `null`.
   * Note: It is not possible to unset the environment until the sentry provider is updated to the TF provider v0.14x
   */
  environment?: pulumi.Input<string> | null;
}

interface SentryNotificationExistingSlackChannelArgs extends SentryNotificationChannelArgs {
  channelId: pulumi.Input<string>;
}

/**
 * Arguments of createSentrySlackRule function
 */
interface CreateSentryRuleArgs extends SentryNotificationExistingSlackChannelArgs {
  channelName: pulumi.Input<string>;
}

function createSentryIssueAlert(name: string, args: CreateSentryRuleArgs, opts: pulumi.ResourceOptions) {
  const environment = args.environment !== undefined ? args.environment : args.tier;

  return new sentry.IssueAlert(
    `${name}-issue-alert`,
    {
      environment: environment === null ? undefined : environment,
      actionsV2s: [
        {
          slackNotifyService: {
            channel: args.channelId,
            channelId: args.channelId,
            tags: args.tags,
            workspace: slack.WORKSPACE_ID,
          },
        },
      ],
      conditionsV2s: [
        {
          regressionEvent: {},
        },
        {
          reappearedEvent: {},
        },
        {
          eventFrequency: {
            comparisonType: "count",
            interval: "1h",
            value: 0,
          },
        },
        {
          firstSeenEvent: {},
        },
      ],
      frequency: 10,
      organization: SENTRY_ORG,
      project: args.projectName,
      actionMatch: "any",
      filterMatch: "any",
    },

    { ignoreChanges: [], ...opts, deleteBeforeReplace: true }
  );
}

export class SentryNotificationExistingSlackChannel extends pulumi.ComponentResource {
  alert: sentry.IssueAlert;

  constructor(name: string, args: SentryNotificationExistingSlackChannelArgs, opts?: pulumi.CustomResourceOptions) {
    super("bluecode:sentry:NotificationExistingSlackChannel", name, args, opts);

    // this sometimes fail for whatever reason, resolving conversation.name fixes it
    // const conversation = pSlack.getConversationOutput({ channelId: args.channelId }, { provider: slack.getProvider() });
    const conversation = {
      channelId: "dummy",
      name: "dummy",
    };
    // conversation.name.apply(console.log)

    this.alert = createSentryIssueAlert(
      name,
      {
        channelId: conversation.channelId as pulumi.Output<string>,
        channelName: conversation.name as pulumi.Output<string>,
        projectName: args.projectName,
        tier: args.tier,
        tags: args.tags,
      },
      {
        parent: this,
      }
    );
  }
}
