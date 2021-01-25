import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { CalloutPageProps as ExternalProps } from '@fluentui/react-examples/lib/react/Callout/Callout.doc';

const related = require('!raw-loader?esModule=false!@fluentui/public-docsite/src/pages/Controls/CalloutPage/docs/CalloutRelated.md') as string;

export const CalloutPageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    related,
  },
};
