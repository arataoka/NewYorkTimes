import { Meta } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { WideArticleCard } from './index';

export default {
  title: 'Components/ArticleCard/Wide',
  component: WideArticleCard,
  args: {
    title: 'WideArticleCard',
    description: 'This is a large article card.',
    imageUrl: 'https://via.placeholder.com/830x450',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    imageUrl: { control: 'text' },
  },
} as Meta<typeof WideArticleCard>;

export const Wide: (
  args: React.ComponentProps<typeof WideArticleCard>
) => React.JSX.Element = (args: ComponentProps<typeof WideArticleCard>) => (
  <div style={{ width: '600px' }}>
    <WideArticleCard {...args} />
  </div>
);
