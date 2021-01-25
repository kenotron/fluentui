/*!
 * Copyright (C) Microsoft Corporation. All rights reserved.
 */
import { IButtonStyles } from '@fluentui/react/lib/compat/Button';
import { ITheme } from '@fluentui/react';
import { ISidebarStyles } from './Sidebar.types';
export declare const sidebarFonts: {
    segoeUiSemibold: string;
    segoeUiSemilight: string;
};
export declare enum SidebarColors {
    Dark = 0,
    Light = 1
}
export declare const getSidebarStyles: (theme: ITheme, sidebarColors: SidebarColors, customStyles?: ISidebarStyles | undefined) => ISidebarStyles;
export declare const getButtonColoredStyles: (theme: ITheme, sidebarColors: SidebarColors, customStyles?: IButtonStyles | undefined) => IButtonStyles;
