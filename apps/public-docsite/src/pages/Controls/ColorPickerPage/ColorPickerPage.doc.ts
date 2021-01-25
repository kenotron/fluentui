import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { ColorPickerPageProps as ExternalProps } from '@fluentui/react-examples/lib/react/ColorPicker/ColorPicker.doc';

const related = require('!raw-loader?esModule=false!@fluentui/public-docsite/src/pages/Controls/ColorPickerPage/docs/ColorPickerRelated.md') as string;

export const ColorPickerPageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    related,
  },
};
