// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class OrganizationMember extends pulumi.CustomResource {
    /**
     * Get an existing OrganizationMember resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OrganizationMemberState, opts?: pulumi.CustomResourceOptions): OrganizationMember {
        return new OrganizationMember(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sentry:index/organizationMember:OrganizationMember';

    /**
     * Returns true if the given object is an instance of OrganizationMember.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OrganizationMember {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OrganizationMember.__pulumiType;
    }

    /**
     * The email of the organization member.
     */
    public readonly email!: pulumi.Output<string>;
    /**
     * The invite has expired.
     */
    public /*out*/ readonly expired!: pulumi.Output<boolean>;
    /**
     * The internal ID for this organization membership.
     */
    public /*out*/ readonly internalId!: pulumi.Output<string>;
    /**
     * The slug of the organization the user should be invited to.
     */
    public readonly organization!: pulumi.Output<string>;
    public readonly organizationMemberId!: pulumi.Output<string>;
    /**
     * The invite is pending.
     */
    public /*out*/ readonly pending!: pulumi.Output<boolean>;
    /**
     * This is the role of the organization member.
     */
    public readonly role!: pulumi.Output<string>;

    /**
     * Create a OrganizationMember resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OrganizationMemberArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OrganizationMemberArgs | OrganizationMemberState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OrganizationMemberState | undefined;
            resourceInputs["email"] = state ? state.email : undefined;
            resourceInputs["expired"] = state ? state.expired : undefined;
            resourceInputs["internalId"] = state ? state.internalId : undefined;
            resourceInputs["organization"] = state ? state.organization : undefined;
            resourceInputs["organizationMemberId"] = state ? state.organizationMemberId : undefined;
            resourceInputs["pending"] = state ? state.pending : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
        } else {
            const args = argsOrState as OrganizationMemberArgs | undefined;
            if ((!args || args.email === undefined) && !opts.urn) {
                throw new Error("Missing required property 'email'");
            }
            if ((!args || args.organization === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organization'");
            }
            if ((!args || args.role === undefined) && !opts.urn) {
                throw new Error("Missing required property 'role'");
            }
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["organization"] = args ? args.organization : undefined;
            resourceInputs["organizationMemberId"] = args ? args.organizationMemberId : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["expired"] = undefined /*out*/;
            resourceInputs["internalId"] = undefined /*out*/;
            resourceInputs["pending"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OrganizationMember.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OrganizationMember resources.
 */
export interface OrganizationMemberState {
    /**
     * The email of the organization member.
     */
    email?: pulumi.Input<string>;
    /**
     * The invite has expired.
     */
    expired?: pulumi.Input<boolean>;
    /**
     * The internal ID for this organization membership.
     */
    internalId?: pulumi.Input<string>;
    /**
     * The slug of the organization the user should be invited to.
     */
    organization?: pulumi.Input<string>;
    organizationMemberId?: pulumi.Input<string>;
    /**
     * The invite is pending.
     */
    pending?: pulumi.Input<boolean>;
    /**
     * This is the role of the organization member.
     */
    role?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OrganizationMember resource.
 */
export interface OrganizationMemberArgs {
    /**
     * The email of the organization member.
     */
    email: pulumi.Input<string>;
    /**
     * The slug of the organization the user should be invited to.
     */
    organization: pulumi.Input<string>;
    organizationMemberId?: pulumi.Input<string>;
    /**
     * This is the role of the organization member.
     */
    role: pulumi.Input<string>;
}
