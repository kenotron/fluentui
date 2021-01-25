import { Tokens, Theme, RecursivePartial } from '../types/Theme';
/**
 * Get tokens from theme object.
 */
export declare function getTokens(theme: Theme, userTokens?: RecursivePartial<Tokens>): RecursivePartial<Tokens>;
