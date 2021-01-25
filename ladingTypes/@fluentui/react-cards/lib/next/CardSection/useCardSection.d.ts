import * as React from 'react';
import { CardSectionProps, CardSectionState } from './CardSection.types';
/**
 * Given user props, returns state and render function for a CardSection.
 */
export declare const useCardSection: (props: CardSectionProps, ref: React.Ref<HTMLElement>, defaultProps?: CardSectionProps | undefined) => {
    state: CardSectionState;
    render: (state: CardSectionState) => JSX.Element;
};
