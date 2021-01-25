/**
 * NOTE! THIS FILE IS TEMPORARY AND SHOULD BE DELETED ONCE IT HAS MOVED TO `@fluentui/react-compose`.
 */
import * as React from 'react';
export declare type ComponentClasses<TClasses, TState> = Partial<TClasses> | ((state: TState) => Partial<TClasses>);
export interface ComponentProps {
    as?: React.ElementType;
    className?: string;
}
export declare type ShorthandValue<TProps> = string | boolean | number | null | undefined | TProps | JSX.Element;
export declare type ComposeRender<TProps, TOptions> = (props: TProps, ref?: React.RefObject<HTMLElement>, options?: TOptions) => JSX.Element;
export declare type ClassDictionary = any;
export declare type GenericDictionary = Record<string, any>;
export interface ComposeOptions<TProps, TSlots, TSlotProps, TStatics> {
    render: ComposeRender<TProps, ComposeOptions<TProps, TSlots, TSlotProps, TStatics>>;
    defaultProps: TProps;
    classes: ClassDictionary;
    stylesheet: string;
    slots: {
        [key in keyof TSlots]?: TSlots[key] | null;
    };
    slotProps: TSlotProps;
    statics: TStatics;
}
export declare type ComposedComponent<TProps = {}, TOptions = ComposeOptions<any, any, any, any>> = React.ForwardRefExoticComponent<TProps> & {
    options: TOptions;
    parent: ComposedComponent;
} & ComposeStandardStatics;
export interface ComposeStandardStatics {
    displayName?: string;
    mappedProp?: string;
    stylesheets?: string[];
}
