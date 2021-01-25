import { PropTransform, ValueMap } from '../types';
export declare function boolTransform(newValue?: boolean, map?: ValueMap<string>): PropTransform;
export declare function stringTransform(newValue?: string, map?: ValueMap<string>): PropTransform;
export declare function numberTransform(newValue?: number, map?: ValueMap<string>): PropTransform;
export declare function enumTransform(map: ValueMap<string>): PropTransform;
