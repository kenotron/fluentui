import { JsxOpeningElement, JsxSelfClosingElement } from 'ts-morph';
import { ValueMap, NoOp } from '../../types';
import { Result } from '../../../helpers/result';
export declare function renamePropInSpread(element: JsxOpeningElement | JsxSelfClosingElement, toRename: string, replacementName: string, changeValueMap?: ValueMap<string>, replacementValue?: string): Result<string, NoOp>;
