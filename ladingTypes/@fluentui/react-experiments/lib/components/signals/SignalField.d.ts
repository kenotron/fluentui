import * as React from 'react';
export declare type SignalFieldMode = 'wide' | 'compact';
export interface ISignalFieldProps extends React.HTMLAttributes<HTMLSpanElement> {
    signalsFieldMode?: SignalFieldMode;
    before?: React.ReactNode;
    after?: React.ReactNode;
}
/**
 * Renders a field flanked by signals.
 * Pass `<Signal />` or related components in for the `before` and `after` fields.
 * Pass the main value as the children.
 */
export declare const SignalField: React.FunctionComponent<ISignalFieldProps>;
