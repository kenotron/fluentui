import * as React from 'react';
import { IArcProps } from './Arc.types';
export declare class Arc extends React.Component<IArcProps, {}> {
    static defaultProps: Partial<IArcProps>;
    state: {};
    static getDerivedStateFromProps(nextProps: Readonly<IArcProps>): null;
    updateChart: (newProps: IArcProps) => void;
    render(): JSX.Element;
}
export declare class LabeledArc extends Arc {
    render(): JSX.Element;
}
