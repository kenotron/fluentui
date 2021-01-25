import { Axis as D3Axis } from 'd3-axis';
import { IEventsAnnotationProps, ILineChartPoints, IDataPoint, IVerticalBarChartDataPoint } from '../index';
export declare type NumericAxis = D3Axis<number | {
    valueOf(): number;
}>;
export declare type StringAxis = D3Axis<string>;
export declare enum ChartTypes {
    AreaChart = 0,
    LineChart = 1,
    VerticalBarChart = 2,
    VerticalStackedBarChart = 3,
    GroupedVerticalBarChart = 4,
    HeatMapChart = 5
}
export declare enum XAxisTypes {
    NumericAxis = 0,
    DateAxis = 1,
    StringAxis = 2
}
export declare enum YAxisType {
    NumericAxis = 0,
    DateAxis = 1,
    StringAxis = 2
}
export interface IWrapLabelProps {
    node: SVGElement | null;
    xAxis: NumericAxis | StringAxis;
    noOfCharsToTruncate: number;
    showXAxisLablesTooltip: boolean;
}
export interface IMargins {
    /**
     * left margin for the chart.
     * @default 40
     */
    left?: number;
    /**
     * Right margin for the chart.
     * @default 20
     */
    right?: number;
    /**
     * Top margin for the chart.
     * @default 20
     */
    top?: number;
    /**
     * Bottom margin for the chart.
     * @default 35
     */
    bottom?: number;
}
export interface IDomainNRange {
    dStartValue: number | Date;
    dEndValue: number | Date;
    rStartValue: number;
    rEndValue: number;
}
export interface IXAxisParams {
    domainNRangeValues: IDomainNRange;
    xAxisElement?: SVGElement | null;
    xAxisCount?: number;
    showRoundOffXTickValues?: boolean;
    xAxistickSize?: number;
    tickPadding?: number;
    xAxisPadding?: number;
}
export interface ITickParams {
    tickValues?: Date[] | number[];
    tickFormat?: string;
}
export interface IYAxisParams {
    yMinMaxValues?: {
        startValue: number;
        endValue: number;
    };
    maxOfYVal?: number;
    margins: IMargins;
    containerWidth: number;
    containerHeight: number;
    yAxisElement?: SVGElement | null;
    yAxisTickFormat?: any;
    yAxisTickCount: number;
    yMaxValue?: number;
    yMinValue?: number;
    tickPadding?: number;
    eventAnnotationProps?: IEventsAnnotationProps;
    eventLabelHeight?: number;
    yAxisPadding?: number;
}
/**
 * Create Numeric X axis
 * @export
 * @param {IXAxisParams} xAxisParams
 */
export declare function createNumericXAxis(xAxisParams: IXAxisParams): import("d3-scale").ScaleLinear<number, number>;
/**
 * Creating Date x axis of the Chart
 * @export
 * @param {IXAxisParams} xAxisParams
 * @param {ITickParams} tickParams
 */
export declare function createDateXAxis(xAxisParams: IXAxisParams, tickParams: ITickParams): import("d3-scale").ScaleTime<number, number>;
/**
 * Create String X axis
 * Currently using for only Vetical stacked bar chart and grouped vertical bar chart
 * @export
 * @param {IXAxisParams} xAxisParams
 * @param {ITickParams} tickParams
 * @param {string[]} dataset
 * @returns
 */
export declare function createStringXAxis(xAxisParams: IXAxisParams, tickParams: ITickParams, dataset: string[]): import("d3-scale").ScaleBand<string>;
/**
 * This method used for creating data points for the y axis.
 * @export
 * @param {number} maxVal
 * @param {number} minVal
 * @param {number} splitInto
 * @returns {number[]}
 */
export declare function prepareDatapoints(maxVal: number, minVal: number, splitInto: number): number[];
/**
 * Creating Numeric Y axis of the chart
 * @export
 * @param {IYAxisParams} yAxisParams
 * @param {boolean} isRtl
 */
export declare function createYAxis(yAxisParams: IYAxisParams, isRtl: boolean): import("d3-scale").ScaleLinear<number, number>;
/**
 * Creating String Y axis of the chart
 * @param yAxisParams
 * @param dataPoints
 * @param isRtl
 */
export declare const createStringYAxis: (yAxisParams: IYAxisParams, dataPoints: string[], isRtl: boolean) => import("d3-scale").ScaleBand<string>;
/**
 * For area chart and line chart, while displaying stackCallout, Need to form a callout data object.
 * This methos creates an object for those 2 charts.
 * @param values
 */
export declare function calloutData(values: ILineChartPoints[]): {
    x: string | number | Date;
    values: {
        legend: string;
        y: number;
    }[];
}[];
export declare function getUnique(arr: {
    x: number | Date | string;
    values: {
        legend: string;
        y: number;
    }[];
}[], comp: string | number): {
    x: string | number | Date;
    values: {
        legend: string;
        y: number;
    }[];
}[];
/**
 * This function takes two paramerter
 * 1. an array of strings
 * 2. a string value
 * if the value is not present in the given array then it will return the new
 * array by appending the value to the present arrray.
 *
 * if the value is already present in  the given array then it will return the new
 * array by deleteing the value from the the array
 * @param array
 * @param value
 */
export declare function silceOrAppendToArray(array: string[], value: string): string[];
/**
 * This method used for wrapping of x axis lables (tick values).
 * It breaks down given text value by space separated and calculates the total height needed to display all the words.
 * That value = removal value. This value needs to be remove from total svg height, svg will shrink and
 * total text will be displayed.
 * @export
 * @param {IWrapLabelProps} wrapLabelProps
 * @returns
 */
export declare function createWrapOfXLabels(wrapLabelProps: IWrapLabelProps): number | undefined;
/**
 * This method displays a tooltip to the x axis lables(tick values)
 * when prop 'showXAxisLablesTooltip' enables to the respected chart.
 * On hover of the truncated word(at x axis labels tick), a tooltip will be appeared.
 */
export declare function tooltipOfXAxislabels(xAxistooltipProps: any): void;
/**
 * Find the axis type of line chart and area chart from given data
 * @param points
 */
export declare function getXAxisType(points: ILineChartPoints[]): boolean;
/**
 * Calculates Domain and range values for Date X axis.
 * This method calculates Area chart and line chart.
 * @export
 * @param {ILineChartPoints[]} points
 * @param {IMargins} margins
 * @param {number} width
 * @param {boolean} isRTL
 * @param {Date[] | number[]} tickValues
 * @returns {IDomainNRange}
 */
export declare function domainRangeOfDateForAreaChart(points: ILineChartPoints[], margins: IMargins, width: number, isRTL: boolean, tickValues?: Date[]): IDomainNRange;
/**
 * Calculates Domain and range values for Numeric X axis.
 * This method calculates Area cart and line chart.
 * @export
 * @param {ILineChartPoints[]} points
 * @param {IMargins} margins
 * @param {number} width
 * @param {boolean} isRTL
 * @returns {IDomainNRange}
 */
export declare function domainRangeOfNumericForAreaChart(points: ILineChartPoints[], margins: IMargins, width: number, isRTL: boolean): IDomainNRange;
/**
 * Calculates Range values of x Axis string axis
 * For String axis, we need to give domain values (Not start and end array values)
 * So sending 0 as domain values. Domain will be handled at creation of string axis
 * For charts stacked bar chart, grouped vertical bar chart, HeatMapChart and Vertical bar chart
 * @export
 * @param {IMargins} margins
 * @param {number} width
 * @param {boolean} isRTL
 * @returns {IDomainNRange}
 */
export declare function domainRangeOfXStringAxis(margins: IMargins, width: number, isRTL: boolean): IDomainNRange;
/**
 * Calculate domain and range values to the Vertical stacked bar chart - For Numeric axis
 * @export
 * @param {IDataPoint[]} points
 * @param {IMargins} margins
 * @param {number} width
 * @param {boolean} isRTL
 * @param {number} barWidth
 * @returns {IDomainNRange}
 */
export declare function domainRangeOfVSBCNumeric(points: IDataPoint[], margins: IMargins, width: number, isRTL: boolean, barWidth: number): IDomainNRange;
/**
 * Calculate domain and range values to the Vertical bar chart - For Numeric axis
 * @export
 * @param {IDataPoint[]} points
 * @param {IMargins} margins
 * @param {number} containerWidth
 * @param {boolean} isRTL
 * @param {number} barWidth
 * @returns {IDomainNRange}
 */
export declare function domainRageOfVerticalNumeric(points: IDataPoint[], margins: IMargins, containerWidth: number, isRTL: boolean, barWidth: number): IDomainNRange;
/**
 * For creating X axis, need to calculate x axis domain and range values from given points.
 * This may vary based on chart type and type of x axis
 * So, this method will define which method need to call based on chart type and axis type.
 * @export
 * @param {*} points
 * @param {IMargins} margins
 * @param {number} width
 * @param {ChartTypes} chartType
 * @param {boolean} isRTL
 * @param {XAxisTypes} xAxisType
 * @param {number} [barWidth]
 * @returns {IDomainNRange}
 */
export declare function getDomainNRangeValues(points: any, margins: IMargins, width: number, chartType: ChartTypes, isRTL: boolean, xAxisType: XAxisTypes, barWidth: number, tickValues: Date[] | number[] | undefined): IDomainNRange;
/**
 * Calculating start and ending values of the Area chart and LineChart
 * @export
 * @param {ILineChartPoints[]} points
 * @returns {{ startValue: number; endValue: number }}
 */
export declare function findNumericMinMaxOfY(points: ILineChartPoints[]): {
    startValue: number;
    endValue: number;
};
/**
 * Find the minimum and maximum values of the vertical stacked bar chart y axis data point. Used for create y axis.
 * @export
 * @param {IDataPoint[]} dataset
 * @returns {{ startValue: number; endValue: number }}
 */
export declare function findVSBCNumericMinMaxOfY(dataset: IDataPoint[]): {
    startValue: number;
    endValue: number;
};
/**
 * Fins the min and max values of the vertical bar chart y axis data point.
 * @export
 * @param {IVerticalBarChartDataPoint[]} points
 * @returns {{ startValue: number; endValue: number }}
 */
export declare function findVerticalNumericMinMaxOfY(points: IVerticalBarChartDataPoint[]): {
    startValue: number;
    endValue: number;
};
/**
 * For creating Y axis, need to calculate y axis domain values from given points. This may vary based on chart type.
 * So, this method will define which method need to call based on chart type to find out min and max values(For Domain).
 * For grouped vertical bar chart, Calculating yMax value in the base file and sending as MaxOfYVal to cartesian.
 * @export
 * @param {*} points
 * @param {ChartTypes} chartType
 * @returns {{ startValue: number; endValue: number }}
 */
export declare function getMinMaxOfYAxis(points: any, chartType: ChartTypes): {
    startValue: number;
    endValue: number;
};
/**
 * @param p string or number or Date
 *
 * This function takes the single data point of the x-aixs
 * and decides what is the x-axis
 */
export declare const getTypeOfAxis: (p: string | number | Date, isXAsix: boolean) => XAxisTypes | YAxisType;
