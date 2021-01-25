import { IUnifiedPickerProps } from '../UnifiedPicker.types';
import { IPersonaProps } from '@fluentui/react/lib/Persona';
export declare type IUnifiedPeoplePickerProps = Omit<IUnifiedPickerProps<IPersonaProps>, 'onRenderSelectedItems' | 'onRenderFloatingSuggestions'>;
