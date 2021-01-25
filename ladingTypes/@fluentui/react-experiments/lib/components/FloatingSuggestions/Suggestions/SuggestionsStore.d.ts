import { ISuggestionModel } from '@fluentui/react/lib/Pickers';
export declare class SuggestionsStore<T> {
    suggestions: ISuggestionModel<T>[];
    constructor();
    updateSuggestions(newSuggestions: T[]): void;
    getSuggestions(): ISuggestionModel<T>[];
    getSuggestionAtIndex(index: number): ISuggestionModel<T>;
    removeSuggestion(index: number): void;
    convertSuggestionsToSuggestionItems(suggestions: Array<ISuggestionModel<T> | T>): ISuggestionModel<T>[];
    private _isSuggestionModel;
    private _ensureSuggestionModel;
}
