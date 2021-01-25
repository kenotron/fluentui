import { SourceFile } from 'ts-morph';
import { CodeMod, ModOptions, CodeModResult } from '../../types';
export declare function createCodeModsFromJson(userMods?: CodeMod[]): CodeMod[] | undefined;
export declare function getCodeModsFromJson(): CodeMod[];
export declare function createCodeMod(options: ModOptions, mod: (file: SourceFile) => CodeModResult): CodeMod;
declare const configMod: CodeMod;
export default configMod;
