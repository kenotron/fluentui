import { DesignSystemProvider } from '@microsoft/fast-foundation';
import { DesignSystem } from '@microsoft/fast-components-styles-msft';
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
 * Styles for Card
 * @public
 */
export declare const CardStyles: import("@microsoft/fast-element").ElementStyles;
