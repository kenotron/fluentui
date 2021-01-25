import * as React from 'react';
import { IContextualMenuItem } from '@fluentui/react/lib/ContextualMenu';
import { ItemCanDispatchTrigger } from './ItemTrigger.types';
/**
 * Parameters to the EditingItem higher-order component
 */
export declare type ItemWithContextMenuProps<T> = {
    itemComponent: ItemCanDispatchTrigger<T>;
    menuItems: (item: T, onTrigger?: () => void) => IContextualMenuItem[];
};
export declare const ItemWithContextMenu: <T extends any>(itemWithContextMenuProps: ItemWithContextMenuProps<T>) => React.ComponentType<import("./ItemTrigger.types").TriggerProps<T>>;
