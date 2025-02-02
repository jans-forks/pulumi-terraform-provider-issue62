// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAllProjects(args: GetAllProjectsArgs, opts?: pulumi.InvokeOptions): Promise<GetAllProjectsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sentry:index/getAllProjects:getAllProjects", {
        "organization": args.organization,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAllProjects.
 */
export interface GetAllProjectsArgs {
    organization: string;
}

/**
 * A collection of values returned by getAllProjects.
 */
export interface GetAllProjectsResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly organization: string;
    readonly projectSlugs: string[];
    readonly projects: outputs.GetAllProjectsProject[];
}
export function getAllProjectsOutput(args: GetAllProjectsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAllProjectsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("sentry:index/getAllProjects:getAllProjects", {
        "organization": args.organization,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAllProjects.
 */
export interface GetAllProjectsOutputArgs {
    organization: pulumi.Input<string>;
}
