import { BaseSlots } from '@fluentui/react-compose';
import { ComponentProps } from '@fluentui/react-compose';
import * as React from 'react';
import { RecursivePartial } from '@fluentui/theme';
import { SlotProps } from '@fluentui/react-compose';

/**
 * Define the render function. Given the state of a text, renders it.
 */
export declare const renderText: (state: TextProps) => JSX.Element;

export declare const Text: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLElement>>;

export declare interface TextProps extends ComponentProps, React.HTMLAttributes<HTMLSpanElement> {
    /** A text can define its look via defined variants. */
    variant?: 'caption' | 'body' | 'subHeadline' | 'headline' | 'title1' | 'title2' | 'title3' | 'largeTitle' | 'display';
    tokens?: RecursivePartial<TextTokenSet>;
}

export declare type TextSlotProps = SlotProps<TextSlots, TextProps, React.HTMLAttributes<HTMLSpanElement>>;

export declare interface TextSlots extends BaseSlots {
}

export declare type TextTokenSet = {};

/**
 * Given user props, returns state and render function for a Text.
 */
export declare const useText: (props: TextProps, ref: React.Ref<HTMLElement>, defaultProps?: TextProps | undefined) => {
    state: Record<string, any>;
    render: (state: TextProps) => JSX.Element;
};

export declare const useTextClasses: (state: {}, options?: import("@fluentui/react-theme-provider").UseStylesOptions | undefined) => void;

export { }
