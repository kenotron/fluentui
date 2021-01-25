import * as React from 'react';
import { ISuggestionModel } from '@fluentui/react/lib/Pickers';
import { ISuggestionsHeaderFooterItemProps, ISuggestionsControlProps } from './Suggestions.types';
export declare enum SuggestionItemType {
    header = 0,
    suggestion = 1,
    footer = 2
}
export interface ISuggestionsControlState<T> {
    selectedHeaderIndex: number;
    selectedFooterIndex: number;
    suggestions: ISuggestionModel<T>[];
}
export declare class SuggestionsHeaderFooterItem extends React.Component<ISuggestionsHeaderFooterItemProps, {}> {
    constructor(props: ISuggestionsHeaderFooterItemProps);
    render(): JSX.Element;
}
/**
 * Class when used with SuggestionsStore, renders a suggestions control with customizable headers and footers
 */
export declare class SuggestionsControl<T> extends React.Component<ISuggestionsControlProps<T>, ISuggestionsControlState<T>> {
    private _selectedElement;
    private _suggestions;
    constructor(suggestionsProps: ISuggestionsControlProps<T>);
    componentDidMount(): void;
    componentDidUpdate(prevProps: ISuggestionsControlProps<T>, prevState: ISuggestionsControlState<T>): void;
    UNSAFE_componentWillReceiveProps(newProps: ISuggestionsControlProps<T>): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    get currentSuggestion(): ISuggestionModel<T> | undefined;
    get currentSuggestionIndex(): number;
    get selectedElement(): HTMLDivElement | undefined;
    hasSuggestionSelected(): boolean;
    hasSelection(): boolean;
    executeSelectedAction(): void;
    removeSuggestion(index?: number): void;
    /**
     * Handles the key down, returns true, if the event was handled, false otherwise
     * @param keyCode - The keyCode to handle
     */
    handleKeyDown(keyCode: number): boolean;
    scrollSelected(): void;
    private _renderHeaderItems;
    private _renderFooterItems;
    private _renderSuggestions;
    /**
     * Selects the next selectable item
     */
    private _selectNextItem;
    /**
     * Selects the previous selectable item
     */
    private _selectPreviousItem;
    /**
     * Resets the selected state and selects the first selectable item
     */
    private _resetSelectedItem;
    /**
     * Selects the first item
     */
    private _selectFirstItem;
    /**
     * Selects the last item
     */
    private _selectLastItem;
    /**
     * Selects the next item in the suggestion item type group, given the current index
     * If none is able to be selected, returns false, otherwise returns true
     * @param itemType - The suggestion item type
     * @param currentIndex - The current index, default is -1
     */
    private _selectNextItemOfItemType;
    /**
     * Selects the previous item in the suggestion item type group, given the current index
     * If none is able to be selected, returns false, otherwise returns true
     * @param itemType - The suggestion item type
     * @param currentIndex - The current index. If none is provided, the default is the items length of specified type
     */
    private _selectPreviousItemOfItemType;
    private _getCurrentIndexForType;
    private _getNextItemSectionType;
    private _getPreviousItemSectionType;
}
