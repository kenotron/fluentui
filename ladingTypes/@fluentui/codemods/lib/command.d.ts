import { CodeMod } from './codeMods/types';
export interface CommandParserResult<T = CodeMod> {
    shouldExit?: boolean;
    modsFilter: (mod: T) => boolean;
    saveSync?: boolean;
}
export interface Commands {
    help?: boolean;
    filter?: string;
}
export declare const yargsParse: (passedArgs: string[]) => {
    [x: string]: unknown;
    modNames: string[] | undefined;
    modPatterns: string[] | undefined;
    excludeMods: boolean;
    config: boolean;
    list: boolean;
    saveSync: boolean;
    _: string[];
    $0: string;
};
export declare class CommandParser {
    parseArgs(passedIn: string[]): CommandParserResult;
}
