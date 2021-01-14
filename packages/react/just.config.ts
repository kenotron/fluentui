import { task, webpackCliTask, preset } from '@fluentui/scripts';

preset();

task('mf', webpackCliTask({ webpackCliArgs: ['--config', 'webpack.mf.config.js'] }));
