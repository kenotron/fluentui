import * as React from 'react';
import { IHeatMapChartProps } from './HeatMapChart.types';
import { Target } from '@fluentui/react';
export interface IHeatMapChartState {
    /**
     * determines if the legend any of the legend is selected or not
     * @default false
     */
    isLegendSelected: boolean;
    /**
     * contains the seleted legend string
     */
    activeLegend: string;
    /**
     * determines if the legend is hovered or not
     * @default false
     */
    isLegendHovered: boolean;
    /**
     * determines wethere to show or hide the callout
     * @default false
     */
    isCalloutVisible: boolean;
    /**
     * y value to be shown in callout
     */
    calloutYValue: string;
    /**
     * legend title to be shown in callout
     */
    calloutLegend: string;
    /**
     * color of the text in the callout
     */
    calloutTextColor: string;
    /**
     * The target that the Callout should try to position itself based on
     */
    target: Target;
    /**
     * ratio to show in the callout
     */
    ratio: [number, number] | null;
    /**
     * description message to show in the callout
     */
    descriptionMessage: string;
    /**
     * id to give to callout for accesiblity purpose
     */
    calloutId: string;
}
export declare class HeatMapChartBase extends React.Component<IHeatMapChartProps, IHeatMapChartState> {
    private _classNames;
    private _stringXAxisDataPoints;
    private _stringYAxisDataPoints;
    private _createSet;
    private _dataSet;
    private _colorScale;
    private _xAxisScale;
    private _yAxisScale;
    /**
     * This array contains ref for all the rectangles
     * drawn inside the chard
     */
    private _rectRefArray;
    private _xAxisType;
    private _yAxisType;
    constructor(props: IHeatMapChartProps);
    render(): React.ReactNode;
    private _getOpacity;
    private _rectRefCallback;
    private _onRectFocus;
    private _onRectMouseOver;
    private _onRectBlurOrMouseOut;
    /**
     * This is the function which is responsible for
     * drawing the rectangle in the graph and also
     * attaching dom events to that rectangles
     */
    private _createRectangles;
    /**
     * when the legend is hovered we need to highlight
     * all the rectangles which fall under that category
     * and un-highlight the rest of them, this functionality
     * should happen only when there no legend Selected
     * @param legendTitle
     */
    private _onLegendHover;
    /**
     * when the mouse is out from the legend , we need
     * to show the graph in initial mode. isLegendFocused will
     * be useful at the scenario where mouseout happend for
     * the legends which are in overflow card
     * @param isLegendFocused
     */
    private _onLegendLeave;
    /**
     * @param legendTitle
     * when the legend is clicked we need to highlight
     * all the rectangles which fall under that category
     * and un highlight the rest of them
     */
    private _onLegendClick;
    private _createLegendBars;
    private _getColorScale;
    private _getXIndex;
    private _getYIndex;
    /**
     * This will create a new data set based on the prop
     * @data
     * We will be using This data set to contsruct our rectangles
     * in the chart, we use this data set becuase, when we loop in this
     * data and build the heat map, it will support accessibility as
     * specified in the figma
     */
    private _createNewDataSet;
    /**
     * This function will return the final sorted and formatted x-axis points
     * which will be rendered on the x-axis
     * @param points
     * @returns x-axis points
     */
    private _getXAxisDataPoints;
    /**
     * This function will return the final sorted and formatted y-axis points
     * which will be rendered on the y-axis
     * @param points
     * @returns yaxis points
     */
    private _getYAxisDataPoints;
    private _getStringFormattedDate;
    private _getStringFormattedNumber;
    private _getFormattedLabelForXAxisDataPoint;
    private _getFormattedLabelForYAxisDataPoint;
}
