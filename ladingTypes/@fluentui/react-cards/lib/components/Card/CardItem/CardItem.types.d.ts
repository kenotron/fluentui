import { IComponent, IComponentStyles, ISlotProp, IStyleableComponentProps } from '@fluentui/foundation-legacy';
import { IStackItemProps, IStackItemSlots, IStackItemTokens } from '@fluentui/react/lib/Stack';
import { IBaseProps } from '@fluentui/react/lib/Utilities';
/**
 * {@docCategory Card}
 */
export declare type ICardItemComponent = IComponent<ICardItemProps, ICardItemTokens, ICardItemStyles, ICardItemViewProps>;
/**
 * {@docCategory Card}
 */
export declare type ICardItemTokenReturnType = ReturnType<Extract<ICardItemComponent['tokens'], Function>>;
/**
 * {@docCategory Card}
 */
export declare type ICardItemStylesReturnType = ReturnType<Extract<ICardItemComponent['styles'], Function>>;
/**
 * {@docCategory Card}
 */
export declare type ICardItemSlot = ISlotProp<ICardItemProps>;
/**
 * {@docCategory Card}
 */
export interface ICardItemSlots extends IStackItemSlots {
}
/**
 * {@docCategory Card}
 */
export interface ICardItem {
}
/**
 * {@docCategory Card}
 */
export interface ICardItemProps extends ICardItemSlots, Pick<IStackItemProps, 'grow' | 'shrink' | 'disableShrink' | 'align' | 'verticalFill' | 'order'>, IStyleableComponentProps<ICardItemProps, ICardItemTokens, ICardItemStyles>, IBaseProps<ICardItem> {
    /**
     * Determines if the CardItem should disregard the children margin specified by Card.
     */
    fill?: boolean;
}
/**
 * {@docCategory Card}
 */
export interface ICardItemViewProps extends ICardItemProps {
}
/**
 * {@docCategory Card}
 */
export interface ICardItemTokens extends IStackItemTokens {
}
/**
 * {@docCategory Card}
 */
export declare type ICardItemStyles = IComponentStyles<ICardItemSlots>;
