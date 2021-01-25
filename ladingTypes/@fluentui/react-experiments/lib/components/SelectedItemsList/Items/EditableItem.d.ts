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
    /**
     * Component to render when item is in normal state
     */
    itemComponent: ItemCanDispatchTrigger<T>;
    /**
     * Component to render when item is in editing state
     */
    editingItemComponent: React.ComponentType<EditingItemComponentProps<T>>;
    /**
     * Returns editing state (boolean) of the item
     */
    getIsEditing: (item: T, index: number) => boolean;
    /**
     * Callback when editing should be started. The controlling component should ensure
     * the item is marked as being edited
     */
    onEditingStarted: (item: T, index: number) => void;
    /**
     * Callback when editing is finished. The controlling component should ensure
     * the item is marked as being not edited
     */
    onEditingCompleted: (item: T, index: number) => void;
    /**
     * Callback when editing is cancelled/dismissed
     */
    onEditingDismissed?: (item: T, index: number) => void;
    /**
     * Callback for a click on the normal state item component
     */
    onClick?: (ev: React.MouseEvent<HTMLElement>, item: T, index: number) => void;
};
export declare const EditableItem: <T extends unknown>(editableItemProps: EditableItemProps<T>) => React.ComponentType<ISelectedItemProps<T>>;
