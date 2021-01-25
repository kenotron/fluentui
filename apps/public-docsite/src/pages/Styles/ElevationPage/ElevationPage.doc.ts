import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';

const title = 'Elevation';
const related = require('!raw-loader?esModule=false!@fluentui/public-docsite/src/pages/Styles/ElevationPage/docs/ElevationRelated.md') as string;
const componentUrl =
  'https://github.com/microsoft/fluentui/tree/master/apps/public-docsite/src/pages/Styles/ElevationPage';

export const ElevationPageProps: TFabricPlatformPageProps = {
  web: {
    title,
    related,
    componentUrl,
  },
};

export const depthUsage = [
  {
    level: '4',
    usage: ['Cards', 'Grid item thumbnails'],
  },
  {
    level: '8',
    usage: ['Command bars', 'Command dropdowns', 'Context menus'],
  },
  {
    level: '16',
    usage: ['Teaching callouts', 'Search results dropdown', 'Hover cards', 'Tooltips'],
  },
  {
    level: '64',
    usage: ['Panels', 'Pop up dialogs'],
  },
];
