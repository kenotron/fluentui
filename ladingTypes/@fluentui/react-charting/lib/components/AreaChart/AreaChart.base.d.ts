import * as React from 'react';
import { ICustomizedCalloutData, IAreaChartProps, IBasestate } from '../../index';
declare enum InterceptVisibility {
    show = "visibility",
    hide = "hidden"
}
export interface IAreaChartAreaPoint {
    xVal: string | number;
    values: IAreaChartDataSetPoint;
}
export interface IAreaChartDataSetPoint {
    [key: string]: number | string;
}
export interface IDPointType {
    values: {
        0: number;
        1: number;
        data: {};
    };
    xVal: number | Date;
}
export interface IAreaChartState extends IBasestate {
    lineXValue: number;
    displayOfLine: InterceptVisibility;
    isCircleClicked: boolean;
    dataPointCalloutProps?: ICustomizedCalloutData;
    stackCalloutProps?: ICustomizedCalloutData;
    nearestCircleToHighlight: number | string | Date | null;
}
export declare class AreaChartBase extends React.Component<IAreaChartProps, IAreaChartState> {
    private _calloutPoints;
    private _createSet;
    private _colors;
    private _uniqueIdForGraph;
    private _verticalLineId;
    private _circleId;
    private _uniqueCallOutID;
    private _stackedData;
    private _chart;
    private margins;
    private _rectId;
    private _xAxisRectScale;
    private _isMultiStackChart;
    constructor(props: IAreaChartProps);
    render(): JSX.Element;
    private _getMargins;
    private _onRectMouseMove;
    /**
     * just cleaning up the state which we have set in the mouse move event
     */
    private _onRectMouseOut;
    private _getStackedData;
    private _createDataSet;
    private _getCustomizedCallout;
    private _getGraphData;
    private _onLegendClick;
    private _onLegendHover;
    private _onLegendLeave;
    private _getLegendData;
    private _onDataPointClick;
    private _getOpacity;
    private _getLineOpacity;
    private _updateCircleFillColor;
    private _drawGraph;
    private _getCircleRadius;
}
export {};
