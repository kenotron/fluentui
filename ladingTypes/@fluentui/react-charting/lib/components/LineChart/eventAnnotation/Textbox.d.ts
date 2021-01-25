import * as React from 'react';
interface ITextboxProps {
    text: string;
    width: number;
    x: number;
    y: number;
    lineHeight: number;
    textAnchor?: 'start' | 'middle' | 'end';
    fontSize?: string;
    fill?: string;
}
export declare const Textbox: React.FunctionComponent<ITextboxProps>;
export {};
