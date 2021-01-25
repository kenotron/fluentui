import * as React from 'react';
import { ISelectedItemProps } from '../SelectedItemsList.types';
export declare type TriggerProps<T> = ISelectedItemProps<T> & {
    onTrigger?: () => void;
};
export declare type Item<T> = React.ComponentType<ISelectedItemProps<T>>;
export declare type ItemCanDispatchTrigger<T> = React.ComponentType<TriggerProps<T>>;
