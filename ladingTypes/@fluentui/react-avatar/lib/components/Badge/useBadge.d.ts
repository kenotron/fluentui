import * as React from 'react';
import { BadgeProps } from './Badge.types';
export declare const badgeShorthandProps: (keyof BadgeProps)[];
export declare const useBadge: (props: BadgeProps, ref: React.Ref<HTMLElement>, defaultProps?: BadgeProps | undefined) => Record<string, any>;
