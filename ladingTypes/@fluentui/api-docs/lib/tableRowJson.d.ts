import { ApiDeclaredItem, ApiItem } from '@microsoft/api-extractor-model';
import { ICollectedData } from './types-private';
import { ITableRowJson, IEnumTableRowJson } from './types';
export declare function createTableRowJson(collectedData: ICollectedData, apiItem: ApiItem): ITableRowJson | undefined;
export declare function createEnumTableRowJson(collectedData: ICollectedData, apiItem: ApiDeclaredItem & {
    name?: string;
}): IEnumTableRowJson;
