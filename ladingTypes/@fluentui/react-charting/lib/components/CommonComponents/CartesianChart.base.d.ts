import * as React from 'react';
import { IModifiedCartesianChartProps } from '../../index';
export interface ICartesianChartState {
    containerWidth: number;
    containerHeight: number;
    _width: number;
    _height: number;
    isRemoveValCalculated?: boolean;
    _removalValueForTextTuncate?: number;
}
/**
 * Cartesian chart used for
 * 1.draw X and Y axis of the chart
 * 2.Callout
 * 3.Fit parent Continer
 */
export declare class CartesianChartBase extends React.Component<IModifiedCartesianChartProps, ICartesianChartState> {
    private _classNames;
    private chartContainer;
    private legendContainer;
    private minLegendContainerHeight;
    private xAxisElement;
    private yAxisElement;
    private margins;
    private idForGraph;
    private _reqID;
    private _isRtl;
    constructor(props: IModifiedCartesianChartProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: IModifiedCartesianChartProps): void;
    render(): JSX.Element;
    private _multiValueCallout;
    private _yValueHoverSubCountsExists;
    private _getCalloutContent;
    private _fitParentContainer;
    private _getData;
}
