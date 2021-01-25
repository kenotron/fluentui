interface CompileCSSOptions {
    className: string;
    pseudo: string;
    media: string;
    support: string;
    property: string;
    value: number | string;
    unstable_cssPriority: number;
}
export declare function compileCSS(options: CompileCSSOptions): string;
export {};
