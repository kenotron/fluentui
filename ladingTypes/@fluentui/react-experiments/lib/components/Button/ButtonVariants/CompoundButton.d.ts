import * as React from 'react';
import { IComponent } from '@fluentui/foundation-legacy/lib/next/IComponent';
import { IButtonProps, IButtonSlots, IButtonStyles, IButtonTokens } from '../Button.types';
export interface ICompoundButtonProps extends IButtonProps {
    secondaryText?: string;
}
export interface ICompoundButtonViewProps extends ICompoundButtonProps {
}
export interface ICompountButtonTokens extends IButtonTokens {
    secondaryColor?: string;
    secondaryColorHovered?: string;
    secondaryColorPressed?: string;
}
export declare type ICompoundButtonComponent = IComponent<ICompoundButtonProps, ICompountButtonTokens, IButtonStyles, ICompoundButtonViewProps, IButtonSlots>;
export declare const CompoundButton: React.FunctionComponent<ICompoundButtonProps>;
