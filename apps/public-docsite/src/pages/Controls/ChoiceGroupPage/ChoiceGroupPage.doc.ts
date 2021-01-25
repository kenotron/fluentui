import { ChoiceGroupPageProps as ExternalProps } from '@fluentui/react-examples/lib/react/ChoiceGroup/ChoiceGroup.doc';
import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';

const related = require('!raw-loader?esModule=false!@fluentui/public-docsite/src/pages/Controls/ChoiceGroupPage/docs/ChoiceGroupRelated.md') as string;

export const ChoiceGroupPageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    related,
  },
};
