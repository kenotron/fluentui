import { ColorTokens } from '@fluentui/theme';
import { ComponentProps } from '@fluentui/react-compose/lib/next/index';
import { FontTokens } from '@fluentui/theme';
import { MinimalMenuProps } from '@fluentui/react-shared-contexts';
import * as React from 'react';
import { RecursivePartial } from '@fluentui/theme';
import { ShorthandProps } from '@fluentui/react-compose/lib/next/index';
import { SizeValue } from '@fluentui/theme';

/**
 * Define a styled Button, using the `useButton` hook.
 * {@docCategory Button}
 */
export declare const Button: React.ForwardRefExoticComponent<Pick<ButtonProps, string | number> & React.RefAttributes<HTMLElement>>;

/**
 * {@docCategory Button}
 */
export declare type ButtonProps = ComponentProps & React.HTMLAttributes<HTMLElement> & {
    /**
     * Shorthand icon. A shorthand prop can be a literal, object, or
     * JSX. The `children` prop of the object can be a render function,
     * taking in the original slot component and props.
     */
    icon?: ShorthandProps;
    /**
     * Shorthand loader content within the button.
     */
    loader?: ShorthandProps;
    /**
     * Shorthand children content within the button.
     */
    content?: ShorthandProps;
    /**
     * Defines the href to navigate to. If applied, will render the button as an anchor
     * element by default, unless `as` specifies otherwise. Note that specifying an href
     * and a non-anchor as the render type will prevent the Button from behaving like a
     * hyperlink and opening the href on click.
     */
    href?: string;
    /**
     * Defines the target window to open the href in. Only is applied if the button renders
     * as an anchor tag, which is the default behavior if href is provided.
     */
    target?: string;
    /** A button can appear circular. */
    circular?: boolean;
    /** A button can show that it cannot be interacted with. */
    disabled?: boolean;
    /** A button can fill the width of its container. */
    block?: boolean;
    /** A button can contain only an icon. */
    iconOnly?: boolean;
    /** An icon button can format its icon to appear before or after its content. */
    iconPosition?: 'before' | 'after';
    /** A button that inherits its background and has a subtle appearance. */
    inverted?: boolean;
    /** Opt in to a named variant which can be supplied by a theme. */
    variant?: string;
    /** A button can show a loading indicator. */
    loading?: boolean;
    /**
     * Called after a user clicks the button.
     * @param event - React's original SyntheticEvent.
     * @param data - All props.
     */
    /**
     * Called after a user focuses the button.
     * @param event - React's original SyntheticEvent.
     * @param data - All props.
     */
    /** A button can emphasize that it represents the primary action. */
    primary?: boolean;
    /** A button can emphasize that it represents an alternative action. */
    secondary?: boolean;
    /** A button can blend into its background to become less emphasized. */
    ghost?: boolean;
    /** A button can have no background styling and just be emphasized through its content styling. */
    transparent?: boolean;
    /** A button can be sized. */
    size?: SizeValue;
    /** A button can be formatted to show only text in order to indicate a less-pronounced action. */
    tokens?: RecursivePartial<ButtonTokens>;
};

/**
 * Consts listing which props are shorthand props.
 */
export declare const buttonShorthandProps: string[];

export declare const ButtonSizeVariants: {
    size_smallest: {
        height: string;
        minHeight: string;
    };
    size_smaller: {
        height: string;
        minHeight: string;
    };
    size_small: {
        height: string;
        minHeight: string;
    };
    size_large: {
        height: string;
        minHeight: string;
    };
    size_larger: {
        height: string;
        minHeight: string;
    };
    size_largest: {
        height: string;
        minHeight: string;
    };
};

/**
 * {@docCategory Button}
 */
export declare interface ButtonState extends ButtonProps {
    buttonRef?: React.RefObject<HTMLButtonElement>;
}

/**
 * {@docCategory Button}
 */
export declare type ButtonTokens = ColorTokens & FontTokens & {
    paddingLeft?: string;
    paddingRight?: string;
    paddingTop?: string;
    paddingBottom?: string;
    margin?: string;
    height?: string;
    minWidth?: string;
    maxWidth?: string;
    minHeight?: string;
    contentGap?: string;
    iconSize?: string;
    borderRadius?: string;
    borderTopLeftRadius?: string;
    borderTopRightRadius?: string;
    borderBottomLeftRadius?: string;
    borderBottomRightRadius?: string;
    borderWidth?: string;
    boxShadow?: string;
    width?: string;
    forcedColorAdjust?: string;
    transform?: string;
    transition?: string;
    size?: {
        smallest?: string;
        smaller?: string;
        small?: string;
        regular?: string;
        large?: string;
        larger?: string;
        largest?: string;
    };
    pressed?: {
        transform?: string;
        transition?: string;
    };
};

/**
 * {@docCategory Button}
 */
export declare type ButtonVariants<TTokens = ButtonTokens> = {
    root?: TTokens;
    block?: TTokens;
    circular?: TTokens;
    iconOnly?: TTokens;
    ghost?: TTokens;
    primary?: TTokens;
    transparent?: TTokens;
};

export declare interface CheckedState {
    checked?: boolean;
    defaultChecked?: boolean;
    onClick?: React.DOMAttributes<HTMLElement>['onClick'];
    role?: string;
    'aria-checked'?: React.AriaAttributes['aria-pressed'];
    'aria-pressed'?: React.AriaAttributes['aria-pressed'];
}

/**
 * Define a styled CompoundButton, using the `useCompoundButton` hook.
 * {@docCategory Button}
 */
export declare const CompoundButton: React.ForwardRefExoticComponent<Pick<CompoundButtonProps, string | number> & React.RefAttributes<HTMLElement>>;

/**
 * {@docCategory Button}
 */
export declare interface CompoundButtonProps extends ButtonProps {
    /**
     * Second line of text that describes the action this button takes.
     */
    secondaryContent?: ShorthandProps;
    /**
     * Container that wraps the children and secondaryContent slots.
     */
    contentContainer?: ShorthandProps;
}

/**
 * Consts listing which props are shorthand props.
 */
export declare const compoundButtonShorthandProps: string[];

/**
 * {@docCategory Button}
 */
export declare interface CompoundButtonState extends CompoundButtonProps {
}

/**
 * {@docCategory Button}
 */
export declare type CompoundButtonTokens = ButtonTokens & {
    secondaryContentColor?: string;
    secondaryContentFontSize?: string;
    secondaryContentFontWeight?: string;
    secondaryContentGap?: string;
};

/**
 * {@docCategory Button}
 */
export declare type CompoundButtonVariants = ButtonVariants<CompoundButtonTokens>;

export declare type ExpandedState = {
    ref?: React.Ref<unknown>;
    expanded?: boolean;
    defaultExpanded?: boolean;
    onClick?: (ev: React.MouseEvent) => void;
    onMenuDismiss?: () => void;
    onKeyDown?: (ev: React.KeyboardEvent) => void;
    'aria-expanded'?: React.HTMLAttributes<HTMLElement>['aria-expanded'];
    'aria-haspopup'?: React.HTMLAttributes<HTMLElement>['aria-haspopup'];
    menu?: MenuButtonState['menu'];
};

/**
 * Define a styled MenuButton, using the `useMenuButton` hook.
 * {@docCategory Button}
 */
export declare const MenuButton: React.ForwardRefExoticComponent<Pick<MenuButtonProps, string | number> & React.RefAttributes<HTMLElement>>;

/**
 * {@docCategory Button}
 */
export declare type MenuButtonProps = Omit<ButtonProps, 'iconPosition' | 'loader'> & {
    /**
     * Menu that is displayed when the button is pressed.
     */
    menu?: ShorthandProps;
    /**
     * Menu icon that indicates that this button has a menu that can be expanded.
     */
    menuIcon?: ShorthandProps;
    /**
     * Defines the inital expanded state of the MenuButton. Use this if you want the MenuButton to maintain its own state.
     * Mutually exclusive with `expanded`.
     * @defaultvalue false
     */
    defaultExpanded?: boolean;
    /**
     * Defines whether the MenuButton is in an expanded state. Use this if you wish to have the expanded state of the
     * MenuButton be controlled. Mutually exclusive with `defaultExpanded`.
     * @defaultvalue defaultExpanded
     */
    expanded?: boolean;
    /**
     * Defines a callback that runs after the MenuButton's contextual menu has been dismissed.
     */
    onMenuDismiss?: () => void;
};

export declare const menuButtonShorthandProps: string[];

export declare interface MenuButtonState extends Omit<MenuButtonProps, 'menu'>, Omit<ButtonState, 'iconPosition' | 'loader'> {
    menu?: React.PropsWithChildren<MinimalMenuProps>;
}

/**
 * {@docCategory Button}
 */
export declare type MenuButtonTokens = ButtonTokens & {
    menuIconColor?: string;
    menuIconSize?: string;
};

/**
 * {@docCategory Button}
 */
export declare type MenuButtonVariants = ButtonVariants<MenuButtonTokens>;

/**
 * Define the render function. Given the state of a button, renders it.
 */
declare const renderButton: (state: ButtonState) => JSX.Element;
export { renderButton }
export { renderButton as renderToggleButton }

/**
 * Define the render function. Given the state of a button, renders it.
 */
export declare const renderCompoundButton: (state: CompoundButtonState) => JSX.Element;

/**
 * Redefine the render function to add slots. Reuse the button structure but add
 * slots to children.
 */
export declare const renderMenuButton: (state: MenuButtonState) => JSX.Element;

/**
 * Redefine the render function to add slots. Reuse the button structure but add
 * slots to children.
 */
export declare const renderSplitButton: (state: SplitButtonState) => JSX.Element;

/**
 * Define a styled SplitButton, using the `useSplitButton` hook.
 * {@docCategory Button}
 */
export declare const SplitButton: React.ForwardRefExoticComponent<Pick<SplitButtonProps, string | number> & React.RefAttributes<HTMLElement>>;

/**
 * {@docCategory Button}
 */
export declare interface SplitButtonProps extends ButtonProps, MenuButtonProps {
    /**
     * Button to perform primary action in SplitButton.
     */
    button?: ShorthandProps;
    /**
     * Divider that separates the primary action button and the menu button parts of the SplitButton
     */
    divider?: ShorthandProps;
    /**
     * Button that opens menu with secondary actions in SplitButton.
     */
    menuButton?: ShorthandProps;
}

export declare const splitButtonShorthandProps: string[];

export declare interface SplitButtonState extends Omit<SplitButtonProps, 'menu'>, MenuButtonState {
    menuButtonRef?: React.RefObject<HTMLButtonElement>;
}

/**
 * {@docCategory Button}
 */
export declare type SplitButtonTokens = MenuButtonTokens & {
    dividerColor?: string;
    dividerThickness?: string;
};

/**
 * {@docCategory Button}
 */
export declare type SplitButtonVariants = ButtonVariants<SplitButtonTokens>;

/**
 * Define a styled ToggleButton, using the `useToggleButton` hook.
 * {@docCategory Button}
 */
export declare const ToggleButton: React.ForwardRefExoticComponent<Pick<ToggleButtonProps, string | number> & React.RefAttributes<HTMLElement>>;

/**
 * {@docCategory Button}
 */
export declare interface ToggleButtonProps extends ButtonProps {
    /**
     * Defines the controlled checked state of the `ToggleButton`.
     * Mutually exclusive to `defaultChecked`.
     * This should only be used if the checked state is to be controlled at a higher level and there is a plan to pass the
     * correct value based on handling `onClick` events and re-rendering.
     */
    checked?: boolean;
    /**
     * Defines whether the `ToggleButton` is inititally in a checked state or not when rendered.
     * Mutually exclusive to `checked`.
     */
    defaultChecked?: boolean;
}

/**
 * {@docCategory Button}
 */
export declare interface ToggleButtonState extends ToggleButtonProps {
}

export declare type ToggleButtonTokens = ButtonTokens;

export declare type ToggleButtonVariants = ButtonVariants<ToggleButtonTokens>;

/**
 * Given user props, returns state and render function for a Button.
 */
export declare const useButton: (props: ButtonProps, ref: React.Ref<HTMLElement>, defaultProps?: ButtonProps | undefined) => ButtonState;

export declare const useButtonClasses: (state: ButtonState, options?: import("@fluentui/react-theme-provider").UseStylesOptions | undefined) => void;

/**
 * The useButton hook processes the Button draft state.
 * @param draftState - Button draft state to mutate.
 */
export declare const useButtonState: (draftState: ButtonState) => void;

/**
 * The useToggle hook processes adds the correct toggled state and acccessibility as needed.
 * @param draftState - state to read and augment.
 */
export declare const useChecked: <TDraftState extends CheckedState>(draftState: TDraftState) => void;

/**
 * Given user props, returns state and render function for a Button.
 */
export declare const useCompoundButton: (props: CompoundButtonProps, ref: React.Ref<HTMLElement>, defaultProps?: CompoundButtonProps | undefined) => CompoundButtonState;

export declare const useCompoundButtonClasses: (state: CompoundButtonState) => void;

/**
 * @param draftState - mutable state object to update to add expanded behavior.
 */
export declare const useExpanded: <TDraftState extends ExpandedState>(draftState: TDraftState) => void;

/**
 * Redefine the component factory, reusing button factory.
 */
export declare const useMenuButton: (props: MenuButtonProps, ref: React.Ref<HTMLElement>, defaultProps?: MenuButtonProps | undefined) => MenuButtonState;

export declare const useMenuButtonClasses: (state: MenuButtonState) => void;

export declare const useMenuButtonState: (state: MenuButtonState) => void;

/**
 * Redefine the component factory, reusing button factory.
 */
export declare const useSplitButton: (props: SplitButtonProps, ref: React.Ref<HTMLElement>, defaultProps?: SplitButtonProps | undefined) => SplitButtonState;

export declare const useSplitButtonClasses: (state: SplitButtonState, options?: import("@fluentui/react-theme-provider").UseStylesOptions | undefined) => void;

export declare const useToggleButton: (props: ToggleButtonProps, ref: React.Ref<HTMLElement>, defaultProps?: ToggleButtonProps | undefined) => ToggleButtonState;

export declare const useToggleButtonClasses: (state: ToggleButtonState) => void;

export { }
