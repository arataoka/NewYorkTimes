import { Meta } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { EllipsisText } from './index';

export default {
  title: 'Components/EllipsisText',
  component: EllipsisText,
  args: {
    text: 'EllipsisText',
    line: 3,
  },
  argTypes: {
    text: { control: 'text' },
    line: { control: 'number' },
  },
} as Meta<typeof EllipsisText>;

export const Default: (
  args: React.ComponentProps<typeof EllipsisText>
) => React.JSX.Element = (args: ComponentProps<typeof EllipsisText>) => (
  <div style={{ width: '200px' }}>
    <EllipsisText {...args} />
  </div>
);
