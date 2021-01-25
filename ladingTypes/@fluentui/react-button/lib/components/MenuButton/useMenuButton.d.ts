import * as React from 'react';
import { MenuButtonProps, MenuButtonState } from './MenuButton.types';
export declare const menuButtonShorthandProps: string[];
/**
 * Redefine the component factory, reusing button factory.
 */
export declare const useMenuButton: (props: MenuButtonProps, ref: React.Ref<HTMLElement>, defaultProps?: MenuButtonProps | undefined) => MenuButtonState;
