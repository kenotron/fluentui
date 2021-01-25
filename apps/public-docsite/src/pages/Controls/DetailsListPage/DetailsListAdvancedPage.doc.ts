import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { DetailsListAdvancedPageProps as ExternalProps } from '@fluentui/react-examples/lib/react/DetailsList/DetailsList.doc';

const related = require('!raw-loader?esModule=false!@fluentui/public-docsite/src/pages/Controls/DetailsListPage/docs/DetailsListRelated.md') as string;

export const DetailsListAdvancedPageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    title: 'DetailsList - Variable Row Heights',
    related,
  },
};
