// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getOrganizationMember(args: GetOrganizationMemberArgs, opts?: pulumi.InvokeOptions): Promise<GetOrganizationMemberResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sentry:index/getOrganizationMember:getOrganizationMember", {
        "email": args.email,
        "organization": args.organization,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOrganizationMember.
 */
export interface GetOrganizationMemberArgs {
    email: string;
    organization: string;
}

/**
 * A collection of values returned by getOrganizationMember.
 */
export interface GetOrganizationMemberResult {
    readonly email: string;
    readonly id: string;
    readonly organization: string;
    readonly role: string;
}
export function getOrganizationMemberOutput(args: GetOrganizationMemberOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetOrganizationMemberResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("sentry:index/getOrganizationMember:getOrganizationMember", {
        "email": args.email,
        "organization": args.organization,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOrganizationMember.
 */
export interface GetOrganizationMemberOutputArgs {
    email: pulumi.Input<string>;
    organization: pulumi.Input<string>;
}
