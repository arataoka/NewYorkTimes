import { Meta } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { MediumArticleCard } from './index';

export default {
  title: 'Components/ArticleCard/Medium',
  component: MediumArticleCard,
  args: {
    title: 'MediumArticleCard',
    description: 'This is a large article card.',
    imageUrl: 'https://via.placeholder.com/830x450',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    imageUrl: { control: 'text' },
  },
} as Meta<typeof MediumArticleCard>;

export const Medium: (
  args: React.ComponentProps<typeof MediumArticleCard>
) => React.JSX.Element = (args: ComponentProps<typeof MediumArticleCard>) => (
  <div style={{ width: '600px' }}>
    <MediumArticleCard {...args} />
  </div>
);
