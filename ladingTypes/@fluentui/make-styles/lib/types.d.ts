import { Properties as CSSProperties } from 'csstype';
export interface MakeStyles extends CSSProperties {
    [key: string]: any;
    animationName?: any;
}
export declare type MakeStylesMatcher<Selectors> = ((selectors: Selectors) => boolean | undefined) | null;
export declare type MakeStylesStyleFunctionRule<Tokens> = (tokens: Tokens) => MakeStyles;
export declare type MakeStylesStyleRule<Tokens> = MakeStyles | MakeStylesStyleFunctionRule<Tokens>;
export declare type MakeStylesDefinition<Selectors, Tokens> = [MakeStylesMatcher<Selectors>, MakeStylesStyleRule<Tokens>];
export interface MakeStylesOptions<Tokens> {
    rtl?: boolean;
    renderer: MakeStylesRenderer;
    tokens: Tokens;
}
export declare type MakeStylesResolvedRule = [/* className */ string, /* css */ string, /* rtlCSS */ string?];
export declare type MakeStylesResolvedDefinition<Selectors, Tokens> = [MakeStylesMatcher<Selectors>, MakeStylesStyleRule<Tokens> | undefined, Record<string, MakeStylesResolvedRule>];
export declare type MakeStylesLookupEntry = [string, MakeStylesResolvedRule];
export declare type MakeStylesMatchedDefinitions = Record<string, MakeStylesResolvedRule>;
export interface MakeStylesRenderer {
    id: string;
    insertDefinitions(lookupTable: Record<string, MakeStylesLookupEntry>, resolvedDefinitions: MakeStylesMatchedDefinitions, rtl: boolean): string;
}
