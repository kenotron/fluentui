import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { TextFieldPageProps as ExternalProps } from '@fluentui/react-examples/lib/react/TextField/TextField.doc';

const related = require('!raw-loader?esModule=false!@fluentui/public-docsite/src/pages/Controls/TextFieldPage/docs/TextFieldRelated.md') as string;

export const TextFieldPageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    related,
  },
};
