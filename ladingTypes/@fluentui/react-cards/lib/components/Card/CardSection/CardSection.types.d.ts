import { IComponent, IComponentStyles, ISlotProp, IStyleableComponentProps } from '@fluentui/foundation-legacy';
import { IStackProps, IStackSlots, IStackTokens } from '@fluentui/react/lib/Stack';
import { IBaseProps } from '@fluentui/react/lib/Utilities';
/**
 * {@docCategory Card}
 */
export declare type ICardSectionComponent = IComponent<ICardSectionProps, ICardSectionTokens, ICardSectionStyles, ICardSectionViewProps>;
/**
 * {@docCategory Card}
 */
export declare type ICardSectionTokenReturnType = ReturnType<Extract<ICardSectionComponent['tokens'], Function>>;
/**
 * {@docCategory Card}
 */
export declare type ICardSectionStylesReturnType = ReturnType<Extract<ICardSectionComponent['styles'], Function>>;
/**
 * {@docCategory Card}
 */
export declare type ICardSectionSlot = ISlotProp<ICardSectionProps>;
/**
 * {@docCategory Card}
 */
export interface ICardSectionSlots extends Pick<IStackSlots, 'root'> {
}
/**
 * {@docCategory Card}
 */
export interface ICardSection {
}
/**
 * {@docCategory Card}
 */
export interface ICardSectionProps extends ICardSectionSlots, Pick<IStackProps, 'as' | 'horizontal' | 'reversed' | 'horizontalAlign' | 'verticalAlign' | 'verticalFill' | 'disableShrink' | 'grow' | 'wrap'>, IStyleableComponentProps<ICardSectionProps, ICardSectionTokens, ICardSectionStyles>, IBaseProps<ICardSection> {
    /**
     * Determines if the CardSection should disregard the children margin specified by Card.
     */
    fill?: boolean;
}
/**
 * {@docCategory Card}
 */
export interface ICardSectionViewProps extends ICardSectionProps {
}
/**
 * {@docCategory Card}
 */
export interface ICardSectionTokens extends IStackTokens {
    /**
     * Defines the margin to be applied to the CardSection relative to its container.
     */
    margin?: number | string;
}
/**
 * {@docCategory Card}
 */
export declare type ICardSectionStyles = IComponentStyles<ICardSectionSlots>;
