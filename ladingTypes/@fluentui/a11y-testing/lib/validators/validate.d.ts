import { TestFacade } from '../types';
import { Rule } from './../types';
import { SlotRule } from './../rules/rules';
export declare const validateSlot: (rule: SlotRule, baseTestFacade: TestFacade) => void;
export declare const validateBehavior: (rules: Rule[], testFacade: TestFacade) => any[];
