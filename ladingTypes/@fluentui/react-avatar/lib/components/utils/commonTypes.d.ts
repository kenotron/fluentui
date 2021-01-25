import * as React from 'react';
export declare type SizeValue = 'smallest' | 'smaller' | 'small' | 'medium' | 'large' | 'larger' | 'largest';
export declare type ComponentClasses<TClasses, TState> = Partial<TClasses> | ((state: TState) => Partial<TClasses>);
export interface ComponentProps {
    as?: React.ElementType;
    className?: string;
}
export declare type ShorthandValue<TProps> = string | boolean | number | TProps | JSX.Element;
