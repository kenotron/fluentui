import { IBasicPackageGroup } from '../interfaces/index';
/** Partial ts.Diagnostic @internal */
export interface IDiagnostic {
    category: number;
    code: number;
    start?: number;
    length?: number;
    messageText: string | {
        messageText: string;
        code: number;
    };
}
export declare function _getErrorMessages(errors: IDiagnostic[], text: string): string[];
export declare function _getLineStarts(text: string): number[];
export declare function _getErrorLineInfo(error: IDiagnostic, lineStarts: number[]): {
    line: number;
    col: number;
};
/** Convert from IPackageGroup[] to a map from package name to global name. @internal */
export declare const _supportedPackageToGlobalMap: (supportedPackages: IBasicPackageGroup[]) => {
    [packageName: string]: string;
};
