import { JsxOpeningElement, JsxSelfClosingElement } from 'ts-morph';
import { PropTransform, NoOp } from '../types';
import { Result } from '../../helpers/result';
export declare function renameProp(instances: (JsxOpeningElement | JsxSelfClosingElement)[], toRename: string, replacementName: string, replacementValue?: string, transform?: PropTransform): Result<string, NoOp>;
