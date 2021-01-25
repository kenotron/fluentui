import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { FocusZonePageProps as ExternalProps } from '@fluentui/react-examples/lib/react-focus/FocusZone/FocusZone.doc';

const related = require('!raw-loader?esModule=false!@fluentui/public-docsite/src/pages/Controls/FocusZonePage/docs/FocusZoneRelated.md') as string;

export const FocusZonePageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    related,
  },
};
