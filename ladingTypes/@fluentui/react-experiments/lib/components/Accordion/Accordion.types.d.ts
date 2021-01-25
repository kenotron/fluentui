import { IStyle } from '../../Styling';
import { IComponent, IHTMLSlot, IStyleableComponentProps } from '@fluentui/foundation-legacy';
export declare type IAccordionComponent = IComponent<IAccordionProps, IAccordionTokens, IAccordionStyles>;
export declare type IAccordionTokenReturnType = ReturnType<Extract<IAccordionComponent['tokens'], Function>>;
export declare type IAccordionStylesReturnType = ReturnType<Extract<IAccordionComponent['styles'], Function>>;
export interface IAccordionSlots {
    root?: IHTMLSlot;
}
export interface IAccordionProps extends IAccordionSlots, IStyleableComponentProps<IAccordionProps, IAccordionTokens, IAccordionStyles> {
    collapseItems?: boolean;
}
export interface IAccordionTokens {
}
export interface IAccordionStyles {
    root: IStyle;
}
