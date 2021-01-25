import { IStyle } from '@fluentui/style-utilities';
export interface IUnifiedPickerStyleProps {
}
export interface IUnifiedPickerStyles {
    pickerText: IStyle;
    pickerInput: IStyle;
    pickerDiv: IStyle;
    selectionZone: IStyle;
}
export declare const getStyles: (props: IUnifiedPickerStyleProps) => IUnifiedPickerStyles;
