import { ApiModel } from '@microsoft/api-extractor-model';
import { IPageJson, PageGroups } from './types';
/**
 * Given `apiModel` with API package info already loaded into it, generate page data for each
 * `docCategory` tag (page name) and the APIs within it.
 */
export declare function generatePageJson(apiModel: ApiModel, pageGroups?: PageGroups, fallbackGroup?: string): Map<string, IPageJson>;
