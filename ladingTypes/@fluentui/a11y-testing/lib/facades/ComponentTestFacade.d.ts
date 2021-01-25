import * as React from 'react';
import { Props, PropValue, TestFacade } from '../types';
export declare class ComponentTestFacade implements TestFacade {
    private Component;
    private props;
    private actual;
    private renderedComponent;
    private onClickExecuted;
    constructor(Component: React.FC, props?: Props);
    slotExists(selector: string): boolean;
    attributeExists(selector: string, attributeName: string): boolean;
    attributeHasValue(selector: string, attributeName: string, value: PropValue): boolean;
    getAttributeValue: (selector: string, attributeName: string) => any;
    verifyOnclickExecution: (selector: string) => boolean;
    afterClick(selector: string): void;
    pressSpaceKey(selector: string): void;
    pressEnterKey(selector: string): void;
    forProps: (props: Props) => TestFacade;
    private _getElement;
}
