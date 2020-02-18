import { configure } from '@storybook/react';

configure(require.context('../src/client/components/stories', true, /\.stories\.js$/), module);