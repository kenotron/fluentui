import { task, series, nodeExecTask, webpackCliTask, preset, resolveCwd } from '@fluentui/scripts';

preset();

task(
  'mf',
  series(webpackCliTask({ webpackCliArgs: ['--config', 'webpack.mf.config.js', '--progress'] }), () => {
    const httpServer = resolveCwd('http-server/bin/http-server');
    return nodeExecTask({ args: [httpServer, '-p', '2345', './dist'] });
  }),
);
