/*!
 * Copyright (C) Microsoft Corporation. All rights reserved.
 */
import * as React from 'react';
import './Accordion.scss';
import { IAccordion, IAccordionProps } from './Accordion.types';
export interface IAccordionState {
    isContentVisible?: boolean | undefined;
}
export declare class Accordion extends React.Component<IAccordionProps, IAccordionState> implements IAccordion {
    constructor(props: IAccordionProps);
    componentDidUpdate(prevProps: IAccordionProps, prevState: IAccordionState): void;
    render(): JSX.Element;
    toggleState: () => void;
}
