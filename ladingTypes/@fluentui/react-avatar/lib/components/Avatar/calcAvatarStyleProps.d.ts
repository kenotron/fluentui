import { AvatarSizeValue, AvatarTokenSet } from './Avatar.types';
/**
 * Additional state properties needed by Avatar's styling
 */
export interface AvatarStyleProps {
    size?: AvatarSizeValue;
    tokens?: AvatarTokenSet;
    inactive?: boolean;
    activeRing?: boolean;
    activeShadow?: boolean;
    activeGlow?: boolean;
}
/**
 * Updates Avatar's state object with style-specific properties
 */
export declare const calcAvatarStyleProps: (state: Readonly<import("./Avatar.types").AvatarProps>) => AvatarStyleProps;
