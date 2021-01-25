import * as React from 'react';
import { ISelectedItemProps } from '../SelectedItemsList.types';
import { ItemCanDispatchTrigger } from './ItemTrigger.types';
export declare type EditingItemComponentProps<T> = {
    item: T;
    onEditingComplete: (oldItem: T, newItem: T) => void;
    onDismiss?: () => void;
    createGenericItem?: (input: string) => T;
};
/**
 * Parameters to the EditingItem higher-order component
 */
export declare type EditableItemProps<T> = {
    itemComponent: ItemCanDispatchTrigger<T>;
    editingItemComponent: React.ComponentType<EditingItemComponentProps<T>>;
};
export declare const EditableItem: <T extends any>(editableItemProps: EditableItemProps<T>) => React.ComponentType<ISelectedItemProps<T>>;
