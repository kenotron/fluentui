import * as React from 'react';
import { MenuButtonState } from './MenuButton.types';
export declare type ExpandedState = {
    ref?: React.Ref<unknown>;
    expanded?: boolean;
    defaultExpanded?: boolean;
    onClick?: (ev: React.MouseEvent) => void;
    onMenuDismiss?: () => void;
    onKeyDown?: (ev: React.KeyboardEvent) => void;
    'aria-expanded'?: React.HTMLAttributes<HTMLElement>['aria-expanded'];
    'aria-haspopup'?: React.HTMLAttributes<HTMLElement>['aria-haspopup'];
    menu?: MenuButtonState['menu'];
};
/**
 * @param draftState - mutable state object to update to add expanded behavior.
 */
export declare const useExpanded: <TDraftState extends ExpandedState>(draftState: TDraftState) => void;
