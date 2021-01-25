import * as React from 'react';
import { IBasestate, IVerticalStackedBarChartProps, IVerticalStackedChartProps, IVSChartDataPoint } from '../../index';
export interface IVerticalStackedBarChartState extends IBasestate {
    selectedLegendTitle: string;
    dataPointCalloutProps?: IVSChartDataPoint;
    stackCalloutProps?: IVerticalStackedChartProps;
}
export declare class VerticalStackedBarChartBase extends React.Component<IVerticalStackedBarChartProps, IVerticalStackedBarChartState> {
    private _points;
    private _dataset;
    private _xAxisLabels;
    private _bars;
    private _isNumeric;
    private _barWidth;
    private _calloutId;
    private _colors;
    private margins;
    private _isRtl;
    constructor(props: IVerticalStackedBarChartProps);
    componentDidUpdate(prevProps: IVerticalStackedBarChartProps): void;
    render(): React.ReactNode;
    private _adjustProps;
    private _createDataSetLayer;
    private _getMargins;
    private _renderCallout;
    private _getCustomizedCallout;
    private _onLegendClick;
    private _onLegendHover;
    private _onLegendLeave;
    private _getLegendData;
    private _onRectHover;
    private _onStackHover;
    private _onRectFocus;
    private _onStackFocus;
    private _handleMouseOut;
    private _redirectToUrl;
    private _getYMax;
    private _createBar;
    private _createNumericBars;
    private _createStringBars;
    private _getGraphData;
}
