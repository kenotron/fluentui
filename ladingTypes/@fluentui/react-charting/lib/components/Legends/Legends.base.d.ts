import * as React from 'react';
import { ILegendsProps } from './Legends.types';
export interface ILegendState {
    selectedLegend: string;
    selecetedLegendInHoverCard: string;
    selectedState: boolean;
    hoverState: boolean;
    isHoverCardVisible: boolean;
    selectedLegends: string[];
}
export declare class LegendsBase extends React.Component<ILegendsProps, ILegendState> {
    private _hoverCardRef;
    private _classNames;
    constructor(props: ILegendsProps);
    componentDidUpdate(prevProps: ILegendsProps): void;
    render(): JSX.Element;
    private _generateData;
    private _onRenderData;
    private _onReduceData;
    private _onGrowData;
    /**
     * This function will get called when there is an ability to
     * select  multiple legends
     * @param legend ILegend
     */
    private _canSelectMultipleLegends;
    /**
     * This function will get called when there is
     * ability to select only single legend
     * @param legend ILegend
     */
    private _canSelectOnlySingleLegend;
    private _onClick;
    private _onRenderCompactCard;
    private _renderOverflowItems;
    private _hoverCardVisible;
    private _onHoverOverLegend;
    private _onLeave;
    private _renderButton;
    private _getShapeClass;
    private _getColor;
}
