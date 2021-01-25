import * as React from 'react';
import { IEventAnnotation } from '../../../types/IEventAnnotation';
export interface ILineDef extends IEventAnnotation {
    x: number;
}
export interface ILabelDef {
    x: number;
    aggregatedIdx: number[];
    anchor: 'start' | 'end';
}
interface ILabelLinkProps {
    lineDefs: ILineDef[];
    labelDef: ILabelDef;
    textY: number;
    textWidth: number;
    textLineHeight: number;
    textFontSize: string;
    textColor: string;
    mergedLabel: (count: number) => string;
}
export declare const LabelLink: React.FunctionComponent<ILabelLinkProps>;
export {};
