import path from 'path';
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  webpackFinal: async (baseConfig) => {
    if (baseConfig.resolve && baseConfig.resolve.modules) {
      baseConfig.resolve.modules = [
        ...baseConfig.resolve.modules,
        path.resolve(__dirname, '../'),
      ];
    } else {
      baseConfig.resolve = {
        modules: [path.resolve(__dirname, '../')],
      };
    }
    return baseConfig;
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
};

export default config;
