import { Meta } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { SearchBar } from './index';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  args: {
    setSearchQuery: () => ({}),
    searchQuery: { q: '' },
  },
} as Meta<typeof SearchBar>;

export const Default: (
  args: React.ComponentProps<typeof SearchBar>
) => React.JSX.Element = (args: ComponentProps<typeof SearchBar>) => (
  <div style={{ width: '200px' }}>
    <SearchBar {...args} />
  </div>
);
