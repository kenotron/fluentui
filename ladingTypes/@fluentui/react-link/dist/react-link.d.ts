import { IRefObject } from '@fluentui/utilities';
import { IStyle } from '@fluentui/style-utilities';
import { IStyleFunctionOrObject } from '@fluentui/utilities';
import { ITheme } from '@fluentui/style-utilities';
import * as React from 'react';

/**
 * {@docCategory Link}
 */
export declare interface ILink {
    /** Sets focus to the link. */
    focus(): void;
}

/**
 * {@docCategory Link}
 */
export declare interface ILinkHTMLAttributes<T> extends React.HTMLAttributes<T> {
    type?: string;
    download?: any;
    href?: string;
    hrefLang?: string;
    media?: string;
    rel?: string;
    target?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    name?: string;
    value?: string | string[] | number;
    [index: string]: any;
}

/**
 * {@docCategory Link}
 */
export declare interface ILinkProps extends ILinkHTMLAttributes<HTMLAnchorElement | HTMLButtonElement | HTMLElement>, React.RefAttributes<HTMLElement> {
    /**
     * Optional callback to access the ILink interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<ILink>;
    /**
     * Whether the link is disabled
     */
    disabled?: boolean;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<ILinkStyleProps, ILinkStyles>;
    /**
     * Theme (provided through customization.)
     */
    theme?: ITheme;
    /**
     * A component type or primitive that is rendered as the type of the root element.
     */
    as?: React.ElementType;
}

/**
 * {@docCategory Link}
 */
export declare interface ILinkStyleProps {
    className?: string;
    isButton?: boolean;
    isDisabled?: boolean;
    theme: ITheme;
}

/**
 * {@docCategory Link}
 */
export declare interface ILinkStyles {
    root: IStyle;
}

export declare const Link: React.FunctionComponent<ILinkProps>;

export declare const LinkBase: React.FunctionComponent<ILinkProps>;

export { }
