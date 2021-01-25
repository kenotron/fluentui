import * as React from 'react';
import { ITransformedExample } from '../interfaces/index';
export interface IEditorErrorBoundaryProps {
    /**
     * Result of transforming the code. Used to get the transform error (if any) and to determine
     * when a previously-caught rendering error should be cleared (because the code has updated and
     * we should try again).
     */
    transformResult: ITransformedExample;
}
interface IEditorErrorBoundaryState {
    caughtError?: string;
}
/**
 * Error boundary to catch and display any errors thrown while rendering the example component.
 * It also handles displaying errors from transforming the code.
 *
 * The example preview should be rendered as a child of this component. (This component can't just
 * render the preview directly because error boundaries only catch errors in passed-in children.)
 */
export declare class EditorErrorBoundary extends React.Component<IEditorErrorBoundaryProps, IEditorErrorBoundaryState> {
    state: IEditorErrorBoundaryState;
    private _lastGoodChildren;
    private _lastErrorTime;
    static getDerivedStateFromError(error: Error): {
        caughtError: string;
    };
    componentDidUpdate(prevProps: IEditorErrorBoundaryProps, prevState: IEditorErrorBoundaryState): void;
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
    render(): JSX.Element;
}
export {};
