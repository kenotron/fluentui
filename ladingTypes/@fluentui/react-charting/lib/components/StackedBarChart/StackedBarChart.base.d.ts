import * as React from 'react';
import { IChartDataPoint } from './index';
import { IStackedBarChartProps } from '../../index';
export interface IStackedBarChartState {
    isCalloutVisible: boolean;
    selectedLegendTitle: string;
    refSelected: any;
    dataForHoverCard: number;
    color: string;
    isLegendHovered: boolean;
    isLegendSelected: boolean;
    xCalloutValue?: string;
    yCalloutValue?: string;
    dataPointCalloutProps?: IChartDataPoint;
}
export declare class StackedBarChartBase extends React.Component<IStackedBarChartProps, IStackedBarChartState> {
    static defaultProps: Partial<IStackedBarChartProps>;
    private _classNames;
    private _calloutId;
    private _refArray;
    constructor(props: IStackedBarChartProps);
    render(): JSX.Element;
    private _adjustProps;
    private _createBarsAndLegends;
    private _onBarFocus;
    private _addLegend;
    private _generateEmptyBar;
    private _refCallback;
    private _onClick;
    private _onHover;
    private _onLeave;
    private _onBarHover;
    private _onBarLeave;
    private _redirectToUrl;
}
