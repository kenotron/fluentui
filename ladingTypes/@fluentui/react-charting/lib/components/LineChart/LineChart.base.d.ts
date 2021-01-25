import * as React from 'react';
import { IBasestate, ILineChartProps, ILineChartPoints, ICustomizedCalloutData, IColorFillBarsProps } from '../../index';
export interface IContainerValues {
    width: number;
    height: number;
    shouldResize: boolean;
    reqID: number;
}
export interface ILineChartState extends IBasestate {
    selectedLegendPoints: ILineChartPoints[];
    selectedColorBarLegend: IColorFillBarsProps[];
    isSelectedLegend: boolean;
    dataPointCalloutProps?: ICustomizedCalloutData;
    stackCalloutProps?: ICustomizedCalloutData;
}
export declare class LineChartBase extends React.Component<ILineChartProps, ILineChartState> {
    private _points;
    private _calloutPoints;
    private _xAxisScale;
    private _yAxisScale;
    private _circleId;
    private _lineId;
    private _verticalLine;
    private _colorFillBarPatternId;
    private _uniqueCallOutID;
    private _refArray;
    private margins;
    private eventLabelHeight;
    private lines;
    private _renderedColorFillBars;
    private _colorFillBars;
    private _colorFillBarsOpacity;
    constructor(props: ILineChartProps);
    componentDidUpdate(prevProps: ILineChartProps): void;
    render(): JSX.Element;
    private _getCustomizedCallout;
    private _getMargins;
    private _initializeLineChartData;
    private _handleSingleLegendSelectionAction;
    private _onHoverCardHide;
    private _createLegends;
    private _createLines;
    private _createColorFillBars;
    private _getStripePattern;
    private _refCallback;
    private _handleFocus;
    private _handleHover;
    private _onLineClick;
    private _onDataPointClick;
    private _handleMouseOut;
    private _handleLegendClick;
    private _handleMultipleLineLegendSelectionAction;
    private _handleMultipleColorFillBarLegendSelectionAction;
    private _clearMultipleLegendSelections;
}
