import { IBaseProps } from '@fluentui/react/lib/Utilities';
import { IComponent } from '@fluentui/foundation-legacy';
import { IComponentStyles } from '@fluentui/foundation-legacy';
import { ISlotProp } from '@fluentui/foundation-legacy';
import { IStackItemProps } from '@fluentui/react/lib/Stack';
import { IStackItemSlots } from '@fluentui/react/lib/Stack';
import { IStackItemTokens } from '@fluentui/react/lib/Stack';
import { IStackProps } from '@fluentui/react/lib/Stack';
import { IStackSlot } from '@fluentui/react/lib/Stack';
import { IStackSlots } from '@fluentui/react/lib/Stack';
import { IStackTokens } from '@fluentui/react/lib/Stack';
import { IStyleableComponentProps } from '@fluentui/foundation-legacy';
import * as React from 'react';

export declare const Card: React.FunctionComponent<ICardProps> & {
    Item: React.FunctionComponent<ICardItemProps>;
    Section: React.FunctionComponent<ICardSectionProps>;
};

export declare const CardItem: React.FunctionComponent<ICardItemProps>;

export declare const CardSection: React.FunctionComponent<ICardSectionProps>;

/**
 * {@docCategory Card}
 */
export declare interface ICard {
}

/**
 * {@docCategory Card}
 */
export declare type ICardComponent = IComponent<ICardProps, ICardTokens, ICardStyles>;

/**
 * {@docCategory Card}
 */
export declare interface ICardItem {
}

/**
 * {@docCategory Card}
 */
export declare type ICardItemComponent = IComponent<ICardItemProps, ICardItemTokens, ICardItemStyles, ICardItemViewProps>;

/**
 * {@docCategory Card}
 */
export declare interface ICardItemProps extends ICardItemSlots, Pick<IStackItemProps, 'grow' | 'shrink' | 'disableShrink' | 'align' | 'verticalFill' | 'order'>, IStyleableComponentProps<ICardItemProps, ICardItemTokens, ICardItemStyles>, IBaseProps<ICardItem> {
    /**
     * Determines if the CardItem should disregard the children margin specified by Card.
     */
    fill?: boolean;
}

/**
 * {@docCategory Card}
 */
export declare type ICardItemSlot = ISlotProp<ICardItemProps>;

/**
 * {@docCategory Card}
 */
export declare interface ICardItemSlots extends IStackItemSlots {
}

/**
 * {@docCategory Card}
 */
export declare type ICardItemStyles = IComponentStyles<ICardItemSlots>;

/**
 * {@docCategory Card}
 */
export declare type ICardItemStylesReturnType = ReturnType<Extract<ICardItemComponent['styles'], Function>>;

/**
 * {@docCategory Card}
 */
export declare type ICardItemTokenReturnType = ReturnType<Extract<ICardItemComponent['tokens'], Function>>;

/**
 * {@docCategory Card}
 */
export declare interface ICardItemTokens extends IStackItemTokens {
}

/**
 * {@docCategory Card}
 */
export declare interface ICardItemViewProps extends ICardItemProps {
}

/**
 * {@docCategory Card}
 */
export declare interface ICardProps extends ICardSlots, IStyleableComponentProps<ICardProps, ICardTokens, ICardStyles>, IBaseProps<ICard>, React.AllHTMLAttributes<HTMLElement> {
    /**
     * Defines whether to render a vertical or a horizontal Card.
     * @defaultvalue false
     */
    horizontal?: boolean;
    /**
     * Defines a callback that is called when the Card is clicked.
     */
    onClick?: (ev?: React.MouseEvent<HTMLElement>) => void;
    /**
     * Defines a callback that is called when the Card is a key is pressed down while focus is on the Card.
     */
    onKeyDown?: (ev?: React.KeyboardEvent<HTMLElement>) => void;
}

/**
 * {@docCategory Card}
 */
export declare interface ICardSection {
}

/**
 * {@docCategory Card}
 */
export declare type ICardSectionComponent = IComponent<ICardSectionProps, ICardSectionTokens, ICardSectionStyles, ICardSectionViewProps>;

/**
 * {@docCategory Card}
 */
export declare interface ICardSectionProps extends ICardSectionSlots, Pick<IStackProps, 'as' | 'horizontal' | 'reversed' | 'horizontalAlign' | 'verticalAlign' | 'verticalFill' | 'disableShrink' | 'grow' | 'wrap'>, IStyleableComponentProps<ICardSectionProps, ICardSectionTokens, ICardSectionStyles>, IBaseProps<ICardSection> {
    /**
     * Determines if the CardSection should disregard the children margin specified by Card.
     */
    fill?: boolean;
}

/**
 * {@docCategory Card}
 */
export declare type ICardSectionSlot = ISlotProp<ICardSectionProps>;

/**
 * {@docCategory Card}
 */
export declare interface ICardSectionSlots extends Pick<IStackSlots, 'root'> {
}

/**
 * {@docCategory Card}
 */
export declare type ICardSectionStyles = IComponentStyles<ICardSectionSlots>;

/**
 * {@docCategory Card}
 */
export declare type ICardSectionStylesReturnType = ReturnType<Extract<ICardSectionComponent['styles'], Function>>;

/**
 * {@docCategory Card}
 */
export declare type ICardSectionTokenReturnType = ReturnType<Extract<ICardSectionComponent['tokens'], Function>>;

/**
 * {@docCategory Card}
 */
export declare interface ICardSectionTokens extends IStackTokens {
    /**
     * Defines the margin to be applied to the CardSection relative to its container.
     */
    margin?: number | string;
}

/**
 * {@docCategory Card}
 */
export declare interface ICardSectionViewProps extends ICardSectionProps {
}

/**
 * {@docCategory Card}
 */
export declare interface ICardSlots {
    /**
     * Defines the root slot of the component for managing the layout of the Card.
     */
    root?: IStackSlot;
}

/**
 * {@docCategory Card}
 */
export declare type ICardStyles = IComponentStyles<ICardSlots>;

/**
 * {@docCategory Card}
 */
export declare type ICardStylesReturnType = ReturnType<Extract<ICardComponent['styles'], Function>>;

/**
 * {@docCategory Card}
 */
export declare type ICardTokenReturnType = ReturnType<Extract<ICardComponent['tokens'], Function>>;

/**
 * {@docCategory Card}
 */
export declare interface ICardTokens extends IStackTokens {
    /**
     * Defines the border of the Card when it is in a focused state.
     */
    borderFocused?: string;
    /**
     * Defines the box shadow of the Card.
     */
    boxShadow?: string;
    /**
     * Defines the box shadow of the Card when it is in a focused state.
     */
    boxShadowFocused?: string;
    /**
     * Defines the box shadow of the Card when it is in a hovered state.
     */
    boxShadowHovered?: string;
    /**
     * Defines the margin that is applied to the Card's children.
     */
    childrenMargin?: number;
    /**
     * Defines the mouse cursor to be displayed when pointing over the Card.
     */
    cursor?: string;
    /**
     * Defines a fixed height for the Card.
     */
    height?: number | string;
    /**
     * Defines the box shadow of the Card when in high contrast mode.
     */
    highContrastBoxShadow?: string;
    /**
     * Defines the box shadow of the Card when it is in a focused state and in high contrast mode.
     */
    highContrastBoxShadowFocused?: string;
    /**
     * Defines the box shadow of the Card when it is in a hovered state and in high contrast mode.
     */
    highContrastBoxShadowHovered?: string;
    /**
     * Defines a minimum height the Card has regardless of the contents within it.
     */
    minHeight?: number | string;
    /**
     * Defines the minimum width of the Card.
     */
    minWidth?: number | string;
    /**
     * Defines the maximum width of the Card.
     */
    maxWidth?: number | string;
    /**
     * Defines a fixed width for the Card.
     */
    width?: number | string;
}

export { }
