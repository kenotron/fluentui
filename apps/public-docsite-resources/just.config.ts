import { preset, task, webpackDevServerTask } from '@fluentui/scripts';

preset();

task('dev', webpackDevServerTask());
