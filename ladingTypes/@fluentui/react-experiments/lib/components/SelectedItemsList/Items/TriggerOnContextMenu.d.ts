import * as React from 'react';
import { TriggerProps } from './ItemTrigger.types';
import { ISelectedItemProps } from '../SelectedItemsList.types';
export declare const TriggerOnContextMenu: <T extends any>(ItemComponent: React.ComponentType<ISelectedItemProps<T>>) => (props: TriggerProps<T>) => JSX.Element;
