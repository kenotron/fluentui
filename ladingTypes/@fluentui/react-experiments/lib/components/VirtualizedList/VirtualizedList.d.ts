import * as React from 'react';
import { IVirtualizedListProps } from './VirtualizedList.types';
import { IScrollContainerContext, ScrollContainerContextTypes } from '../../utilities/scrolling/ScrollContainer';
import { IObjectWithKey } from '@fluentui/react/lib/Selection';
export interface IVirtualizedListState {
    viewportHeight: number;
    items: React.ReactNode[];
}
export declare class VirtualizedList<TItem extends IObjectWithKey> extends React.Component<IVirtualizedListProps<TItem>, IVirtualizedListState> {
    static contextTypes: typeof ScrollContainerContextTypes;
    context: IScrollContainerContext;
    private _root;
    private _spacerElements;
    private _focusedIndex;
    private _events;
    constructor(props: IVirtualizedListProps<TItem>, context: IScrollContainerContext);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    UNSAFE_componentWillUpdate(): void;
    render(): JSX.Element;
    private _updateObservedElements;
    private _renderItems;
    private _renderRanges;
    private _renderSpacerItem;
    private _spacerRef;
    private _render;
    private _onFocus;
}
