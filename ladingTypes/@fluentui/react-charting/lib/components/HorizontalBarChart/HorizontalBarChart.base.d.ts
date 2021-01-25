import * as React from 'react';
import { IHorizontalBarChartProps, IChartDataPoint } from './index';
export interface IHorizontalBarChartState {
    isCalloutVisible: boolean;
    refSelected: SVGGElement | null | undefined;
    color: string;
    hoverValue: string | number | Date | null;
    lineColor: string;
    legend: string | null;
    xCalloutValue?: string;
    yCalloutValue?: string;
    barCalloutProps?: IChartDataPoint;
}
export declare class HorizontalBarChartBase extends React.Component<IHorizontalBarChartProps, IHorizontalBarChartState> {
    private _barHeight;
    private _classNames;
    private _uniqLineText;
    private _calloutId;
    private _refArray;
    constructor(props: IHorizontalBarChartProps);
    render(): JSX.Element;
    private _refCallback;
    private _hoverOn;
    private _hoverOff;
    private _adjustProps;
    private _getChartDataText;
    private _createBenchmark;
    private _createBars;
}
