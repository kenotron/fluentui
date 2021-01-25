import { BaseSlots } from '@fluentui/react-compose';
import { ComponentProps } from '@fluentui/react-compose';
import * as React from 'react';
import { SlotProps } from '@fluentui/react-compose';

/**
 * Consts listing which props are shorthand props.
 */
export declare const iconShorthandProps: never[];

export declare const Image: React.ForwardRefExoticComponent<ImageProps & React.RefAttributes<HTMLElement>>;

export declare interface ImageProps extends ComponentProps, React.ImgHTMLAttributes<HTMLImageElement> {
    /** An alternative text for an image. */
    alt?: string;
    /** An image can appear with rectangular border. */
    bordered?: boolean;
    /** An image can set how it should be resized to fit its container. */
    fit?: 'none' | 'center' | 'contain' | 'cover';
    /** An image can take up the width of its container. */
    fluid?: boolean;
    /** An image can appear circular. */
    circular?: boolean;
    /** An image can appear rounded. */
    rounded?: boolean;
    /** An image can have source URL. */
    src?: string;
}

export declare type ImageSlotProps = SlotProps<ImageSlots, ImageProps, React.ImgHTMLAttributes<HTMLImageElement>>;

export declare interface ImageSlots extends BaseSlots {
}

export declare interface ImageState extends ImageProps {
    imageRef?: React.RefObject<HTMLElement>;
}

/**
 * Define the render function. Given the state of a button, renders it.
 */
export declare const renderImage: (state: ImageState) => JSX.Element;

/**
 * Given user props, returns state and render function for a Button.
 */
export declare const useImage: (props: ImageProps, ref: React.Ref<HTMLElement>, defaultProps?: ImageProps | undefined) => {
    state: Record<string, any>;
    render: (state: ImageState) => JSX.Element;
};

export declare const useImageClasses: (state: Record<string, any>) => void;

export { }
