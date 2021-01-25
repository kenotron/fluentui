import * as React from 'react';
import { ImageProps, ImageState } from './Image.types';
/**
 * Consts listing which props are shorthand props.
 */
export declare const iconShorthandProps: never[];
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
