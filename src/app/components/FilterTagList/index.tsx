import React from 'react';
import { TAG_LIST } from '@/app/components/FilterTagList/constant';
import { TagButton } from '@/components/TagButton';

interface FilterTagListProps {
  filterQuery: string;
  setFilterQuery: React.Dispatch<React.SetStateAction<string>>;
}
const FilterTagList: React.FC<FilterTagListProps> = ({
  filterQuery,
  setFilterQuery,
}) => {
  const onClick = (label: string) => () =>
    setFilterQuery(label === filterQuery ? '' : label);

  return TAG_LIST.map((label) => (
    <TagButton
      key={label}
      label={label}
      selected={label === filterQuery}
      onClick={onClick(label)}
    />
  ));
};

export const MemorizedFilterTagList = React.memo(FilterTagList);
