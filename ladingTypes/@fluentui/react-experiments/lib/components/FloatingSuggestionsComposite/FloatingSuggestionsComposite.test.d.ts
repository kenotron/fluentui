import { IBaseFloatingSuggestionsProps } from './FloatingSuggestions.types';
export interface ISimple {
    key: string;
    name: string;
}
export declare type TypedFloatingSimpleSuggestionsProps = Omit<IBaseFloatingSuggestionsProps<ISimple>, 'onRenderSuggestion'>;
