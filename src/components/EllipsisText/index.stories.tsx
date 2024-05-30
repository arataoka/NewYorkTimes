import { Meta } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { EllipsisText } from './index';

export default {
  title: 'Components/EllipsisText',
  component: EllipsisText,
  args: {
    title: 'EllipsisText',
    description: 'This is a Small article card.',
    imageUrl: 'https://via.placeholder.com/830x450',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'number' },
  },
} as Meta<typeof EllipsisText>;

export const Default: (
  args: React.ComponentProps<typeof EllipsisText>
) => React.JSX.Element = (args: ComponentProps<typeof EllipsisText>) => (
  <div style={{ width: '200px' }}>
    <EllipsisText {...args} />
  </div>
);
