import * as React from 'react';
export interface CheckedState {
    checked?: boolean;
    defaultChecked?: boolean;
    onClick?: React.DOMAttributes<HTMLElement>['onClick'];
    role?: string;
    'aria-checked'?: React.AriaAttributes['aria-pressed'];
    'aria-pressed'?: React.AriaAttributes['aria-pressed'];
}
/**
 * The useToggle hook processes adds the correct toggled state and acccessibility as needed.
 * @param draftState - state to read and augment.
 */
export declare const useChecked: <TDraftState extends CheckedState>(draftState: TDraftState) => void;
