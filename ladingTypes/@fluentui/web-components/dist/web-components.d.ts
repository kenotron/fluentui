import { Accordion } from '@microsoft/fast-foundation';
import { AccordionItem } from '@microsoft/fast-foundation';
import { Anchor } from '@microsoft/fast-foundation';
import { Badge } from '@microsoft/fast-foundation';
import { BaseProgress } from '@microsoft/fast-foundation';
import { Breadcrumb } from '@microsoft/fast-foundation';
import { BreadcrumbItem } from '@microsoft/fast-foundation';
import { Button } from '@microsoft/fast-foundation';
import { Checkbox } from '@microsoft/fast-foundation';
import { ColorRGBA64 } from '@microsoft/fast-colors';
import { CSSCustomPropertyBehavior } from '@microsoft/fast-foundation';
import { DensityOffset } from '@microsoft/fast-components-styles-msft';
import { DesignSystem } from '@microsoft/fast-components-styles-msft';
import { DesignSystemProvider } from '@microsoft/fast-foundation';
import { Dialog } from '@microsoft/fast-foundation';
import { Direction } from '@microsoft/fast-web-utilities';
import { Divider } from '@microsoft/fast-foundation';
import { ElementStyles } from '@microsoft/fast-element';
import { Flipper } from '@microsoft/fast-foundation';
import { Listbox } from '@microsoft/fast-foundation';
import { ListboxOption } from '@microsoft/fast-foundation';
import { Menu } from '@microsoft/fast-foundation';
import { MenuItem } from '@microsoft/fast-foundation';
import { Radio } from '@microsoft/fast-foundation';
import { RadioGroup } from '@microsoft/fast-foundation';
import { Select } from '@microsoft/fast-foundation';
import { Skeleton } from '@microsoft/fast-foundation';
import { Slider } from '@microsoft/fast-foundation';
import { SliderLabel } from '@microsoft/fast-foundation';
import { Switch } from '@microsoft/fast-foundation';
import { Tab } from '@microsoft/fast-foundation';
import { TabPanel } from '@microsoft/fast-foundation';
import { Tabs } from '@microsoft/fast-foundation';
import { TextArea } from '@microsoft/fast-foundation';
import { TextField } from '@microsoft/fast-foundation';
import { TreeItem } from '@microsoft/fast-foundation';
import { TreeView } from '@microsoft/fast-foundation';

/**
 * @internal
 */
export declare const AccentButtonStyles: ElementStyles;

/**
 * Behavior to resolve and make available the accent-fill-active CSS custom property.
 * @public
 */
export declare const accentFillActiveBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the accent-fill-focus CSS custom property.
 * @public
 */
export declare const accentFillFocusBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the accent-fill-hover CSS custom property.
 * @public
 */
export declare const accentFillHoverBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the accent-fill-large-active CSS custom property.
 * @public
 */
export declare const accentFillLargeActiveBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the accent-fill-large-focus CSS custom property.
 * @public
 */
export declare const accentFillLargeFocusBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the accent-fill-large-hover CSS custom property.
 * @public
 */
export declare const accentFillLargeHoverBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the accent-fill-large-rest CSS custom property.
 * @public
 */
export declare const accentFillLargeRestBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the accent-fill-large-selected CSS custom property.
 * @public
 */
export declare const accentFillLargeSelectedBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the accent-fill-rest CSS custom property.
 * @public
 */
export declare const accentFillRestBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the accent-fill-selected CSS custom property.
 * @public
 */
export declare const accentFillSelectedBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the accent-foreground-active CSS custom property.
 * @public
 */
export declare const accentForegroundActiveBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the accent-foreground-cut-rest CSS custom property.
 * @public
 */
export declare const accentForegroundCutRestBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the accent-foreground-focus CSS custom property.
 * @public
 */
export declare const accentForegroundFocusBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the accent-foreground-hover CSS custom property.
 * @public
 */
export declare const accentForegroundHoverBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the accent-foreground-large-active CSS custom property.
 * @public
 */
export declare const accentForegroundLargeActiveBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the accent-foreground-large-focus CSS custom property.
 * @public
 */
export declare const accentForegroundLargeFocusBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the accent-foreground-large-hover CSS custom property.
 * @public
 */
export declare const accentForegroundLargeHoverBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the accent-foreground-large-rest CSS custom property.
 * @public
 */
export declare const accentForegroundLargeRestBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the accent-foreground-rest CSS custom property.
 * @public
 */
export declare const accentForegroundRestBehavior: CSSCustomPropertyBehavior;

/**
 * Styles for AccordionItem
 * @public
 */
export declare const AccordionItemStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Styles for Accordion
 * @public
 */
export declare const AccordionStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Define shadow algorithms.
 *
 * TODO: The --background-luminance will need to be derived from JavaScript. For now
 * this is hard-coded to a 1, the relative luminance of pure white.
 * https://github.com/microsoft/fast/issues/2778
 *
 * @internal
 */
export declare const ambientShadow = "0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1))))";

/**
 * Types of anchor appearance.
 * @public
 */
export declare type AnchorAppearance = ButtonAppearance | 'hypertext';

/**
 * Styles for Anchor
 * @public
 */
export declare const AnchorStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Badge appearance options.
 * @public
 */
export declare type BadgeAppearance = 'accent' | 'lightweight' | 'neutral' | string;

/**
 * Styles for Badge
 * @public
 */
export declare const BadgeStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * @internal
 */
export declare const BaseButtonStyles: ElementStyles;

/**
 * Styles for BreadcrumbItem
 * @public
 */
export declare const BreadcrumbItemStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Styles for Breadcrumb
 * @public
 */
export declare const BreadcrumbStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Types of button appearance.
 * @public
 */
export declare type ButtonAppearance = 'accent' | 'lightweight' | 'neutral' | 'outline' | 'stealth';

/**
 * Styles for Button
 * @public
 */
export declare const ButtonStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Styles for Card
 * @public
 */
export declare const CardStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Styles for Checkbox
 * @public
 */
export declare const CheckboxStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Styles for Dialog
 * @public
 */
export declare const DialogStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * @internal
 */
export declare const directionalShadow = "0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))))";

/**
 * Styles for Divider
 * @public
 */
export declare const DividerStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Applies the box-shadow CSS rule set to the elevation formula.
 * Control this formula with the --elevation CSS Custom Property
 * by setting --elevation to a number.
 *
 * @public
 */
export declare const elevation: string;

/**
 * Styles for Flipper
 * @public
 */
export declare const FlipperStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * The FluentUI Accordion Element. Implements {@link @microsoft/fast-foundation#Accordion},
 * {@link @microsoft/fast-foundation#AccordionTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-accordion\>
 */
export declare class FluentAccordion extends Accordion {
}

/**
 * The Fluent Accordion Item Element. Implements {@link @microsoft/fast-foundation#AccordionItem},
 * {@link @microsoft/fast-foundation#AccordionItemTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-accordion-item\>
 */
export declare class FluentAccordionItem extends AccordionItem {
}

/**
 * The Fluent Anchor Element. Implements {@link @microsoft/fast-foundation#Anchor},
 * {@link @microsoft/fast-foundation#AnchorTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-anchor\>
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
export declare class FluentAnchor extends Anchor {
    /**
     * The appearance the anchor should have.
     *
     * @public
     * @remarks
     * HTML Attribute: appearance
     */
    appearance: AnchorAppearance;
    appearanceChanged(oldValue: AnchorAppearance, newValue: AnchorAppearance): void;
    /**
     * @internal
     */
    connectedCallback(): void;
    /**
     * Applies 'icon-only' class when there is only an SVG in the default slot
     *
     * @internal
     */
    defaultSlottedContentChanged(): void;
}

/**
 * The Fluent Badge Element. Implements {@link @microsoft/fast-foundation#Badge},
 * {@link @microsoft/fast-foundation#BadgeTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-badge\>
 */
export declare class FluentBadge extends Badge {
    appearance: BadgeAppearance;
    private appearanceChanged;
}

/**
 * The Fluent Breadcrumb Element. Implements {@link @microsoft/fast-foundation#Breadcrumb},
 * {@link @microsoft/fast-foundation#BreadcrumbTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-breadcrumb\>
 */
export declare class FluentBreadcrumb extends Breadcrumb {
}

/**
 * The Fluent BreadcrumbItem Element. Implements {@link @microsoft/fast-foundation#BreadcrumbItem},
 * {@link @microsoft/fast-foundation#BreadcrumbItemTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-breadcrumb-item\>
 */
export declare class FluentBreadcrumbItem extends BreadcrumbItem {
}

/**
 * The Fluent Button Element. Implements {@link @microsoft/fast-foundation#Button},
 * {@link @microsoft/fast-foundation#ButtonTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-button\>
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
export declare class FluentButton extends Button {
    /**
     * The appearance the button should have.
     *
     * @public
     * @remarks
     * HTML Attribute: appearance
     */
    appearance: ButtonAppearance;
    appearanceChanged(oldValue: ButtonAppearance, newValue: ButtonAppearance): void;
    /**
     * @internal
     */
    connectedCallback(): void;
    /**
     * Applies 'icon-only' class when there is only an SVG in the default slot
     *
     * @internal
     */
    defaultSlottedContentChanged(): void;
}

/**
 * The Fluent Card Element. Implements {@link @microsoft/fast-foundation#Card},
 * {@link @microsoft/fast-foundation#CardTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-card\>
 */
export declare class FluentCard extends DesignSystemProvider implements Pick<DesignSystem, 'backgroundColor' | 'neutralPalette'> {
    /**
     * Background color for the banner component. Sets context for the design system.
     * @public
     * @remarks
     * HTML Attribute: background-color
     */
    backgroundColor: string;
    /**
     * Background color for the banner component. Sets context for the design system.
     * @public
     * @remarks
     * HTML Attribute: background-color
     */
    cardBackgroundColor: string;
    private cardBackgroundColorChanged;
    /**
     * Neutral pallette for the the design system provider.
     * @internal
     */
    neutralPalette: string[];
    /**
     * @internal
     */
    handleChange(source: DesignSystem, name: string): void;
    connectedCallback(): void;
}

/**
 * The Fluent Checkbox Element. Implements {@link @microsoft/fast-foundation#Checkbox},
 * {@link @microsoft/fast-foundation#CheckboxTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-checkbox\>
 */
export declare class FluentCheckbox extends Checkbox {
}

/**
 * The Fluent Design System
 * @public
 */
export declare type FluentDesignSystem = Omit<DesignSystem, 'contrast' | 'fontWeight' | 'neutralForegroundDarkIndex' | 'neutralForegroundLightIndex'>;

/**
 * The Fluent DesignSystemProvider Element. Implements {@link @microsoft/fast-foundation#DesignSystemProvider},
 * {@link @microsoft/fast-foundation#DesignSystemProviderTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-design-system-provider\>
 */
export declare class FluentDesignSystemProvider extends DesignSystemProvider implements Omit<DesignSystem, 'contrast' | 'fontWeight' | 'neutralForegroundDarkIndex' | 'neutralForegroundLightIndex'> {
    /**
     * Used to instruct the FASTDesignSystemProvider
     * that it should not set the CSS
     * background-color and color properties
     *
     * @remarks
     * HTML boolean boolean attribute: no-paint
     */
    noPaint: boolean;
    private noPaintChanged;
    /**
     * Define design system property attributes
     */
    backgroundColor: string;
    protected backgroundColorChanged(): void;
    accentBaseColor: string;
    neutralPalette: string[];
    accentPalette: string[];
    density: DensityOffset;
    designUnit: number;
    direction: Direction;
    baseHeightMultiplier: number;
    baseHorizontalSpacingMultiplier: number;
    cornerRadius: number;
    elevatedCornerRadius: number;
    outlineWidth: number;
    focusOutlineWidth: number;
    disabledOpacity: number;
    typeRampMinus2FontSize: string;
    typeRampMinus2LineHeight: string;
    typeRampMinus1FontSize: string;
    typeRampMinus1LineHeight: string;
    typeRampBaseFontSize: string;
    typeRampBaseLineHeight: string;
    typeRampPlus1FontSize: string;
    typeRampPlus1LineHeight: string;
    typeRampPlus2FontSize: string;
    typeRampPlus2LineHeight: string;
    typeRampPlus3FontSize: string;
    typeRampPlus3LineHeight: string;
    typeRampPlus4FontSize: string;
    typeRampPlus4LineHeight: string;
    typeRampPlus5FontSize: string;
    typeRampPlus5LineHeight: string;
    typeRampPlus6FontSize: string;
    typeRampPlus6LineHeight: string;
    accentFillRestDelta: number;
    accentFillHoverDelta: number;
    accentFillActiveDelta: number;
    accentFillFocusDelta: number;
    accentFillSelectedDelta: number;
    accentForegroundRestDelta: number;
    accentForegroundHoverDelta: number;
    accentForegroundActiveDelta: number;
    accentForegroundFocusDelta: number;
    neutralFillRestDelta: number;
    neutralFillHoverDelta: number;
    neutralFillActiveDelta: number;
    neutralFillFocusDelta: number;
    neutralFillSelectedDelta: number;
    neutralFillInputRestDelta: number;
    neutralFillInputHoverDelta: number;
    neutralFillInputActiveDelta: number;
    neutralFillInputFocusDelta: number;
    neutralFillInputSelectedDelta: number;
    neutralFillStealthRestDelta: number;
    neutralFillStealthHoverDelta: number;
    neutralFillStealthActiveDelta: number;
    neutralFillStealthFocusDelta: number;
    neutralFillStealthSelectedDelta: number;
    neutralFillToggleHoverDelta: number;
    neutralFillToggleActiveDelta: number;
    neutralFillToggleFocusDelta: number;
    baseLayerLuminance: number;
    neutralFillCardDelta: number;
    neutralForegroundHoverDelta: number;
    neutralForegroundActiveDelta: number;
    neutralForegroundFocusDelta: number;
    neutralDividerRestDelta: number;
    neutralOutlineRestDelta: number;
    neutralOutlineHoverDelta: number;
    neutralOutlineActiveDelta: number;
    neutralOutlineFocusDelta: number;
}

/**
 * The Fluent Dialog Element. Implements {@link @microsoft/fast-foundation#Dialog},
 * {@link @microsoft/fast-foundation#DialogTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-dialog\>
 */
export declare class FluentDialog extends Dialog {
}

/**
 * The Fluent Divider Element. Implements {@link @microsoft/fast-foundation#Divider},
 * {@link @microsoft/fast-foundation#DividerTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-divider\>
 */
export declare class FluentDivider extends Divider {
}

/**
 * The Fluent Flipper Element. Implements {@link @microsoft/fast-foundation#Flipper},
 * {@link @microsoft/fast-foundation#FlipperTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-flipper\>
 */
export declare class FluentFlipper extends Flipper {
}

/**
 * The Fluent Listbox Element. Implements {@link @microsoft/fast-foundation#Listbox},
 * {@link @microsoft/fast-foundation#ListboxTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-listbox\>
 */
export declare class FluentListbox extends Listbox {
}

/**
 * The Fluent Menu Element. Implements {@link @microsoft/fast-foundation#Menu},
 * {@link @microsoft/fast-foundation#MenuTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-menu\>
 */
export declare class FluentMenu extends Menu {
}

/**
 * The Fluent Menu Item Element. Implements {@link @microsoft/fast-foundation#MenuItem},
 * {@link @microsoft/fast-foundation#MenuItemTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-menu-item\>
 */
export declare class FluentMenuItem extends MenuItem {
}

/**
 * The Fluent ListboxOption Element. Implements {@link @microsoft/fast-foundation#ListboxOption},
 * {@link @microsoft/fast-foundation#ListboxOptionTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-option\>
 */
export declare class FluentOption extends ListboxOption {
}

/**
 * The Fluent Progress Element. Implements {@link @microsoft/fast-foundation#BaseProgress},
 * {@link @microsoft/fast-foundation#ProgressTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-progress\>
 */
export declare class FluentProgress extends BaseProgress {
}

/**
 * The Fluent Progress Ring Element. Implements {@link @microsoft/fast-foundation#BaseProgress},
 * {@link @microsoft/fast-foundation#ProgressRingTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-progress-ring\>
 */
export declare class FluentProgressRing extends BaseProgress {
}

/**
 * The Fluent Radio Element. Implements {@link @microsoft/fast-foundation#Radio},
 * {@link @microsoft/fast-foundation#RadioTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-radio\>
 */
export declare class FluentRadio extends Radio {
}

/**
 * The Fluent Radio Group Element. Implements {@link @microsoft/fast-foundation#RadioGroup},
 * {@link @microsoft/fast-foundation#RadioGroupTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-radio-group\>
 */
export declare class FluentRadioGroup extends RadioGroup {
}

/**
 * The Fluent Select Element. Implements {@link @microsoft/fast-foundation#Select},
 * {@link @microsoft/fast-foundation#SelectTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-select\>
 */
export declare class FluentSelect extends Select {
}

/**
 * The Fluent Skeleton Element. Implements {@link @microsoft/fast-foundation#Skeleton},
 * {@link @microsoft/fast-foundation#SkeletonTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-skeleton\>
 */
export declare class FluentSkeleton extends Skeleton {
}

/**
 * The Fluent Slider Custom Element. Implements {@link @microsoft/fast-foundation#Slider},
 * {@link @microsoft/fast-foundation#SliderTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-slider\>
 */
export declare class FluentSlider extends Slider {
}

/**
 * The Fluent Slider Label Custom Element. Implements {@link @microsoft/fast-foundation#SliderLabel},
 * {@link @microsoft/fast-foundation#SliderLabelTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-slider-label\>
 */
export declare class FluentSliderLabel extends SliderLabel {
}

/**
 * The Fluent Switch Custom Element. Implements {@link @microsoft/fast-foundation#Switch},
 * {@link @microsoft/fast-foundation#SwitchTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-switch\>
 */
export declare class FluentSwitch extends Switch {
}

/**
 * The Fluent Tab Custom Element. Implements {@link @microsoft/fast-foundation#Tab},
 * {@link @microsoft/fast-foundation#TabTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-tab\>
 */
export declare class FluentTab extends Tab {
}

/**
 * The Fluent Tab Panel Custom Element. Implements {@link @microsoft/fast-foundation#TabPanel},
 * {@link @microsoft/fast-foundation#TabPanelTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-tab-panel\>
 */
export declare class FluentTabPanel extends TabPanel {
}

/**
 * The Fluent Tabs Custom Element. Implements {@link @microsoft/fast-foundation#Tabs},
 * {@link @microsoft/fast-foundation#TabsTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-tabs\>
 */
export declare class FluentTabs extends Tabs {
}

/**
 * The Fluent Text Area Custom Element. Implements {@link @microsoft/fast-foundation#TextArea},
 * {@link @microsoft/fast-foundation#TextAreaTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-text-area\>
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
export declare class FluentTextArea extends TextArea {
    /**
     * The appearance of the element.
     *
     * @public
     * @remarks
     * HTML Attribute: appearance
     */
    appearance: TextAreaAppearance;
    /**
     * @internal
     */
    appearanceChanged(oldValue: TextAreaAppearance, newValue: TextAreaAppearance): void;
    /**
     * @internal
     */
    connectedCallback(): void;
}

/**
 * The Fluent Text Field Custom Element. Implements {@link @microsoft/fast-foundation#TextField},
 * {@link @microsoft/fast-foundation#TextFieldTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-text-field\>
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
export declare class FluentTextField extends TextField {
    /**
     * The appearance of the element.
     *
     * @public
     * @remarks
     * HTML Attribute: appearance
     */
    appearance: TextFieldAppearance;
    /**
     * @internal
     */
    appearanceChanged(oldValue: TextFieldAppearance, newValue: TextFieldAppearance): void;
    /**
     * @internal
     */
    connectedCallback(): void;
}

/**
 * The Fluent Tree Item Custom Element. Implements {@link @microsoft/fast-foundation#TreeItem},
 * {@link @microsoft/fast-foundation#TreeItem}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-tree-item\>
 */
export declare class FluentTreeItem extends TreeItem {
}

/**
 * The Fluent Tree View Custom Element. Implements {@link @microsoft/fast-foundation#TreeView},
 * {@link @microsoft/fast-foundation#TreeView}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-tree-view\>
 */
export declare class FluentTreeView extends TreeView {
}

/**
 * The height of height of a standard control (expressed as a number) to be used in CSS.
 * @public
 */
export declare const heightNumber = "(var(--base-height-multiplier) + var(--density)) * var(--design-unit)";

/**
 * @internal
 */
export declare const HypertextStyles: ElementStyles;

/**
 * Behavior to resolve and make available the inline-end CSS custom property.
 *
 * @remarks
 * Replaces the inline-end value for the {@link https://developer.mozilla.org/en-US/docs/Web/CSS/float | float} property
 * when the native value is not supported.
 *
 * @public
 * @example
 * ```ts
 * import { css } from "@microsoft/fast-element";
 * import { inlineEndBehavior } from "@microsoft/fast-components-msft";
 *
 * css`
 *   :host {
 *     float: ${inlineEndBehavior.var};
 *   }
 * `.withBehaviors(inlineEndBehavior)
 * ```
 */
export declare const inlineEndBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the inline-start CSS custom property.
 *
 * @remarks
 * Replaces the inline-start value for the {@link https://developer.mozilla.org/en-US/docs/Web/CSS/float | float} property
 * when the native value is not supported.
 *
 * @public
 * @example
 * ```ts
 * import { css } from "@microsoft/fast-element";
 * import { inlineStartBehavior } from "@microsoft/fast-components-msft";
 *
 * css`
 *   :host {
 *     float: ${inlineStartBehavior.var};
 *   }
 * `.withBehaviors(inlineStartBehavior)
 * ```
 */
export declare const inlineStartBehavior: CSSCustomPropertyBehavior;

/**
 * @internal
 */
export declare const LightweightButtonStyles: ElementStyles;

/**
 * Styles for Listbox
 * @public
 */
export declare const ListboxStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Styles for MenuItem
 * @public
 */
export declare const MenuItemStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Styles for Menu
 * @public
 */
export declare const MenuStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Behavior to resolve and make available the neutral-divider-rest CSS custom property.
 * @public
 */
export declare const neutralDividerRestBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-fill-active CSS custom property.
 * @public
 */
export declare const neutralFillActiveBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-fill-card-rest CSS custom property.
 * @public
 */
export declare const neutralFillCardRestBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-fill-focus CSS custom property.
 * @public
 */
export declare const neutralFillFocusBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-fill-hover CSS custom property.
 * @public
 */
export declare const neutralFillHoverBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-fill-input-active CSS custom property.
 * @public
 */
export declare const neutralFillInputActiveBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-fill-input-focus CSS custom property.
 * @public
 */
export declare const neutralFillInputFocusBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-fill-input-hover CSS custom property.
 * @public
 */
export declare const neutralFillInputHoverBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-fill-input-rest CSS custom property.
 * @public
 */
export declare const neutralFillInputRestBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-fill-rest CSS custom property.
 * @public
 */
export declare const neutralFillRestBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-fill-selected CSS custom property.
 * @public
 */
export declare const neutralFillSelectedBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-fill-stealth-active CSS custom property.
 * @public
 */
export declare const neutralFillStealthActiveBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-fill-stealth-focus CSS custom property.
 * @public
 */
export declare const neutralFillStealthFocusBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-fill-stealth-hover CSS custom property.
 * @public
 */
export declare const neutralFillStealthHoverBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-fill-stealth-rest CSS custom property.
 * @public
 */
export declare const neutralFillStealthRestBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-fill-stealth-selected CSS custom property.
 * @public
 */
export declare const neutralFillStealthSelectedBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-fill-toggle-active CSS custom property.
 * @public
 */
export declare const neutralFillToggleActiveBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-fill-toggle-focus CSS custom property.
 * @public
 */
export declare const neutralFillToggleFocusBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-fill-toggle-hover CSS custom property.
 * @public
 */
export declare const neutralFillToggleHoverBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-fill-toggle-rest CSS custom property.
 * @public
 */
export declare const neutralFillToggleRestBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-focus CSS custom property.
 * @public
 */
export declare const neutralFocusBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-focus-inner-accent CSS custom property.
 * @public
 */
export declare const neutralFocusInnerAccentBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-foreground-active CSS custom property.
 * @public
 */
export declare const neutralForegroundActiveBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-foreground-focus CSS custom property.
 * @public
 */
export declare const neutralForegroundFocusBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-foreground-hint CSS custom property.
 * @public
 */
export declare const neutralForegroundHintBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-foreground-hint-large CSS custom property.
 * @public
 */
export declare const neutralForegroundHintLargeBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-foreground-hover CSS custom property.
 * @public
 */
export declare const neutralForegroundHoverBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-foreground-rest CSS custom property.
 * @public
 */
export declare const neutralForegroundRestBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-foreground-toggle CSS custom property.
 * @public
 */
export declare const neutralForegroundToggleBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-foreground-toggle-large CSS custom property.
 * @public
 */
export declare const neutralForegroundToggleLargeBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-layer-card CSS custom property.
 * @public
 */
export declare const neutralLayerCardBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-layer-card-container CSS custom property.
 * @public
 */
export declare const neutralLayerCardContainerBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-layer-floating CSS custom property.
 * @public
 */
export declare const neutralLayerFloatingBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-layer-l1-alt CSS custom property.
 * @public
 */
export declare const neutralLayerL1AltBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-layer-l1 CSS custom property.
 * @public
 */
export declare const neutralLayerL1Behavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-layer-l2 CSS custom property.
 * @public
 */
export declare const neutralLayerL2Behavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-layer-l3 CSS custom property.
 * @public
 */
export declare const neutralLayerL3Behavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-layer-l4 CSS custom property.
 * @public
 */
export declare const neutralLayerL4Behavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-outline-active CSS custom property.
 * @public
 */
export declare const neutralOutlineActiveBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-outline-focus CSS custom property.
 * @public
 */
export declare const neutralOutlineFocusBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-outline-hover CSS custom property.
 * @public
 */
export declare const neutralOutlineHoverBehavior: CSSCustomPropertyBehavior;

/**
 * Behavior to resolve and make available the neutral-outline-rest CSS custom property.
 * @public
 */
export declare const neutralOutlineRestBehavior: CSSCustomPropertyBehavior;

/**
 * Styles for Option
 * @public
 */
export declare const OptionStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * @internal
 */
export declare const OutlineButtonStyles: ElementStyles;

/**
 * Converts a color string into a ColorRGBA64 instance.
 * Supports #RRGGBB and rgb(r, g, b) formats
 *
 * @public
 */
export declare function parseColorString(color: string): ColorRGBA64;

/**
 * Styles for ProgressRing
 * @public
 */
export declare const ProgressRingStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Styles for Progress
 * @public
 */
export declare const ProgressStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Styles for RadioGroup
 * @public
 */
export declare const RadioGroupStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Styles for Radio
 * @public
 */
export declare const RadioStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Styles for Select
 * @public
 */
export declare const SelectStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Styles for Skeleton
 * @public
 */
export declare const SkeletonStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Styles for SliderLabel
 * @public
 */
export declare const SliderLabelStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Styles for Slider
 * @public
 */
export declare const SliderStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * @internal
 */
export declare const StealthButtonStyles: ElementStyles;

/**
 * Styles for Switch
 * @public
 */
export declare const SwitchStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Styles for TabPanel
 * @public
 */
export declare const TabPanelStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Styles for Tabs
 * @public
 */
export declare const TabsStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Styles for Tab
 * @public
 */
export declare const TabStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Text area appearances
 * @public
 */
export declare type TextAreaAppearance = 'filled' | 'outline';

/**
 * Styles for TextArea
 * @public
 */
export declare const TextAreaStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Text field appearances
 * @public
 */
export declare type TextFieldAppearance = 'filled' | 'outline';

/**
 * Styles for TextField
 * @public
 */
export declare const TextFieldStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Styles for TreeItem
 * @public
 */
export declare const TreeItemStyles: import("@microsoft/fast-element").ElementStyles;

/**
 * Styles for TreeView
 * @public
 */
export declare const TreeViewStyles: import("@microsoft/fast-element").ElementStyles;

export { }
