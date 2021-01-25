import { CodeMod } from '../codeMods/types';
import { Maybe } from '../helpers/maybe';
export declare function getStringFilter(filter: string): (modString: string) => boolean;
export declare function getRegexFilter(filter: string): (modString: string) => boolean;
/**
 * Returns a function that will return true if the mod is found in the filters
 * Default returns true for all mods
 */
export declare function getModFilter<T>(filters: {
    stringFilter: Maybe<string[]>;
    regexFilter: Maybe<string[]>;
}): (mod: CodeMod<T>) => boolean;
export declare function getModExcludeFilter<T>(filters: {
    stringFilter: Maybe<string[]>;
    regexFilter: Maybe<string[]>;
}): (mod: CodeMod<T>) => boolean;
