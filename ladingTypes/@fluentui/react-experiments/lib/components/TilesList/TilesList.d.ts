import * as React from 'react';
import { ITilesListProps, TilesGridMode } from './TilesList.types';
import { ScrollToMode } from '@fluentui/react/lib/List';
export interface ITilesListState<TItem> {
    cells: ITileCell<TItem>[];
}
/**
 * @internal
 */
export interface ITileGrid {
    minRowHeight: number;
    mode: TilesGridMode;
    spacing: number;
    maxScaleFactor: number;
    marginTop: number;
    marginBottom: number;
    key: string;
    isPlaceholder?: boolean;
    maxRowCount?: number;
}
/**
 * @internal
 */
export interface ITileCell<TItem> {
    key: string;
    content: TItem;
    aspectRatio: number;
    grid: ITileGrid;
    isPlaceholder?: boolean;
    desiredHeight?: number;
    onRender(props: {
        item: TItem;
        finalSize: {
            width: number;
            height: number;
        };
        position: {
            column: number;
        };
    }): React.ReactNode;
}
/**
 * Component which renders a virtualized flexbox list of 'tiles', which have arbitrary width and height
 * and which support scaling to fill rows when needed.
 */
export declare class TilesList<TItem> extends React.Component<ITilesListProps<TItem>, ITilesListState<TItem>> {
    private _pageSpecificationCache;
    private listRef;
    constructor(props: ITilesListProps<TItem>, context: any);
    UNSAFE_componentWillReceiveProps(nextProps: ITilesListProps<TItem>): void;
    UNSAFE_componentWillUpdate(nextProps: ITilesListProps<TItem>, nextState: ITilesListState<TItem>): void;
    render(): JSX.Element;
    scrollToIndex(index: number, mode?: ScrollToMode): void;
    getTotalListHeight(): number;
    private _onRenderCell;
    private _onRenderListRoot;
    /**
     * Renders a single list page using a flexbox layout.
     * By default, List provides no special formatting for a list page. For Tiles, the parent element
     * needs flexbox metadata and padding to support the alignment rules.
     */
    private _onRenderPage;
    /**
     * Gets the specification for the list page, which requires pre-calculating the flexbox layout
     * to determine the set of tiles which fit neatly within a rectangle. Any tiles left dangling
     * at the end of a page are overflowed into the next page unless they are just before a grid
     * boundary.
     */
    private _getPageSpecification;
    private _renderRow;
    private _onGetCellClassName;
    private _onGetPageClassName;
    /**
     * Get the style to be applied to a single list cell, which will specify the flex behavior
     * within the flexbox layout.
     */
    private _onGetCellStyle;
    /**
     * Flattens the grid and item specifications into a cell list. List will partition the cells into
     * pages use `getPageSpecification`, so each cell is marked up with metadata to assist the flexbox
     * algorithm.
     */
    private _getCells;
}
