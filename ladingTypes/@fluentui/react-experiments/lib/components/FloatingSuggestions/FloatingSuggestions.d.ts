import * as React from 'react';
import { IFloatingSuggestions, IFloatingSuggestionsProps } from './FloatingSuggestions.types';
import { ISuggestionModel } from '@fluentui/react/lib/Pickers';
export interface IFloatingSuggestionsState {
    queryString: string;
    suggestionsVisible?: boolean;
    didBind: boolean;
}
export declare class FloatingSuggestions<TItem> extends React.Component<IFloatingSuggestionsProps<TItem>, IFloatingSuggestionsState> implements IFloatingSuggestions<TItem> {
    private root;
    private suggestionStore;
    private suggestionsControl;
    private currentPromise;
    private isComponentMounted;
    private _async;
    constructor(basePickerProps: IFloatingSuggestionsProps<TItem>);
    get inputText(): string;
    get suggestions(): ISuggestionModel<TItem>[];
    forceResolveSuggestion(): void;
    get currentSelectedSuggestionIndex(): number;
    get isSuggestionsShown(): boolean;
    onQueryStringChanged: (queryString: string) => void;
    hidePicker: () => void;
    showPicker: (updateValue?: boolean) => void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    UNSAFE_componentWillReceiveProps(newProps: IFloatingSuggestionsProps<TItem>): void;
    onCurrentlySelectedSuggestionChosen: () => void;
    updateSuggestions(suggestions: TItem[], forceUpdate?: boolean): void;
    render(): JSX.Element;
    updateValue(updatedValue: string): void;
    updateSuggestionWithZeroState(): void;
    updateSuggestionsList(suggestions: TItem[] | PromiseLike<TItem[]>): void;
    private _renderSuggestions;
    private _onSuggestionSelected;
    private _onSuggestionClick;
    private _onSuggestionRemove;
    private _onKeyDown;
    private _updateActiveDescendant;
    private _onResolveSuggestions;
    private _validateAndInsertCurrentQueryString;
    private _updateSuggestionsVisible;
    private _bindToInputElement;
    private _unbindFromInputElement;
}
