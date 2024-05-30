import { Meta } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { SmallArticleCard } from './index';

export default {
  title: 'Components/ArticleCard/Small',
  component: SmallArticleCard,
  args: {
    title: 'SmallArticleCard',
    description: 'This is a Small article card.',
    imageUrl: 'https://via.placeholder.com/830x450',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    imageUrl: { control: 'text' },
  },
} as Meta<typeof SmallArticleCard>;

export const Small: (
  args: React.ComponentProps<typeof SmallArticleCard>
) => React.JSX.Element = (args: ComponentProps<typeof SmallArticleCard>) => (
  <div style={{ width: '200px' }}>
    <SmallArticleCard {...args} />
  </div>
);
