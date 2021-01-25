import { ButtonState } from './Button.types';
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
export declare const useButtonClasses: (state: ButtonState, options?: import("@fluentui/react-theme-provider").UseStylesOptions | undefined) => void;
