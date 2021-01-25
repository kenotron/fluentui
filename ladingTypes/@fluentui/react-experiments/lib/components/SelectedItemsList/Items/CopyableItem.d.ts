import * as React from 'react';
import { ISelectedItemProps } from '../SelectedItemsList.types';
declare type CopyableItemWrappedComponent<T> = React.ComponentType<ISelectedItemProps<T>>;
/**
 * Parameters to the EditingItem higher-order component
 */
export declare type CopyableItemProps<T> = {
    itemComponent: CopyableItemWrappedComponent<T>;
    getCopyItemText: (items: T[]) => string;
};
export declare const CopyableItem: <T extends any>(copyableItemProps: CopyableItemProps<T>) => React.ComponentType<ISelectedItemProps<T>>;
export {};
