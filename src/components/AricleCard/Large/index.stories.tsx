import { Meta } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { LargeArticleCard } from './index';

export default {
  title: 'Components/ArticleCard/Large',
  component: LargeArticleCard,
  args: {
    title: 'LargeArticleCard',
    description: 'This is a large article card.',
    imageUrl: 'https://via.placeholder.com/830x450',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    imageUrl: { control: 'text' },
  },
} as Meta<typeof LargeArticleCard>;

export const Large: (
  args: React.ComponentProps<typeof LargeArticleCard>
) => React.JSX.Element = (args: ComponentProps<typeof LargeArticleCard>) => (
  <div style={{ width: '900px' }}>
    <LargeArticleCard {...args} />
  </div>
);
