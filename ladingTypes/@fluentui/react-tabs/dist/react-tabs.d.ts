import { IButtonProps } from '@fluentui/react-internal/lib/compat/Button';
import { IKeytipProps } from '@fluentui/react-internal';
import { IRefObject } from '@fluentui/utilities';
import { IRenderFunction } from '@fluentui/utilities';
import { IStyle } from '@fluentui/style-utilities';
import { IStyleFunctionOrObject } from '@fluentui/utilities';
import { ITheme } from '@fluentui/style-utilities';
import * as React from 'react';

/**
 * {@docCategory Pivot}
 */
export declare interface IPivot {
    /**
     * Sets focus to the first pivot tab.
     */
    focus(): void;
}

/**
 * {@docCategory Pivot}
 */
export declare interface IPivotItemProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Gets the component ref.
     */
    componentRef?: IRefObject<{}>;
    /**
     * The text displayed of each pivot link - renaming to `headerText`.
     * @deprecated Use `headerText` instead.
     */
    linkText?: string;
    /**
     * The text displayed of each pivot link.
     */
    headerText?: string;
    /**
     * Props for the header command button. This provides a way to pass in native props, such as data-* and aria-*,
     * for each pivot header/link element.
     */
    headerButtonProps?: IButtonProps | {
        [key: string]: string | number | boolean;
    };
    /**
     * An required key to uniquely identify a pivot item.
     *
     * Note: The 'key' from react props cannot be used inside component.
     */
    itemKey?: string;
    /**
     * The aria label of each pivot link which will read by screen reader instead of linkText.
     *
     * Note that unless you have compelling requirements you should not override aria-label.
     */
    ariaLabel?: string;
    /**
     * Defines an optional item count displayed in parentheses just after the `linkText`.
     *
     * Examples: completed (4), Unread (99+)
     */
    itemCount?: number | string;
    /**
     * An optional icon to show next to the pivot link.
     */
    itemIcon?: string;
    /**
     * Optional custom renderer for the pivot item link
     */
    onRenderItemLink?: IRenderFunction<IPivotItemProps>;
    /**
     * Optional keytip for this PivotItem
     */
    keytipProps?: IKeytipProps;
    /**
     * Defines whether to always render the pivot item (regardless of whether it is selected or not).
     * Useful if you're rendering content that is expensive to mount.
     *
     * @defaultvalue false
     */
    alwaysRender?: boolean;
}

/**
 * {@docCategory Pivot}
 */
export declare interface IPivotProps extends React.HTMLAttributes<HTMLDivElement>, React.RefAttributes<HTMLDivElement> {
    /**
     * Optional callback to access the IPivot interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: React.RefObject<IPivot>;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IPivotStyleProps, IPivotStyles>;
    /**
     * Theme provided by High-Order Component.
     */
    theme?: ITheme;
    /**
     * Additional css class to apply to the Pivot
     * @defaultvalue undefined
     */
    className?: string;
    /**
     * Default selected key for the pivot. Only provide this if the pivot is an uncontrolled component;
     * otherwise, use the `selectedKey` property.
     */
    defaultSelectedKey?: string;
    /**
     * Key of the selected pivot item. Updating this will override the Pivot's selected item state.
     * Only provide this if the pivot is a controlled component where you are maintaining the
     * current state; otherwise, use `defaultSelectedKey`.
     */
    selectedKey?: string | null;
    /**
     * Callback for when the selected pivot item is changed.
     */
    onLinkClick?: (item?: PivotItem, ev?: React.MouseEvent<HTMLElement>) => void;
    /**
     * Link size (normal, large)
     */
    linkSize?: PivotLinkSizeType;
    /**
     * Link format (links, tabs)
     */
    linkFormat?: PivotLinkFormatType;
    /**
     * Overflow behavior when there is not enough room to display all of the links/tabs
     * * none: Pivot links will overflow the container and may not be visible
     * * menu: Display an overflow menu that contains the tabs that don't fit
     *
     * @default none
     */
    overflowBehavior?: 'none' | 'menu';
    /**
     * Whether to skip rendering the tabpanel with the content of the selected tab.
     * Use this prop if you plan to separately render the tab content
     * and don't want to leave an empty tabpanel in the page that may confuse Screen Readers.
     */
    headersOnly?: boolean;
    /**
     * Callback to customize how IDs are generated for each tab header.
     * Useful if you're rendering content outside and need to connect aria-labelledby.
     */
    getTabId?: (itemKey: string, index: number) => string;
}

/**
 * {@docCategory Pivot}
 */
export declare type IPivotStyleProps = Required<Pick<IPivotProps, 'theme'>> & Pick<IPivotProps, 'className'> & {
    linkSize?: PivotLinkSizeType;
    linkFormat?: PivotLinkFormatType;
};

/**
 * {@docCategory Pivot}
 */
export declare interface IPivotStyles {
    /**
     * Style for the root element.
     */
    root: IStyle;
    link: IStyle;
    linkIsSelected: IStyle;
    linkContent: IStyle;
    text: IStyle;
    count: IStyle;
    icon: IStyle;
    linkInMenu: IStyle;
    overflowMenuButton: IStyle;
    itemContainer?: IStyle;
}

/**
 * The Pivot control and related tabs pattern are used for navigating frequently accessed,
 * distinct content categories. Pivots allow for navigation between two or more content
 * views and relies on text headers to articulate the different sections of content.
 */
export declare const Pivot: React.FunctionComponent<IPivotProps>;

export declare const PivotBase: React.FunctionComponent<IPivotProps>;

export declare class PivotItem extends React.Component<IPivotItemProps, {}> {
    constructor(props: IPivotItemProps);
    render(): JSX.Element;
}

/**
 * {@docCategory Pivot}
 * @deprecated Use strings 'links' or 'tabs' instead of this enum
 */
export declare const enum PivotLinkFormat {
    /**
     * Display Pivot Links as links
     */
    links = "links",
    /**
     * Display Pivot Links as Tabs
     */
    tabs = "tabs"
}

/**
 * {@docCategory Pivot}
 * Display mode for the pivot links/tabs
 */
export declare type PivotLinkFormatType = 'links' | 'tabs';

/**
 * {@docCategory Pivot}
 * @deprecated Use strings 'normal' or 'large' instead of this enum
 */
export declare const enum PivotLinkSize {
    /**
     * Display Link using normal font size
     */
    normal = "normal",
    /**
     * Display links using large font size
     */
    large = "large"
}

/**
 * {@docCategory Pivot}
 * Size of the pivot links/tabs
 */
export declare type PivotLinkSizeType = 'normal' | 'large';

export * from "@fluentui/react-theme-provider";

export { }
