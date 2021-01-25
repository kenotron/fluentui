import { ITheme, IStyle } from '@fluentui/react/lib/Styling';
import { IStyleFunctionOrObject } from '@fluentui/react/lib/Utilities';
import { IPersonaStyleProps, IPersonaCoinStyleProps } from '@fluentui/react/lib/Persona';
import { IButtonStyles } from '@fluentui/react/lib/compat/Button';
export interface ISelectedPersonaStyleProps {
    theme: ITheme;
    isValid: boolean;
    isSelected: boolean;
    droppingClassName: string;
}
export interface ISelectedPersonaStyles {
    personaContainer: IStyle;
    expandButton: IStyle;
    personaWrapper: IStyle;
    removeButton: IStyle;
    itemContentWrapper: IStyle;
    subComponentStyles: ISelectedPersonaSubcomponentStyles;
}
export interface ISelectedPersonaSubcomponentStyles {
    personaStyles: IStyleFunctionOrObject<IPersonaStyleProps, any>;
    personaCoinStyles: IStyleFunctionOrObject<IPersonaCoinStyleProps, any>;
    actionButtonStyles: Partial<IButtonStyles>;
}
