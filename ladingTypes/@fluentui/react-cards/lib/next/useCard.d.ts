import * as React from 'react';
import { CardProps, CardState } from './Card.types';
/**
 * Given user props, returns state and render function for a Card.
 */
export declare const useCard: (props: CardProps, ref: React.Ref<HTMLElement>, defaultProps?: CardProps | undefined) => {
    state: CardState;
    render: (state: CardState) => JSX.Element;
};
