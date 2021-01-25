import { ImageLoadState, IBaseProps } from '@fluentui/react';
import { IComponentStyles, IHTMLSlot, ISlotProp, IComponent, IStyleableComponentProps } from '@fluentui/foundation-legacy';
import { IPersonaPresenceSlot } from '../../utilities/factoryComponents.types';
import { IPersonaCoinImageSlot } from './PersonaCoinImage/PersonaCoinImage.types';
import { IPersonaCoinSize10Slot } from './PersonaCoinSize10/PersonaCoinSize10';
import { IPersonaCoinInitialsSlot } from './PersonaCoinInitials/PersonaCoinInitials';
export declare type IPersonaCoinComponent = IComponent<IPersonaCoinProps, IPersonaCoinTokens, IPersonaCoinStyles, IPersonaCoinViewProps>;
export declare type IPersonaCoinTokenReturnType = ReturnType<Extract<IPersonaCoinComponent['tokens'], Function>>;
export declare type IPersonaCoinStylesReturnType = ReturnType<Extract<IPersonaCoinComponent['styles'], Function>>;
export declare type IPersonaCoinSlot = ISlotProp<IPersonaCoinProps, string>;
export interface IPersonaCoinSlots {
    /**
     * Slot for the root element.
     */
    root?: IHTMLSlot;
    /**
     * Slot for the image element
     */
    image?: IPersonaCoinImageSlot;
    /**
     * Slot for the initials element
     */
    initials?: IPersonaCoinInitialsSlot;
    /**
     * Slot for the presence element
     */
    presence?: IPersonaPresenceSlot;
    /**
     * Slot for the alternative coin for the smallest persona size
     */
    personaCoinSize10?: IPersonaCoinSize10Slot;
}
export declare type PersonaCoinSize = 10 | 16 | 24 | 28 | 32 | 40 | 48 | 56 | 72 | 100;
export interface IPersonaCoinProps extends IPersonaCoinSlots, IStyleableComponentProps<IPersonaCoinProps, IPersonaCoinTokens, IPersonaCoinStyles>, IBaseProps<IPersonaCoinComponent> {
    /**
     * Whether initials are calculated for phone numbers and number sequences.
     * Example: Set property to true to get initials for project names consisting of numbers only.
     * @defaultvalue false
     */
    allowPhoneInitials?: boolean;
    /**
     * The color that should be used when rendering the coin.
     */
    coinColor?: string;
    /**
     * This will be used to extract initials from if `initials` is not passed.
     */
    text?: string;
    /**
     * Size of the coin
     * @defaultvalue 48
     */
    size?: PersonaCoinSize;
    /**
     * Url to the image to use, should be a square aspect ratio and big enough to fit in the image area.
     */
    imageUrl?: string;
    /**
     * If true, adds the css class 'is-fadeIn' to the image.
     * @defaultvalue true
     */
    imageShouldFadeIn?: boolean;
    /**
     * If true, the image starts as visible and is hidden on error. Otherwise, the image is hidden until
     * it is successfully loaded. This disables imageShouldFadeIn.
     * @defaultvalue true
     */
    imageShouldStartVisible?: boolean;
    /**
     * Alt text for the image to use. Defaults to an empty string.
     */
    imageAlt?: string;
    /**
     * Optional callback for when loading state of the photo changes
     */
    onPhotoLoadingStateChange?: (newImageLoadState: ImageLoadState) => void;
    /**
     * The color of the user's initials that are displayed.
     * @defaultvalue 'white'
     */
    initialsColor?: string;
}
export interface IPersonaCoinViewProps extends IPersonaCoinProps {
    isPictureLoaded?: boolean;
}
export interface IPersonaCoinTokens {
}
export declare type IPersonaCoinStyles = IComponentStyles<IPersonaCoinSlots>;
