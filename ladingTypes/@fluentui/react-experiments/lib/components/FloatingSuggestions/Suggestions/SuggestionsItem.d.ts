import * as React from 'react';
import { ISuggestionItemProps } from './SuggestionsItem.types';
export declare const SuggestionsItemInner: <TSuggestion>(props: ISuggestionItemProps<TSuggestion>) => React.ReactElement;
export declare const SuggestionsItem: React.FunctionComponent<ISuggestionItemProps<any>>;
export declare type SuggestionsItem<T> = React.ComponentType<ISuggestionItemProps<T>>;
