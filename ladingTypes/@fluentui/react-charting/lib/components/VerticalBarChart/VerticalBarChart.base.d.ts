import * as React from 'react';
import { IBasestate, IVerticalBarChartProps, IVerticalBarChartDataPoint, IYValueHover } from '../../index';
export interface IVerticalBarChartState extends IBasestate {
    selectedLegendTitle: string;
    dataPointCalloutProps?: IVerticalBarChartDataPoint;
    /**
     * data point of x, where rectangle is hovered or focused
     */
    activeXdataPoint: number | string | null;
    YValueHover: IYValueHover[];
    hoverXValue?: string | number | null;
}
export declare class VerticalBarChartBase extends React.Component<IVerticalBarChartProps, IVerticalBarChartState> {
    private _points;
    private _barWidth;
    private _colors;
    private _classNames;
    private _refArray;
    private _calloutId;
    private margins;
    private _isRtl;
    private _bars;
    private _xAxisLabels;
    private _yMax;
    private _isHavingLine;
    private _xAxisType;
    constructor(props: IVerticalBarChartProps);
    render(): JSX.Element;
    private _createLine;
    private _checkForLine;
    private _adjustProps;
    private _getMargins;
    private _renderContentForBothLineAndBars;
    private _renderContentForOnlyBars;
    private _renderCallout;
    private _getCustomizedCallout;
    private _getGraphData;
    private _createColors;
    private _refCallback;
    private _getCalloutContentForLineAndBar;
    private _onBarHover;
    private _onBarLeave;
    private _onBarFocus;
    private _getScales;
    private _createNumericBars;
    private _createStringBars;
    private _onLegendClick;
    private _onLegendHover;
    private _onLegendLeave;
    private _getLegendData;
}
