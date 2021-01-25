import './version';
/**
 * Jest serialize function which takes in a given (className) value, a serialize function, and
 * an indent level and returns a string. See more information here:
 *
 * https://jestjs.io/docs/en/configuration.html#snapshotserializers-array-string
 */
export declare function print(val: string, serialize: () => string, indent: (val: string) => string): string;
/**
 * Jest test function to determine if this serializer will handle the given value.
 * In our test function we test if the value is a className, which has classes that
 * merge-styles can recognize. If so, we return true, which instructs jest to use
 * our print function to translate the class input into expanded rules.
 */
export declare function test(val: string): boolean;
