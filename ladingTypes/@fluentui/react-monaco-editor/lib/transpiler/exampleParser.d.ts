import { IBasicPackageGroup } from '../interfaces/index';
/**
 * Match an import from a TS file.
 * - Group 1: imported names or \* (empty if side effect-only import)
 * - Group 2: import path without quotes
 * @internal
 */
export declare const IMPORT_REGEX: RegExp;
export interface IImportIdentifiers {
    /**
     * Original name of the imported class/interface/const/whatever.
     * Will be `default` for default imports and `*` for `import *`.
     */
    name: string;
    /** What it's imported as (if different) */
    as?: string;
}
/** Breakdown of an import statement */
export interface IImport {
    /** Full text of the import statement (including semicolon) */
    text: string;
    /** Full path from the import statement (no quotes) */
    path: string;
    /** Package name from the import, or empty string for relative imports */
    packageName: string;
    /** Individual imported identifiers */
    identifiers: IImportIdentifiers[];
}
export interface IExampleInfo {
    /** TS source code */
    tsCode: string;
    /** Imports from the source code */
    imports: IImport[];
    /** Component name to render */
    component: string;
}
/**
 * Determines whether an example is "valid" for purposes of the transform code: it conforms to the
 * expected structure and only contains imports from supported packages.
 *
 * NOTE: You should confirm that the code is syntactically valid before calling this function.
 * If the code is not syntactically valid, this function's behavior is undefined.
 *
 * @param example - Syntactically valid TS code for an example
 * @param supportedPackages - Supported packages for imports (React is implicitly supported)
 * @returns Whether the example is valid
 */
export declare function isExampleValid(example: string, supportedPackages: IBasicPackageGroup[]): boolean;
/**
 * Determines whether an example is editable and if so, returns the code and the component to render.
 * If it's not editable, returns an error message.
 *
 * NOTE: You should confirm that the code is syntactically valid before calling this function.
 * If the code is not syntactically valid, this function's behavior is undefined (it will likely
 * return incorrect/illogical output).
 *
 * @param example - Syntactically valid TS code for an example
 * @param supportedPackages - Supported packages for imports (React is implicitly supported)
 * @returns Example info if the example is valid, or an error message if not
 */
export declare function tryParseExample(example: string, supportedPackages: IBasicPackageGroup[]): IExampleInfo | string;
/** @internal */
export declare function _tryParseExample(example: string, supportedPackages: string[]): IExampleInfo | string;
/** @internal */
export declare function _getImports(example: string): IImport[];
/** @internal */
export declare function _getPackageName(path: string): string;
/** @internal */
export declare function _getImportIdentifiers(contents: string | undefined): IImportIdentifiers[];
