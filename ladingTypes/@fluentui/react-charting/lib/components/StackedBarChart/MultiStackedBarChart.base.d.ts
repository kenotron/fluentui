import * as React from 'react';
import { IChartDataPoint, IMultiStackedBarChartProps } from './index';
export interface IRefArrayData {
    legendText?: string;
    refElement?: SVGGElement;
}
export interface IMultiStackedBarChartState {
    isCalloutVisible: boolean;
    refArray: IRefArrayData[];
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
export declare class MultiStackedBarChartBase extends React.Component<IMultiStackedBarChartProps, IMultiStackedBarChartState> {
    static defaultProps: Partial<IMultiStackedBarChartProps>;
    private _classNames;
    private _calloutId;
    constructor(props: IMultiStackedBarChartProps);
    render(): JSX.Element;
    private _createBarsAndLegends;
    private _onBarFocus;
    private _refCallback;
    private _adjustProps;
    private _onHover;
    private _getLegendData;
    private _onClick;
    private _onLeave;
    private _onBarHover;
    private _onBarLeave;
    private _redirectToUrl;
}
