import { Props, Rule, Slot } from '../types';
export declare class SlotRule implements Rule {
    private data;
    constructor(name: string);
    forProps: (props: Props | Props[]) => this;
    afterClick: () => this;
    pressSpaceKey: () => this;
    pressEnterKey: () => this;
    verifyOnclickExecution: () => this;
    hasAttribute: (expectedAttribute: string, expectedValue?: any, overrideId?: boolean | undefined) => this;
    doesNotHaveAttribute: (expectedAttribute: string) => this;
    description: (description: string) => this;
    hide: () => this;
    getData: () => Slot;
    stringify: () => string;
    private _stringifyProps;
    private _expectedAttributeAndValueFormat;
}
export declare class BehaviorRule {
    static slot: (name: string) => SlotRule;
    static root: () => SlotRule;
}
