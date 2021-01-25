import * as React from 'react';
import { IComponent, IComponentStyles, IHTMLElementSlot, IHTMLSlot, ISlottableProps, IStyleableComponentProps } from '@fluentui/foundation-legacy';
import { IKeytipProps } from '@fluentui/react/lib/Keytip';
import { IBaseProps, IComponentAs } from '../../Utilities';
import { IRawStyleBase } from '@fluentui/merge-styles/lib/IRawStyleBase';
import { ILabelSlot } from '../../utilities/factoryComponents.types';
export declare type IToggleComponent = IComponent<IToggleProps, IToggleTokens, IToggleStyles, IToggleViewProps>;
export declare type IToggleTokenReturnType = ReturnType<Extract<IToggleComponent['tokens'], Function>>;
export declare type IToggleStylesReturnType = ReturnType<Extract<IToggleComponent['styles'], Function>>;
export interface IToggleSlots {
    /**
     * Defines root slot.
     */
    root?: IHTMLSlot;
    /**
     * Defines label slot displayed above pill.
     */
    label?: ILabelSlot;
    /**
     * Defines container slot for the toggle pill and the text next to it.
     */
    container?: IHTMLSlot;
    /**
     * Defines pill slot, rendered as a button by default.
     */
    pill?: IHTMLElementSlot<'button'>;
    /**
     * Defines thumb slot inside of the pill.
     */
    thumb?: IHTMLSlot;
    /**
     * Defines text slot displayed alongside pill. Overrides onText and offText.
     */
    text?: ILabelSlot;
}
export interface IToggle {
    focus: () => void;
}
export interface IToggleProps extends ISlottableProps<IToggleSlots>, IStyleableComponentProps<IToggleViewProps, IToggleTokens, IToggleStyles>, IBaseProps<IToggle> {
    /**
     * Render the root element as another type.
     */
    as?: IComponentAs<React.HTMLAttributes<HTMLElement>>;
    /**
     * Text for screen-reader to announce as the name of the toggle.
     */
    ariaLabel?: string;
    /**
     * Initial state of the toggle. If you want the toggle to maintain its own state, use this.
     * Otherwise use `checked`.
     * @default false
     */
    defaultChecked?: boolean;
    /**
     * Checked state of the toggle. If you are maintaining state yourself, use this property.
     * Otherwise use `defaultChecked`.
     * @default defaultChecked
     */
    checked?: boolean;
    /**
     * Optional disabled flag.
     * @default false
     */
    disabled?: boolean;
    /**
     * Callback issued when the value changes.
     */
    onChange?: (event: React.MouseEvent<HTMLElement>, checked?: boolean) => void;
    /**
     * Optional keytip for this toggle
     */
    keytipProps?: IKeytipProps;
    /**
     * Text to display when toggle is ON.
     */
    onText?: string;
    /**
     * Text to display when toggle is OFF.
     */
    offText?: string;
}
export interface IToggleViewProps extends IToggleProps {
    /**
     * Toggle input callback triggered by mouse and keyboard input.
     */
    onClick?: (ev: React.MouseEvent<Element>) => void;
    /**
     * Reference to the toggle button.
     */
    toggleButtonRef?: React.RefObject<HTMLButtonElement>;
}
export interface IToggleTokens {
    pillBackground?: string;
    pillHoveredBackground?: string;
    pillBorderColor?: string;
    pillHoveredBorderColor?: string;
    pillJustifyContent?: IRawStyleBase['justifyContent'];
    pillHighContrastBackground?: string;
    pillHighContrastHoveredBackground?: string;
    pillHighContrastBorderColor?: string;
    pillHighContrastHoveredBorderColor?: string;
    thumbBackground?: string;
    thumbHighContrastBackground?: string;
    thumbHighContrastBorderColor?: string;
    textColor?: string;
    textHighContrastColor?: string;
}
export declare type IToggleStyles = IComponentStyles<IToggleSlots>;
