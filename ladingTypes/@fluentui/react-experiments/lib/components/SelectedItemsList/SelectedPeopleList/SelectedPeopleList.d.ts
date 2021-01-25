import * as React from 'react';
import { SelectedItemsList } from '../SelectedItemsList';
import { ISelectedItemsListProps, ISelectedItemsList, BaseSelectedItem } from '../SelectedItemsList.types';
import { IPersonaProps } from '@fluentui/react/lib/Persona';
export declare type ISelectedPeopleListProps<TPersona> = ISelectedItemsListProps<TPersona>;
export declare type ISelectedPeopleList<TPersona extends IPersonaProps & BaseSelectedItem = IPersonaProps> = ISelectedItemsList<TPersona>;
export declare type SelectedPeopleList<TPersona extends IPersonaProps & BaseSelectedItem = IPersonaProps> = SelectedItemsList<TPersona>;
export declare const SelectedPeopleList: React.ForwardRefExoticComponent<Pick<ISelectedPeopleListProps<IPersonaProps & BaseSelectedItem>, "onChange" | "componentRef" | "key" | "removeButtonAriaLabel" | "onRenderItem" | "selectedItems" | "defaultSelectedItems" | "dragDropEvents" | "dragDropHelper" | "createGenericItem" | "focusedItemIndices" | "getItemCopyText" | "onItemsRemoved" | "canRemoveItem" | "serializeItemsForDrag" | "deserializeItemsFromDrop" | "dropItemsAt" | "replaceItem" | "itemsAreEqual"> & React.RefAttributes<ISelectedPeopleList<IPersonaProps & BaseSelectedItem>>>;
