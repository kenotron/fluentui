/** @jsx withSlots */
import * as React from 'react';
import { ICollapsibleSectionProps } from '../../CollapsibleSection';
import { IAccordionProps } from './Accordion.types';
export declare const Accordion: React.FunctionComponent<IAccordionProps> & {
    Item: React.FunctionComponent<ICollapsibleSectionProps>;
};
export default Accordion;
