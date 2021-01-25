import { Selection } from '../../../Utilities';
export interface IUseSelectedItemsResponse<T> {
    selectedItems: T[];
    setSelectedItems: (items: T[]) => void;
    addItems: (items: T[]) => void;
    dropItemsAt: (insertIndex: number, itemsToAdd: T[], indicesToRemove: number[]) => void;
    removeItemAt: (index: number) => void;
    removeItem: (item: T) => void;
    replaceItem: (itemToReplace: T, itemsToReplaceWith: T[]) => void;
    removeItems: (itemsToRemove: T[]) => void;
    removeSelectedItems: () => void;
    getSelectedItems: () => T[];
    hasSelectedItems: () => boolean;
    unselectAll: () => void;
}
export declare const useSelectedItems: <T extends {}>(selection: Selection<import("@fluentui/utilities/lib/selection/Selection.types").IObjectWithKey>, selectedItems?: T[] | undefined) => IUseSelectedItemsResponse<T>;
