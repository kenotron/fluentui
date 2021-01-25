import * as React from 'react';
import { IFolderCoverProps } from './FolderCover.types';
import { ISize } from '../../Utilities';
export interface IFolderCoverState {
}
export declare class FolderCover extends React.Component<IFolderCoverProps, IFolderCoverState> {
    render(): JSX.Element | null;
    private _renderChildren;
}
export interface IFolderCoverLayout {
    contentSize: ISize;
}
export declare function getFolderCoverLayout(element: JSX.Element): IFolderCoverLayout;
export declare function renderFolderCoverWithLayout(element: JSX.Element, props: Partial<IFolderCoverProps>): JSX.Element;
