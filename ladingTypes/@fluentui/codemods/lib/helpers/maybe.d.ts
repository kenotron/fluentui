import { Chainable, Flattened } from './chainable';
interface MaybeChain<T> extends Chainable<T> {
    something?: boolean;
    __isMaybe: true;
    chain: <ReturnType>(this: Maybe<T>, fn: (v: NonNullable<T>) => Maybe<ReturnType>) => Maybe<ReturnType>;
    flatten: () => Flattened<T, Maybe<T>>;
    then: <ReturnType>(this: Maybe<T>, fn: (v: NonNullable<T>) => ReturnType | Maybe<ReturnType>) => Maybe<ReturnType>;
    orElse: (mElse: NonNullable<T>) => NonNullable<T>;
}
export interface Something<T> extends MaybeChain<T> {
    something: true;
    value: NonNullable<T>;
}
export interface Nothing<T> extends MaybeChain<T> {
    something: false;
}
export declare type Maybe<T> = Nothing<T> | Something<T>;
export declare const Nothing: <T>() => Nothing<T>;
export declare const Something: <T>(value: NonNullable<T>) => Something<T>;
export declare const MaybeDictionary: <T>(dictionary: {
    [key: string]: T;
}) => {
    [key: string]: Maybe<T>;
};
export declare const isSomething: <T>(val: Maybe<T>) => val is Something<T>;
export declare const isNothing: <T>(val: Maybe<T>) => val is Nothing<T>;
export declare const Maybe: <T>(value: T | null | undefined) => Maybe<T>;
export {};
