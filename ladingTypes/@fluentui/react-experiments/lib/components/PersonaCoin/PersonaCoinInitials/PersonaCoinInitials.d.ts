import * as React from 'react';
import { ISlotProp } from '@fluentui/foundation-legacy';
import { IPersonaCoinProps } from '../PersonaCoin.types';
export declare type IPersonaCoinInitialsSlot = ISlotProp<IPersonaCoinInitialsProps, string>;
export interface IPersonaCoinInitialsProps {
    initials: IPersonaCoinProps['initials'];
    text: IPersonaCoinProps['text'];
    allowPhoneInitials: IPersonaCoinProps['allowPhoneInitials'];
    className?: string;
}
export declare const PersonaCoinInitials: React.FunctionComponent<IPersonaCoinInitialsProps>;
