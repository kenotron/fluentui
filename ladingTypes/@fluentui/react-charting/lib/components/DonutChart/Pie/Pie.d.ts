import * as React from 'react';
import { IPieProps } from './index';
import { IArcData } from '../Arc/index';
export declare class Pie extends React.Component<IPieProps, {}> {
    static defaultProps: Partial<IPieProps>;
    private _pieForFocusRing;
    constructor(props: IPieProps);
    arcGenerator: (d: IArcData, i: number, focusData: IArcData, href?: string | undefined) => JSX.Element;
    render(): JSX.Element;
    private _focusCallback;
    private _hoverCallback;
}
