import * as React from 'react';
import { SplitButtonProps, SplitButtonState } from './SplitButton.types';
export declare const splitButtonShorthandProps: string[];
/**
 * Redefine the component factory, reusing button factory.
 */
export declare const useSplitButton: (props: SplitButtonProps, ref: React.Ref<HTMLElement>, defaultProps?: SplitButtonProps | undefined) => SplitButtonState;
