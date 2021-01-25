import { CardState } from './Card.types';
export declare const CardSizeVariants: {
    size_smallest: {
        borderRadius: string;
        height: string;
        margin: string;
        padding: string;
        width: string;
    };
    size_smaller: {
        borderRadius: string;
        height: string;
        margin: string;
        padding: string;
        width: string;
    };
    size_small: {
        borderRadius: string;
        height: string;
        margin: string;
        padding: string;
        width: string;
    };
    size_large: {
        borderRadius: string;
        height: string;
        margin: string;
        padding: string;
        width: string;
    };
    size_larger: {
        borderRadius: string;
        height: string;
        margin: string;
        padding: string;
        width: string;
    };
    size_largest: {
        borderRadius: string;
        height: string;
        margin: string;
        padding: string;
        width: string;
    };
};
export declare const useCardClasses: (state: CardState, options?: import("@fluentui/react-theme-provider").UseStylesOptions | undefined) => void;
