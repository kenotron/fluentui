import * as React from 'react';
import { IObjectWithKey } from '@fluentui/react/lib/Selection';
import { IStaticListProps } from './StaticList.types';
export declare class StaticList<TItem extends IObjectWithKey> extends React.Component<IStaticListProps<TItem>> {
    render(): JSX.Element;
}
