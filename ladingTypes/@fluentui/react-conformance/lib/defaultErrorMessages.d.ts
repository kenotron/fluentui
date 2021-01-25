import { IsConformantOptions } from './types';
import { ComponentDoc } from 'react-docgen-typescript';
/**
 * General structure of isConformant error messages:
 * 1. Call __defaultErrorMessage()__ and pass in the `testName`, `displayName`, and the `errorMessage`.
 *    It will return:
 *
 *    `testName`
 *
 *    It appears that `displayName` does not have a `errorMessage`
 *
 * 2. Call __resolveErrorMessages()__ and pass in a array of `resolveErrorMessages` to help solve the error.
 *    It will return:
 *
 *    To resolve this issue:
 *    [`resolveErrorMessages`]
 *
 * 3. Call __receivedErrorMessage__ and pass in the `error` caught from the isConformant test.
 *    It will return:
 *
 *    Here's the full error message:
 *
 *    `error`
 *
 * 4. Reference __errorMessageColors__ and color code the passed arguments for `errorMessage` and
 *    `resolveErrorMessages` array accordingly.
 */
export declare const defaultErrorMessages: {
    'has-docblock': (componentInfo: ComponentDoc, testInfo: IsConformantOptions<{}>, error: string) => void;
    'exports-component': (componentInfo: ComponentDoc, testInfo: IsConformantOptions<{}>, error: string) => void;
    'component-renders': (componentInfo: ComponentDoc, testInfo: IsConformantOptions<{}>, error: string) => void;
    'component-has-displayname': (componentInfo: ComponentDoc, testInfo: IsConformantOptions<{}>, error: string) => void;
    'component-handles-ref': (componentInfo: ComponentDoc, testInfo: IsConformantOptions<{}>, error: string) => void;
    'component-has-root-ref': (componentInfo: ComponentDoc, testInfo: IsConformantOptions<{}>, error: string) => void;
    'name-matches-filename': (componentInfo: ComponentDoc, testInfo: IsConformantOptions<{}>, error: string) => void;
    'exported-top-level': (componentInfo: ComponentDoc, testInfo: IsConformantOptions<{}>, error: string) => void;
    'has-top-level-file': (componentInfo: ComponentDoc, testInfo: IsConformantOptions<{}>, error: string) => void;
    'is-static-property-of-parent': (componentInfo: ComponentDoc, testInfo: IsConformantOptions<{}>, error: string) => void;
    'kebab-aria-attributes': (componentInfo: ComponentDoc, testInfo: IsConformantOptions<{}>, error: string) => void;
    'consistent-callback-names': (componentInfo: ComponentDoc, testInfo: IsConformantOptions<{}>, error: string) => void;
    'as-renders-fc': (componentInfo: ComponentDoc, testInfo: IsConformantOptions<{}>, error: string) => void;
    'as-renders-react-class': (componentInfo: ComponentDoc, testInfo: IsConformantOptions<{}>, error: string) => void;
    'as-passes-as-value': (componentInfo: ComponentDoc, testInfo: IsConformantOptions<{}>, error: string) => void;
    'as-renders-html': (componentInfo: ComponentDoc, testInfo: IsConformantOptions<{}>, error: string) => void;
    'display-failed-tests': (componentInfo: ComponentDoc, testInfo: IsConformantOptions<{}>) => void;
};
