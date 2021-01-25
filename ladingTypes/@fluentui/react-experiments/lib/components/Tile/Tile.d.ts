import * as React from 'react';
import { ITileProps, TileSize } from './Tile.types';
import { ISize } from '../../Utilities';
export declare const TileLayoutValues: {
    nameplatePadding: 12;
    largeNameplateNameHeight: 15;
    smallNameplateNameHeight: 12;
    nameplateMargin: 0;
    largeNameplateActivityHeight: 20;
    smallNameplateActivityHeight: 20;
    foregroundMargin: 16;
};
export declare type TileLayoutValues = typeof TileLayoutValues[keyof typeof TileLayoutValues];
export interface ITileState {
    isSelected?: boolean;
    isModal?: boolean;
}
export declare const TileLayoutSizes: {
    [P in TileSize]: {
        nameplatePadding: number;
        nameplateNameHeight: number;
        nameplateMargin: number;
        nameplateActivityHeight: number;
        foregroundMargin: number;
    };
};
/**
 * A tile provides a frame for a potentially-selectable item which displays its contents prominently.
 */
export declare class Tile extends React.Component<ITileProps, ITileState> {
    private _nameId;
    private _activityId;
    private _labelId;
    private _descriptionId;
    private _events;
    constructor(props: ITileProps, context: any);
    UNSAFE_componentWillReceiveProps(nextProps: ITileProps): void;
    componentDidMount(): void;
    componentDidUpdate(previousProps: ITileProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private _onRenderBackground;
    private _onRenderForeground;
    private _onRenderNameplate;
    private _onRenderCheck;
    private _onSelectionChange;
}
export interface ITileLayout {
    foregroundSize?: ISize | undefined;
    backgroundSize?: ISize | undefined;
}
export declare function getTileLayout(tileElement: JSX.Element): ITileLayout;
export declare function renderTileWithLayout(tileElement: JSX.Element, props: Partial<ITileProps>): JSX.Element;
