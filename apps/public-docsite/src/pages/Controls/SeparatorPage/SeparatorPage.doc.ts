import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { SeparatorPageProps as ExternalProps } from '@fluentui/react-examples/lib/react/Separator/Separator.doc';

const related = require('!raw-loader?esModule=false!@fluentui/public-docsite/src/pages/Controls/SeparatorPage/docs/SeparatorRelated.md') as string;
const componentUrl =
  'https://github.com/microsoft/fluentui/tree/master/apps/public-docsite/src/pages/Controls/SeparatorPage';

export const SeparatorPageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    related,
  },
  ios: {
    overview: require('!raw-loader?esModule=false!@fluentui/public-docsite/src/pages/Controls/SeparatorPage/docs/ios/SeparatorOverview.md') as string,
    related,
    componentUrl,
  },
  android: {
    overview: require('!raw-loader?esModule=false!@fluentui/public-docsite/src/pages/Controls/SeparatorPage/docs/android/SeparatorOverview.md') as string,
    related,
    componentUrl,
  },
  mac: {
    overview: require('!raw-loader?esModule=false!@fluentui/public-docsite/src/pages/Controls/SeparatorPage/docs/mac/SeparatorOverview.md') as string,
    usage: require('!raw-loader?esModule=false!@fluentui/public-docsite/src/pages/Controls/SeparatorPage/docs/mac/SeparatorUsage.md') as string,

    related,
    componentUrl,
  },
  cross: {
    overview: require('!raw-loader?esModule=false!@fluentui/public-docsite/src/pages/Controls/SeparatorPage/docs/cross/SeparatorOverview.md') as string,
    usage: require('!raw-loader?esModule=false!@fluentui/public-docsite/src/pages/Controls/SeparatorPage/docs/cross/SeparatorUsage.md') as string,
    related,
    componentUrl,
  },
};
