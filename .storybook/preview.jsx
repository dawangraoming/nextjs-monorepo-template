import React from 'react';
import { ResetCSS } from '../packages/uikit';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const globalDecorator = (Story, context) => (
  <>
    <ResetCSS />
    <Story {...context} />
  </>
);

export const decorators = [globalDecorator];
