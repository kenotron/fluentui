import { SourceFile, ImportDeclaration, ImportSpecifierStructure } from 'ts-morph';
import { ModFunctionResult, ModResult, NoOp } from '../types';
import { Result } from '../../helpers/result';
export declare function renameImport(file: SourceFile, originalImport: string, renamedImport: string): Result<ModResult, NoOp>;
/**
 *
 * @param file File to search through
 * @param pathOrRegex If a string is given, it will do an exact match, otherwise it will use regex
 */
export declare function getImportsByPath(file: SourceFile, pathOrRegex: string | RegExp): ModFunctionResult<ImportDeclaration[]>;
export declare function appendOrCreateNamedImport(file: SourceFile, moduleSpecifier: string, namedImports: (string | ImportSpecifierStructure)[]): ModFunctionResult<ImportDeclaration>;
export declare function repathImport(imp: ImportDeclaration, replacementString: string, regex?: RegExp): ModFunctionResult<ImportDeclaration>;
