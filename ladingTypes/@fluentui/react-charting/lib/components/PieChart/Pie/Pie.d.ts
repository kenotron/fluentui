import * as React from 'react';
import { IPieProps } from './Pie.types';
import { IArcData } from '../Arc/Arc.types';
export declare class Pie extends React.Component<IPieProps, {}> {
    static defaultProps: Partial<IPieProps>;
    private colors;
    constructor(props: IPieProps);
    arcGenerator: (d: IArcData, i: number) => JSX.Element;
    render(): JSX.Element;
}
