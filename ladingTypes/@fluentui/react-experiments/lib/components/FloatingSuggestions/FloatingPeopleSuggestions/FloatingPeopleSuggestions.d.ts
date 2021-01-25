import { IPersonaProps } from '@fluentui/react/lib/Persona';
import { IFloatingSuggestionsProps } from '../FloatingSuggestions.types';
import { FloatingSuggestions } from '../FloatingSuggestions';
declare type PartiallyOptional<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>> & Pick<Partial<T>, keyof T>;
export declare type IFloatingPeopleSuggestionsProps<TPersona> = PartiallyOptional<IFloatingSuggestionsProps<TPersona>, 'onRenderSuggestionsItem'>;
export declare const FloatingPeopleSuggestions: <TPersona extends IPersonaProps = IPersonaProps>(props: PartiallyOptional<IFloatingSuggestionsProps<TPersona>, "onRenderSuggestionsItem">) => JSX.Element;
export declare type SelectedPeopleList<TPersona extends IPersonaProps = IPersonaProps> = FloatingSuggestions<TPersona>;
export {};
