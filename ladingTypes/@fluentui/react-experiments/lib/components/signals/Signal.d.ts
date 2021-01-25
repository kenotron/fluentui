import * as React from 'react';
export interface ISignalProps extends React.HTMLAttributes<HTMLSpanElement> {
    ariaLabel?: string;
}
export declare type Signal = React.FunctionComponent<ISignalProps>;
export declare const Signal: Signal;
