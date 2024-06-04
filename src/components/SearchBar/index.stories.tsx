import { Meta } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { MemorizedSearchBar } from './index';

export default {
  title: 'Components/MemorizedSearchBar',
  component: MemorizedSearchBar,
  args: {
    setSearchQuery: () => ({}),
    searchQuery: '',
  },
} as Meta<typeof MemorizedSearchBar>;

export const Default: (
  args: React.ComponentProps<typeof MemorizedSearchBar>
) => React.JSX.Element = (args: ComponentProps<typeof MemorizedSearchBar>) => (
  <div style={{ width: '500px' }}>
    <MemorizedSearchBar {...args} />
  </div>
);
