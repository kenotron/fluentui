import * as React from 'react';
import { ISelectedItemsList, ISelectedItemsListProps, BaseSelectedItem } from './SelectedItemsList.types';
export declare type SelectedItemsList<TItem extends BaseSelectedItem> = React.Component<ISelectedItemsListProps<TItem>>;
export declare const SelectedItemsList: <TItem extends BaseSelectedItem>(props: ISelectedItemsListProps<TItem>, ref: React.Ref<ISelectedItemsList<TItem>>) => JSX.Element;
