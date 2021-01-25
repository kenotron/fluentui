import * as React from 'react';
import { IGroupedVerticalBarChartProps, IGVBarChartSeriesPoint, IBasestate } from '../../index';
export interface IGroupedVerticalBarChartState extends IBasestate {
    titleForHoverCard: string;
    dataPointCalloutProps?: IGVBarChartSeriesPoint;
}
export declare class GroupedVerticalBarChartBase extends React.Component<IGroupedVerticalBarChartProps, IGroupedVerticalBarChartState> {
    private _createSet;
    private _dataset;
    private _keys;
    private _xAxisLabels;
    private _datasetForBars;
    private margins;
    private _groupedVerticalBarGraph;
    private _classNames;
    private _refArray;
    private _yMax;
    private _calloutId;
    private _tooltipId;
    private _isNumeric;
    private _isRtl;
    constructor(props: IGroupedVerticalBarChartProps);
    render(): React.ReactNode;
    private _getGraphData;
    private _getMargins;
    private _createDataSetOfGVBC;
    private _getCustomizedCallout;
    private _getOpacity;
    private _onBarHover;
    private _onBarLeave;
    private _onBarFocus;
    private _redirectToUrl;
    private _refCallback;
    private _buildGraph;
    private _createDataset;
    private _createX0Scale;
    private _createX1Scale;
    private _onLegendClick;
    private _onLegendHover;
    private _onLegendLeave;
    private _getLegendData;
}
