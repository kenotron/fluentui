import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { TeachingBubblePageProps as ExternalProps } from '@fluentui/react-examples/lib/react/TeachingBubble/TeachingBubble.doc';

const related = require('!raw-loader?esModule=false!@fluentui/public-docsite/src/pages/Controls/TeachingBubblePage/docs/TeachingBubbleRelated.md') as string;
// const componentUrl =
//   'https://github.com/microsoft/fluentui/tree/master/apps/public-docsite/src/pages/Controls/TeachingBubblePage';

export const TeachingBubblePageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    related,
  },
};
