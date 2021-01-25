import { CodeMod, CodeModResult } from '../codeMods/types';
import { Maybe, Something } from '../helpers/maybe';
import { Logger } from './logger';
interface RunResult {
    modName: string;
    logs: (string | undefined)[];
}
interface ErrorResult {
    modName: string;
    error: Error | string;
}
export declare function runMods<T>(codeMods: CodeMod<T>[], sources: T[], onFileComplete: (result: {
    file: T;
    resultList: [RunResult[], ErrorResult[]];
}) => void, loggingCallback?: (result: {
    mod: CodeMod<T>;
    file: T;
    result: CodeModResult;
}) => void): void;
export declare function getModsRootPath(): string;
export declare function getModsPattern(includeTs?: boolean): "/**/*.@(js|ts)" | "/**/*.mod.js";
export declare function getModsPaths(root?: string, modsPath?: string): string[];
export declare function getTsConfigs(root?: string): string[];
export declare function loadMod(path: string, errorCallback: (e: Error) => void): Maybe<CodeMod>;
export declare function getEnabledMods(logger: Logger, getPaths?: typeof getModsPaths, loadM?: typeof loadMod): CodeMod<import("ts-morph").SourceFile>[];
export declare function modEnabled<T>(mod: Maybe<CodeMod<T>>): mod is Something<CodeMod<T>>;
export {};
