// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class OrganizationCodeMapping extends pulumi.CustomResource {
    /**
     * Get an existing OrganizationCodeMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OrganizationCodeMappingState, opts?: pulumi.CustomResourceOptions): OrganizationCodeMapping {
        return new OrganizationCodeMapping(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sentry:index/organizationCodeMapping:OrganizationCodeMapping';

    /**
     * Returns true if the given object is an instance of OrganizationCodeMapping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OrganizationCodeMapping {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OrganizationCodeMapping.__pulumiType;
    }

    /**
     * Default branch of your code we fall back to if you do not have commit tracking set up.
     */
    public readonly defaultBranch!: pulumi.Output<string>;
    /**
     * Sentry Organization Integration ID.
     */
    public readonly integrationId!: pulumi.Output<string>;
    /**
     * The internal ID for this resource.
     */
    public /*out*/ readonly internalId!: pulumi.Output<string>;
    /**
     * The slug of the organization the code mapping is under.
     */
    public readonly organization!: pulumi.Output<string>;
    public readonly organizationCodeMappingId!: pulumi.Output<string>;
    /**
     * Sentry Project ID.
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * Sentry Organization Repository ID.
     */
    public readonly repositoryId!: pulumi.Output<string>;
    /**
     * https://docs.sentry.io/product/integrations/source-code-mgmt/github/#stack-trace-linking
     */
    public readonly sourceRoot!: pulumi.Output<string | undefined>;
    /**
     * https://docs.sentry.io/product/integrations/source-code-mgmt/github/#stack-trace-linking
     */
    public readonly stackRoot!: pulumi.Output<string | undefined>;

    /**
     * Create a OrganizationCodeMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OrganizationCodeMappingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OrganizationCodeMappingArgs | OrganizationCodeMappingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OrganizationCodeMappingState | undefined;
            resourceInputs["defaultBranch"] = state ? state.defaultBranch : undefined;
            resourceInputs["integrationId"] = state ? state.integrationId : undefined;
            resourceInputs["internalId"] = state ? state.internalId : undefined;
            resourceInputs["organization"] = state ? state.organization : undefined;
            resourceInputs["organizationCodeMappingId"] = state ? state.organizationCodeMappingId : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["repositoryId"] = state ? state.repositoryId : undefined;
            resourceInputs["sourceRoot"] = state ? state.sourceRoot : undefined;
            resourceInputs["stackRoot"] = state ? state.stackRoot : undefined;
        } else {
            const args = argsOrState as OrganizationCodeMappingArgs | undefined;
            if ((!args || args.defaultBranch === undefined) && !opts.urn) {
                throw new Error("Missing required property 'defaultBranch'");
            }
            if ((!args || args.integrationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'integrationId'");
            }
            if ((!args || args.organization === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organization'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            if ((!args || args.repositoryId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'repositoryId'");
            }
            resourceInputs["defaultBranch"] = args ? args.defaultBranch : undefined;
            resourceInputs["integrationId"] = args ? args.integrationId : undefined;
            resourceInputs["organization"] = args ? args.organization : undefined;
            resourceInputs["organizationCodeMappingId"] = args ? args.organizationCodeMappingId : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["repositoryId"] = args ? args.repositoryId : undefined;
            resourceInputs["sourceRoot"] = args ? args.sourceRoot : undefined;
            resourceInputs["stackRoot"] = args ? args.stackRoot : undefined;
            resourceInputs["internalId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OrganizationCodeMapping.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OrganizationCodeMapping resources.
 */
export interface OrganizationCodeMappingState {
    /**
     * Default branch of your code we fall back to if you do not have commit tracking set up.
     */
    defaultBranch?: pulumi.Input<string>;
    /**
     * Sentry Organization Integration ID.
     */
    integrationId?: pulumi.Input<string>;
    /**
     * The internal ID for this resource.
     */
    internalId?: pulumi.Input<string>;
    /**
     * The slug of the organization the code mapping is under.
     */
    organization?: pulumi.Input<string>;
    organizationCodeMappingId?: pulumi.Input<string>;
    /**
     * Sentry Project ID.
     */
    projectId?: pulumi.Input<string>;
    /**
     * Sentry Organization Repository ID.
     */
    repositoryId?: pulumi.Input<string>;
    /**
     * https://docs.sentry.io/product/integrations/source-code-mgmt/github/#stack-trace-linking
     */
    sourceRoot?: pulumi.Input<string>;
    /**
     * https://docs.sentry.io/product/integrations/source-code-mgmt/github/#stack-trace-linking
     */
    stackRoot?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OrganizationCodeMapping resource.
 */
export interface OrganizationCodeMappingArgs {
    /**
     * Default branch of your code we fall back to if you do not have commit tracking set up.
     */
    defaultBranch: pulumi.Input<string>;
    /**
     * Sentry Organization Integration ID.
     */
    integrationId: pulumi.Input<string>;
    /**
     * The slug of the organization the code mapping is under.
     */
    organization: pulumi.Input<string>;
    organizationCodeMappingId?: pulumi.Input<string>;
    /**
     * Sentry Project ID.
     */
    projectId: pulumi.Input<string>;
    /**
     * Sentry Organization Repository ID.
     */
    repositoryId: pulumi.Input<string>;
    /**
     * https://docs.sentry.io/product/integrations/source-code-mgmt/github/#stack-trace-linking
     */
    sourceRoot?: pulumi.Input<string>;
    /**
     * https://docs.sentry.io/product/integrations/source-code-mgmt/github/#stack-trace-linking
     */
    stackRoot?: pulumi.Input<string>;
}
