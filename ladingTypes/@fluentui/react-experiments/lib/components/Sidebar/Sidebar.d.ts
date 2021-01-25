/*!
 * Copyright (C) Microsoft Corporation. All rights reserved.
 */
import * as React from 'react';
import { ISidebar, ISidebarProps } from './Sidebar.types';
export interface ISidebarState {
    isCollapsed: boolean;
}
export declare class Sidebar extends React.Component<ISidebarProps, ISidebarState> implements ISidebar {
    private _theme;
    private _classNames;
    private _colors;
    private _buttonStyles;
    constructor(props: ISidebarProps);
    componentDidMount(): void;
    render(): JSX.Element;
    toggleCollapsed: () => void;
    setCollapsed(newValue: boolean): void;
    getCollapsed(): boolean;
    private _renderItemInSidebar;
    private _renderSidebarButton;
    private _renderSidebarItemWithChildren;
    private _renderSidebarAccordion;
    private _renderAccordionItems;
    private _renderSidebarButtonWithMenu;
    private _onItemClick;
    private _getButtonAs;
    private _getClassNames;
    private _renderSidebarButtonMenuItem;
}
