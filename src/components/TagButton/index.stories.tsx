import { Meta } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { TagButton } from './index';

export default {
  title: 'Components/TagButton',
  component: TagButton,
  args: {
    label: 'sports',
    onClick: () => ({}),
    selected: false,
  },
  argTypes: {
    label: { control: 'text' },
    selected: { control: 'boolean' },
  },
} as Meta<typeof TagButton>;

export const Default: (
  args: React.ComponentProps<typeof TagButton>
) => React.JSX.Element = (args: ComponentProps<typeof TagButton>) => (
  <div style={{ width: '200px' }}>
    <TagButton {...args} />
    <TagButton {...args} selected />
  </div>
);
