// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Project extends pulumi.CustomResource {
    /**
     * Get an existing Project resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProjectState, opts?: pulumi.CustomResourceOptions): Project {
        return new Project(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sentry:index/project:Project';

    /**
     * Returns true if the given object is an instance of Project.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Project {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Project.__pulumiType;
    }

    /**
     * Configure origin URLs which Sentry should accept events from. This is used for communication with clients like
     * [sentry-javascript](https://github.com/getsentry/sentry-javascript).
     */
    public readonly clientSecurity!: pulumi.Output<outputs.ProjectClientSecurity>;
    /**
     * Whether to create a default key. By default, Sentry will create a key for you. If you wish to manage keys manually, set
     * this to false and create keys using the `sentry.Key` resource.
     */
    public readonly defaultKey!: pulumi.Output<boolean | undefined>;
    /**
     * Whether to create a default issue alert. Defaults to true where the behavior is to alert the user on every new issue.
     */
    public readonly defaultRules!: pulumi.Output<boolean | undefined>;
    /**
     * The maximum amount of time (in seconds) to wait between scheduling digests for delivery.
     */
    public readonly digestsMaxDelay!: pulumi.Output<number>;
    /**
     * The minimum amount of time (in seconds) to wait between scheduling digests for delivery after the initial scheduling.
     */
    public readonly digestsMinDelay!: pulumi.Output<number>;
    public /*out*/ readonly features!: pulumi.Output<string[]>;
    /**
     * Custom filters for this project.
     */
    public readonly filters!: pulumi.Output<outputs.ProjectFilters>;
    /**
     * This can be used to modify the fingerprint rules on the server with custom rules. Rules follow the pattern `matcher:glob
     * > fingerprint, values`. To learn more about fingerprint rules, [read the
     * docs](https://docs.sentry.io/concepts/data-management/event-grouping/fingerprint-rules/).
     */
    public readonly fingerprintingRules!: pulumi.Output<string>;
    /**
     * This can be used to enhance the grouping algorithm with custom rules. Rules follow the pattern `matcher:glob
     * [v^]?[+-]flag`. To learn more about stack trace rules, [read the
     * docs](https://docs.sentry.io/concepts/data-management/event-grouping/stack-trace-rules/).
     */
    public readonly groupingEnhancements!: pulumi.Output<string>;
    /**
     * The internal ID for this project.
     */
    public /*out*/ readonly internalId!: pulumi.Output<string>;
    /**
     * The name for the project.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The organization of this resource.
     */
    public readonly organization!: pulumi.Output<string>;
    public readonly platform!: pulumi.Output<string | undefined>;
    /**
     * Hours in which an issue is automatically resolve if not seen after this amount of time.
     */
    public readonly resolveAge!: pulumi.Output<number>;
    /**
     * The optional slug for this project.
     */
    public readonly slug!: pulumi.Output<string>;
    /**
     * The slugs of the teams to create the project for.
     */
    public readonly teams!: pulumi.Output<string[]>;

    /**
     * Create a Project resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProjectArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ProjectArgs | ProjectState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ProjectState | undefined;
            resourceInputs["clientSecurity"] = state ? state.clientSecurity : undefined;
            resourceInputs["defaultKey"] = state ? state.defaultKey : undefined;
            resourceInputs["defaultRules"] = state ? state.defaultRules : undefined;
            resourceInputs["digestsMaxDelay"] = state ? state.digestsMaxDelay : undefined;
            resourceInputs["digestsMinDelay"] = state ? state.digestsMinDelay : undefined;
            resourceInputs["features"] = state ? state.features : undefined;
            resourceInputs["filters"] = state ? state.filters : undefined;
            resourceInputs["fingerprintingRules"] = state ? state.fingerprintingRules : undefined;
            resourceInputs["groupingEnhancements"] = state ? state.groupingEnhancements : undefined;
            resourceInputs["internalId"] = state ? state.internalId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["organization"] = state ? state.organization : undefined;
            resourceInputs["platform"] = state ? state.platform : undefined;
            resourceInputs["resolveAge"] = state ? state.resolveAge : undefined;
            resourceInputs["slug"] = state ? state.slug : undefined;
            resourceInputs["teams"] = state ? state.teams : undefined;
        } else {
            const args = argsOrState as ProjectArgs | undefined;
            if ((!args || args.organization === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organization'");
            }
            if ((!args || args.teams === undefined) && !opts.urn) {
                throw new Error("Missing required property 'teams'");
            }
            resourceInputs["clientSecurity"] = args ? args.clientSecurity : undefined;
            resourceInputs["defaultKey"] = args ? args.defaultKey : undefined;
            resourceInputs["defaultRules"] = args ? args.defaultRules : undefined;
            resourceInputs["digestsMaxDelay"] = args ? args.digestsMaxDelay : undefined;
            resourceInputs["digestsMinDelay"] = args ? args.digestsMinDelay : undefined;
            resourceInputs["filters"] = args ? args.filters : undefined;
            resourceInputs["fingerprintingRules"] = args ? args.fingerprintingRules : undefined;
            resourceInputs["groupingEnhancements"] = args ? args.groupingEnhancements : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["organization"] = args ? args.organization : undefined;
            resourceInputs["platform"] = args ? args.platform : undefined;
            resourceInputs["resolveAge"] = args ? args.resolveAge : undefined;
            resourceInputs["slug"] = args ? args.slug : undefined;
            resourceInputs["teams"] = args ? args.teams : undefined;
            resourceInputs["features"] = undefined /*out*/;
            resourceInputs["internalId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Project.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Project resources.
 */
export interface ProjectState {
    /**
     * Configure origin URLs which Sentry should accept events from. This is used for communication with clients like
     * [sentry-javascript](https://github.com/getsentry/sentry-javascript).
     */
    clientSecurity?: pulumi.Input<inputs.ProjectClientSecurity>;
    /**
     * Whether to create a default key. By default, Sentry will create a key for you. If you wish to manage keys manually, set
     * this to false and create keys using the `sentry.Key` resource.
     */
    defaultKey?: pulumi.Input<boolean>;
    /**
     * Whether to create a default issue alert. Defaults to true where the behavior is to alert the user on every new issue.
     */
    defaultRules?: pulumi.Input<boolean>;
    /**
     * The maximum amount of time (in seconds) to wait between scheduling digests for delivery.
     */
    digestsMaxDelay?: pulumi.Input<number>;
    /**
     * The minimum amount of time (in seconds) to wait between scheduling digests for delivery after the initial scheduling.
     */
    digestsMinDelay?: pulumi.Input<number>;
    features?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Custom filters for this project.
     */
    filters?: pulumi.Input<inputs.ProjectFilters>;
    /**
     * This can be used to modify the fingerprint rules on the server with custom rules. Rules follow the pattern `matcher:glob
     * > fingerprint, values`. To learn more about fingerprint rules, [read the
     * docs](https://docs.sentry.io/concepts/data-management/event-grouping/fingerprint-rules/).
     */
    fingerprintingRules?: pulumi.Input<string>;
    /**
     * This can be used to enhance the grouping algorithm with custom rules. Rules follow the pattern `matcher:glob
     * [v^]?[+-]flag`. To learn more about stack trace rules, [read the
     * docs](https://docs.sentry.io/concepts/data-management/event-grouping/stack-trace-rules/).
     */
    groupingEnhancements?: pulumi.Input<string>;
    /**
     * The internal ID for this project.
     */
    internalId?: pulumi.Input<string>;
    /**
     * The name for the project.
     */
    name?: pulumi.Input<string>;
    /**
     * The organization of this resource.
     */
    organization?: pulumi.Input<string>;
    platform?: pulumi.Input<string>;
    /**
     * Hours in which an issue is automatically resolve if not seen after this amount of time.
     */
    resolveAge?: pulumi.Input<number>;
    /**
     * The optional slug for this project.
     */
    slug?: pulumi.Input<string>;
    /**
     * The slugs of the teams to create the project for.
     */
    teams?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Project resource.
 */
export interface ProjectArgs {
    /**
     * Configure origin URLs which Sentry should accept events from. This is used for communication with clients like
     * [sentry-javascript](https://github.com/getsentry/sentry-javascript).
     */
    clientSecurity?: pulumi.Input<inputs.ProjectClientSecurity>;
    /**
     * Whether to create a default key. By default, Sentry will create a key for you. If you wish to manage keys manually, set
     * this to false and create keys using the `sentry.Key` resource.
     */
    defaultKey?: pulumi.Input<boolean>;
    /**
     * Whether to create a default issue alert. Defaults to true where the behavior is to alert the user on every new issue.
     */
    defaultRules?: pulumi.Input<boolean>;
    /**
     * The maximum amount of time (in seconds) to wait between scheduling digests for delivery.
     */
    digestsMaxDelay?: pulumi.Input<number>;
    /**
     * The minimum amount of time (in seconds) to wait between scheduling digests for delivery after the initial scheduling.
     */
    digestsMinDelay?: pulumi.Input<number>;
    /**
     * Custom filters for this project.
     */
    filters?: pulumi.Input<inputs.ProjectFilters>;
    /**
     * This can be used to modify the fingerprint rules on the server with custom rules. Rules follow the pattern `matcher:glob
     * > fingerprint, values`. To learn more about fingerprint rules, [read the
     * docs](https://docs.sentry.io/concepts/data-management/event-grouping/fingerprint-rules/).
     */
    fingerprintingRules?: pulumi.Input<string>;
    /**
     * This can be used to enhance the grouping algorithm with custom rules. Rules follow the pattern `matcher:glob
     * [v^]?[+-]flag`. To learn more about stack trace rules, [read the
     * docs](https://docs.sentry.io/concepts/data-management/event-grouping/stack-trace-rules/).
     */
    groupingEnhancements?: pulumi.Input<string>;
    /**
     * The name for the project.
     */
    name?: pulumi.Input<string>;
    /**
     * The organization of this resource.
     */
    organization: pulumi.Input<string>;
    platform?: pulumi.Input<string>;
    /**
     * Hours in which an issue is automatically resolve if not seen after this amount of time.
     */
    resolveAge?: pulumi.Input<number>;
    /**
     * The optional slug for this project.
     */
    slug?: pulumi.Input<string>;
    /**
     * The slugs of the teams to create the project for.
     */
    teams: pulumi.Input<pulumi.Input<string>[]>;
}
