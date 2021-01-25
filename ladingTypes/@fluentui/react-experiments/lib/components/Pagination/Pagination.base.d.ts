import * as React from 'react';
import { IPaginationProps } from './Pagination.types';
export declare class PaginationBase extends React.Component<IPaginationProps> {
    static defaultProps: Partial<IPaginationProps>;
    private _classNames;
    constructor(props: IPaginationProps);
    render(): JSX.Element;
    private _handleFirstPage;
    private _handleLastPage;
    private _onComboBoxChange;
    private _handleSelectedPage;
    private _handlePreviousPage;
    private _handleNextPage;
    private _pageElement;
    private _pageList;
    private _renderVisibleItemLabel;
}
