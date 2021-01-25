import { SourceFile } from 'ts-morph';
export interface ComponentToCompat {
    oldPath: string;
    newComponentPath: string;
    namedExports: string[];
}
export interface RawCompat {
    componentName: string;
    namedExports: string[];
}
export interface CompatMap {
    namedExportsMatch: {
        [key: string]: string;
    };
    exactPathMatch: {
        [key: string]: string;
    };
}
export declare function repathNamedImports(file: SourceFile, namedImportMap: {
    [key: string]: string;
}, indexPath: string): import("../../../helpers/result").Result<import("ts-morph").ImportDeclaration[], import("../../types").NoOp | import("../../types").ModError>;
export declare function getNamedExports(names: string[]): string[];
export declare function buildCompatHash(renameCompats: RawCompat[], getComponentToCompat: (comp: RawCompat) => ComponentToCompat): CompatMap;
export declare function repathPathedImports(file: SourceFile, pathMapping: {
    [key: string]: string;
}): void;
export declare function runComponentToCompat(file: SourceFile, compatMap: CompatMap, indexPath: string): void;
