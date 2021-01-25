import * as React from 'react';
import { IRefObject } from '../../Utilities';
import { IComponent, IComponentStyles, IHTMLElementSlot, ISlotProp, ISlottableProps, IStyleableComponentProps } from '@fluentui/foundation-legacy';
import { ITextSlot } from '@fluentui/react';
import { IIconSlot } from '../../utilities/factoryComponents.types';
export declare type ICollapsibleSectionTitleComponent = IComponent<ICollapsibleSectionTitleProps, ICollapsibleSectionTitleTokens, ICollapsibleSectionTitleStyles>;
export declare type ICollapsibleSectionTitleTokenReturnType = ReturnType<Extract<ICollapsibleSectionTitleComponent['tokens'], Function>>;
export declare type ICollapsibleSectionTitleStylesReturnType = ReturnType<Extract<ICollapsibleSectionTitleComponent['styles'], Function>>;
export declare type ICollapsibleSectionTitleSlot = ISlotProp<ICollapsibleSectionTitleProps, string>;
export interface ICollapsibleSectionTitleSlots {
    root?: IHTMLElementSlot<'button'>;
    chevron?: IIconSlot;
    text?: ITextSlot;
}
export interface ICollapsibleSectionTitleProps extends ISlottableProps<ICollapsibleSectionTitleSlots>, IStyleableComponentProps<ICollapsibleSectionTitleProps, ICollapsibleSectionTitleTokens, ICollapsibleSectionTitleStyles>, React.ButtonHTMLAttributes<HTMLButtonElement> {
    focusElementRef?: IRefObject<HTMLButtonElement>;
    /**
     * Collapsed state of body associated with this component.
     */
    collapsed?: boolean;
    /**
     * Disable chevron appearance.
     */
    chevronDisabled?: boolean;
    /**
     * Indentation of title.
     */
    indent?: number;
}
export interface ICollapsibleSectionTitleTokens {
}
export declare type ICollapsibleSectionTitleStyles = IComponentStyles<ICollapsibleSectionTitleSlots>;
