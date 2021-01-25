import * as React from 'react';
import { IBasicPackageGroup, ITransformedCode } from '../interfaces/index';
/** Function signature wrapping the transformed code if `ITransformExampleParams.returnFunction` is true. */
export declare type ExampleWrapperFunction = (react: typeof React) => React.ComponentType;
export interface ITransformExampleParams {
    /**
     * TS for the example. Will be used to find imports/exports. Will also be used in the final
     * returned code if `jsCode` is not provided.
     */
    tsCode: string;
    /**
     * The example transpiled into JS, output module format ES2015 or ESNext.
     * Will be used in the final returned code if provided.
     */
    jsCode?: string;
    /**
     * If false, the returned code will end with a `ReactDOM.render(...)` line and won't be wrapped
     * in a function.
     * If true, the returned code will be wrapped in a function of type `ExampleWrapperFunction`,
     * which should be called with the correct local version of React (to avoid hook errors due to
     * React mismatches in case there's a global React) and returns the component.
     */
    returnFunction?: boolean;
    /** ID for the component to be rendered into (required unless `returnFunction` is true) */
    id?: string;
    /** Supported package groups (React is implicitly supported) */
    supportedPackages: IBasicPackageGroup[];
}
/**
 * Transform an example for rendering in a browser context (example page or codepen).
 */
export declare function transformExample(params: ITransformExampleParams): ITransformedCode;
