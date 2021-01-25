import { ApiItem } from '@microsoft/api-extractor-model';
import { ITableJson } from './types';
import { ICollectedData } from './types-private';
export declare function createTableJson(collectedData: ICollectedData, apiItem: ApiItem): ITableJson | undefined;
