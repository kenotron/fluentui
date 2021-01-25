import { DocInlineTag, DocSection, DocComment, DocNodeContainer } from '@microsoft/tsdoc';
import { ApiItem, ApiModel, ExcerptToken, IExcerptTokenRange } from '@microsoft/api-extractor-model';
import { ILinkToken } from './types';
import { ICollectedData } from './types-private';
/**
 * Render nodes from `section` (which is part of `apiItem`) into text.
 */
export declare function renderNodes(apiModel: ApiModel, apiItem: ApiItem, section: DocNodeContainer): string;
/**
 * Loops through excerpt tokens and returns a token array with hyperlink data.
 * In cases where multiple consecutive original tokens don't contain a link, they will be combined
 * to decrease file size and client processing time.
 * @param collectedData - Used to create links from reference tokens
 * @param excerptTokens - Token list containing the relevant info
 * @param excerptTokenRange - Specific relevant range within `excerptTokens`
 * @param isTypeAlias - If true, remove the "export declare" part from the result and don't make
 * a link from the type name (since it will be a self-link).
 */
export declare function getTokenHyperlinks(collectedData: ICollectedData, excerptTokens: ReadonlyArray<ExcerptToken>, excerptTokenRange: Readonly<IExcerptTokenRange>, isTypeAlias?: boolean): ILinkToken[];
/**
 * Renders the doc node (likely a DocComment's DocSection) without the inline tag
 */
export declare function renderDocNodeWithoutInlineTag(docSection?: DocSection): string;
/**
 * Finds an inline tag by name from the provided doc comment
 */
export declare function findInlineTagByName(tagName: string, docComment: DocComment): DocInlineTag | undefined;
/**
 * Gets the block tag by name
 */
export declare function getBlockTagByName(tagName: string, docComment: DocComment): DocSection | undefined;
/**
 * Convert a range of tokens to a string.
 */
export declare function renderTokens(excerptTokens: ReadonlyArray<ExcerptToken>, excerptTokenRange: Readonly<IExcerptTokenRange>): string;
