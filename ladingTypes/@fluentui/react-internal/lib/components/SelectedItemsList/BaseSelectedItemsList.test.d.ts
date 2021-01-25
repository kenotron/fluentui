import { IBaseSelectedItemsListProps } from './BaseSelectedItemsList.types';
import { BaseSelectedItemsList } from './BaseSelectedItemsList';
export interface ISimple {
    key: string;
    name: string;
}
export declare type TypedBaseSelectedItemsList = BaseSelectedItemsList<ISimple, IBaseSelectedItemsListProps<ISimple>>;
