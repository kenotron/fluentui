import * as React from 'react';
import { ButtonProps, ButtonState } from './Button.types';
/**
 * Consts listing which props are shorthand props.
 */
export declare const buttonShorthandProps: string[];
/**
 * Given user props, returns state and render function for a Button.
 */
export declare const useButton: (props: ButtonProps, ref: React.Ref<HTMLElement>, defaultProps?: ButtonProps | undefined) => ButtonState;
