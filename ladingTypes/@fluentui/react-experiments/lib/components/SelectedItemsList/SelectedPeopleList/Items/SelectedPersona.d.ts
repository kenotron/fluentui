import * as React from 'react';
import { IStyleFunctionOrObject } from '@fluentui/react/lib/Utilities';
import { IPersonaProps } from '@fluentui/react/lib/Persona';
import { ISelectedItemProps } from '../../SelectedItemsList.types';
import { ISelectedPersonaStyles, ISelectedPersonaStyleProps } from './SelectedPersona.types';
import { ITheme } from '@fluentui/react/lib/Styling';
declare type ISelectedPersonaProps<TPersona> = ISelectedItemProps<TPersona> & {
    isValid?: (item: TPersona) => boolean;
    canExpand?: (item: TPersona) => boolean;
    getExpandedItems?: (item: TPersona) => Promise<TPersona[]>;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<ISelectedPersonaStyleProps, ISelectedPersonaStyles>;
    /**
     * Theme for the component.
     */
    theme?: ITheme;
};
export declare const SelectedPersona: React.MemoExoticComponent<(<TPersona extends IPersonaProps = IPersonaProps>(props: ISelectedPersonaProps<TPersona>) => JSX.Element)>;
export {};
