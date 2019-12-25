import { configure } from '@storybook/react';

configure(require.context('../src/client/', true, /\.stories\.js$/), module);