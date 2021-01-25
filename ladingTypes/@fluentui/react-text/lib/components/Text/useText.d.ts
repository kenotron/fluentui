import * as React from 'react';
import { TextProps } from './Text.types';
/**
 * Given user props, returns state and render function for a Text.
 */
export declare const useText: (props: TextProps, ref: React.Ref<HTMLElement>, defaultProps?: TextProps | undefined) => {
    state: Record<string, any>;
    render: (state: TextProps) => JSX.Element;
};
