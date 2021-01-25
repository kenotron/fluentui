import * as React from 'react';
import * as scale from 'd3-scale';
import { IChartDataPoint, IDonutChartProps } from './index';
export interface IDonutChartState {
    showHover?: boolean;
    value?: string | undefined;
    legend?: string | undefined;
    _width?: number | undefined;
    _height?: number | undefined;
    activeLegend?: string;
    color?: string | undefined;
    isLegendSelected?: boolean;
    xCalloutValue?: string;
    yCalloutValue?: string;
    focusedArcId?: string;
    selectedLegend: string;
    dataPointCalloutProps?: IChartDataPoint;
}
export declare class DonutChartBase extends React.Component<IDonutChartProps, IDonutChartState> {
    static defaultProps: Partial<IDonutChartProps>;
    _colors: scale.ScaleOrdinal<string, {}>;
    private _classNames;
    private _rootElem;
    private _uniqText;
    private _currentHoverElement;
    private _calloutId;
    static getDerivedStateFromProps(nextProps: Readonly<IDonutChartProps>, prevState: Readonly<IDonutChartState>): Partial<IDonutChartState> | null;
    constructor(props: IDonutChartProps);
    componentDidMount(): void;
    render(): JSX.Element;
    private _closeCallout;
    private _setViewBox;
    private _createLegends;
    private _focusCallback;
    private _hoverCallback;
    private _onBlur;
    private _hoverLeave;
    private _valueInsideDonut;
}
