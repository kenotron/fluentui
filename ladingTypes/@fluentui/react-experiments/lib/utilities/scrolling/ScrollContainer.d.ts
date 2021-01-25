import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IScrollContainerProps } from './ScrollContainer.types';
export interface IVisibleCallback {
    (scrollTop: number): void;
}
export interface IScrollContainer {
    observe(element: Element): void;
    unobserve(element: Element): void;
    registerVisibleCallback(callback: IVisibleCallback): void;
}
export interface IScrollContainerContext {
    scrollContainer: IScrollContainer;
}
export declare const ScrollContainerContextTypes: {
    scrollContainer: PropTypes.Validator<object>;
};
export declare class ScrollContainer extends React.Component<IScrollContainerProps> implements IScrollContainer {
    static childContextTypes: typeof ScrollContainerContextTypes;
    private _observer;
    private _root;
    private _callbacks;
    private _pendingElements;
    private _async;
    constructor(props: IScrollContainerProps);
    getChildContext(): IScrollContainerContext;
    observe(element: Element): void;
    unobserve(element: Element): void;
    registerVisibleCallback(callback: IVisibleCallback): void;
    render(): JSX.Element;
    componentWillUnmount(): void;
    private _resolveRoot;
    private _onIntersection;
    private _init;
    private _onScroll;
}
