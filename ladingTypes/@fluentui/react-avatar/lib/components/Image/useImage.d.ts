import * as React from 'react';
import { ImageProps } from './Image.types';
export declare const useImage: (props: ImageProps, ref: React.Ref<HTMLElement>, defaultProps?: ImageProps | undefined) => {
    state: ImageProps;
    render: (state: ImageProps) => JSX.Element;
};
