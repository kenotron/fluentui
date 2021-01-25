import * as React from 'react';
import { AvatarProps } from './Avatar.types';
export declare const avatarShorthandProps: (keyof AvatarProps)[];
export declare const useAvatar: (props: AvatarProps, ref: React.Ref<HTMLElement>, defaultProps?: AvatarProps | undefined) => Record<string, any>;
