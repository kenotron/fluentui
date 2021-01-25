import * as React from 'react';
import { IArcProps } from './index';
export interface IArcState {
    isCalloutVisible?: boolean;
}
export declare class Arc extends React.Component<IArcProps, IArcState> {
    static defaultProps: Partial<IArcProps>;
    state: {};
    private currentRef;
    static getDerivedStateFromProps(nextProps: Readonly<IArcProps>): Partial<IArcState> | null;
    updateChart(newProps: IArcProps): void;
    render(): JSX.Element;
    private _onFocus;
    private _hoverOn;
    private _hoverOff;
    private _onBlur;
    private _redirectToUrl;
}
