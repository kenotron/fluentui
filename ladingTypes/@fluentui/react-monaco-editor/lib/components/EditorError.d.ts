import * as React from 'react';
export interface IEditorErrorProps {
    error?: string | string[];
}
/** Display a message bar with an error. If there's no error, returns null. */
export declare const EditorError: React.FunctionComponent<IEditorErrorProps>;
