import * as React from 'react';
import { CompoundButtonProps, CompoundButtonState } from './CompoundButton.types';
/**
 * Consts listing which props are shorthand props.
 */
export declare const compoundButtonShorthandProps: string[];
/**
 * Given user props, returns state and render function for a Button.
 */
export declare const useCompoundButton: (props: CompoundButtonProps, ref: React.Ref<HTMLElement>, defaultProps?: CompoundButtonProps | undefined) => CompoundButtonState;
