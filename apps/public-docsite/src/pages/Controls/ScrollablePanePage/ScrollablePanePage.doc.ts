import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { ScrollablePanePageProps as ExternalProps } from '@fluentui/react-examples/lib/react/ScrollablePane/ScrollablePane.doc';

const related = require('!raw-loader?esModule=false!@fluentui/public-docsite/src/pages/Controls/ScrollablePanePage/docs/ScrollablePaneRelated.md') as string;

export const ScrollablePanePageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    related,
  },
};
