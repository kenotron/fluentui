import { IBaseFloatingPickerProps } from './BaseFloatingPicker.types';
import { BaseFloatingPicker } from './BaseFloatingPicker';
export interface ISimple {
    key: string;
    name: string;
}
export declare type TypedBaseFloatingPicker = BaseFloatingPicker<ISimple, IBaseFloatingPickerProps<ISimple>>;
