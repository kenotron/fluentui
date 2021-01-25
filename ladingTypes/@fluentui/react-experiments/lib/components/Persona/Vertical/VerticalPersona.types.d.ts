import { IStyle, IFontWeight } from '@fluentui/style-utilities';
import { IComponent, IHTMLSlot, IStyleableComponentProps } from '@fluentui/foundation-legacy';
import { ITextSlot } from '@fluentui/react';
import { IPersonaCoinSlot } from '../../PersonaCoin/PersonaCoin.types';
export declare type IVerticalPersonaComponent = IComponent<IVerticalPersonaProps, IVerticalPersonaTokens, IVerticalPersonaStyles>;
export declare type IVerticalPersonaTokenReturnType = ReturnType<Extract<IVerticalPersonaComponent['tokens'], Function>>;
export declare type IVerticalPersonaStylesReturnType = ReturnType<Extract<IVerticalPersonaComponent['styles'], Function>>;
export interface IVerticalPersonaSlots {
    root?: IHTMLSlot;
    primaryText?: ITextSlot;
    secondaryText?: ITextSlot;
    coin?: IPersonaCoinSlot;
}
export interface IVerticalPersonaProps extends IVerticalPersonaSlots, IStyleableComponentProps<IVerticalPersonaProps, IVerticalPersonaTokens, IVerticalPersonaStyles> {
    vertical: true;
    text: string;
}
export interface IVerticalPersonaStyles {
    root?: IStyle;
    primaryText?: IStyle;
    secondaryText?: IStyle;
    coin?: IStyle;
}
export interface IVerticalPersonaTokens {
    verticalPersonaWidth?: number;
    fontFamily?: string;
    horizontalTextPadding?: number;
    primaryTextPaddingTop?: string;
    primaryTextFontSize?: string;
    primaryTextFontWeight?: IFontWeight;
    secondaryTextPaddingTop?: string;
    secondaryTextFontSize?: string;
    secondaryTextFontWeight?: IFontWeight;
}
