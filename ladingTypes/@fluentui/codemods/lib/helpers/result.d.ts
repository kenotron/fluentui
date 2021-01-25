import { Chainable, Flattened } from './chainable';
export interface Ok<R, E> extends ResultInternal<R, E> {
    ok: true;
    value: R;
}
export interface Err<R, E> extends ResultInternal<R, E> {
    ok: false;
    value: E;
}
declare class ResultInternal<R, E> implements Chainable<R> {
    ok: boolean;
    value: R | E;
    constructor(options: {
        ok: boolean;
        value: R | E;
    });
    chain<T>(this: Result<R, E>, fn: (v: R) => Result<T, E>): Result<T, E>;
    bothChain<R2, E2>(this: Result<R, E>, fnOk: (v: R) => Result<R2, E2>, fnErr: (v: E) => Result<R2, E2>): Result<R2, E2>;
    /**
     * Works just like chain, but is only called if this Result is an error.
     * This returns a new Result with type Result<R, NewType>
     */
    errChain<T>(this: Result<R, E>, fn: (v: E) => Result<R, T>): Result<R, T>;
    flatten(): Flattened<R, Result<R, E>>;
    /**
     * This allows users to opperate on a presumed result without needing to know whether or not
     * the result was successful or not.
     * At each call if it is a result type of ok, it will call the supplied function, otherwise it
     * will return the current value with a new Err.
     *
     * @param fnOk Function that takes in an ok value of type R and returns either F or Result<F,E>
     */
    then<F>(this: Result<R, E>, fnOk: (v: R) => F | Result<F, E>): Result<F, E>;
    /**
     * Works just like then, but is only called if this Result is an error.
     * This returns a new Result with type Result<R, NewType>
     */
    errThen<F>(this: Result<R, E>, fnErr: (v: E) => F | Result<R, F>): Result<R, F>;
    okOrElse(this: Result<R, E>, okElse: R): R;
    errOrElse(this: Result<R, E>, errElse: E): E;
    /**
     * Takes in two functions, one which takes type R and the other which takes type E and both return
     * type T. This lets you handle either case and potentially return a unifying type. You might use this
     * to create a message for users.
     *
     * @param fnOk Function that maps from Ok value(R) to new type T
     * @param fnErr Function that maps from Err value(E) to new type T
     */
    resolve<T>(this: Result<R, E>, fnOk: (v: R) => T, fnErr: (v: E) => T): T;
    /**
     * This function will either return the current Ok value or use
     * the function provided to generate that from the Err value that it contains
     * @param fnErr Function that maps from Err value(E) to current type R
     */
    resolveOk(this: Result<R, E>, fnErr: (v: E) => R): R;
    /**
     * This function will either return the current Err value or use
     * the function provided to generate that from the Ok value that it contains
     *
     * @param fnOk Function that maps from Ok value(R) to current type E
     */
    resolveErr(this: Result<R, E>, fnOk: (v: R) => E): E;
}
export declare const Ok: <R, E>(value: R) => Ok<R, E>;
export declare const Err: <R, E>(value: E) => Err<R, E>;
/**
 * Result is a useful type for when you might want to handle errors down the line without swallowing them
 * while still preforming potentially several operations that could result in an error. A simple example could
 * be a dividing function that returns a Result. Instead of throwing an error that you cannot divide by zero,
 * it would be returned in an Err. This allows the rest of the program to execute cleanly.
 */
export declare type Result<R, E> = Err<R, E> | Ok<R, E>;
export declare const isOk: <R, E>(r: Result<R, E>) => r is Ok<R, E>;
export declare const isErr: <R, E>(r: Result<R, E>) => r is Err<R, E>;
export declare const partitionResults: <R, E>(results: Result<R, E>[]) => [R[], E[]];
export {};
