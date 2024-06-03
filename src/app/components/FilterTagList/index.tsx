import React from 'react';
import { TagButton } from '@/components/TagButton';

const TAG_LIST = [
  'sports',
  'news',
  'technology',
  'health',
  'finance',
  'education',
  'travel',
  'entertainment',
  'politics',
  'culture',
  'science',
  'environment',
  'business',
  'art',
  'lifestyle',
  'food',
  'game',
  'technology_trends',
  'automobile',
  'fashion',
  'movie',
] as const;

interface FilterTagListProps {
  filterQuery: string;
  setFilterQuery: React.Dispatch<React.SetStateAction<string>>;
}
const FilterTagList: React.FC<FilterTagListProps> = ({
  filterQuery,
  setFilterQuery,
}) => {
  return TAG_LIST.map((label) => (
    <TagButton
      key={label}
      label={label}
      selected={label === filterQuery}
      onClick={() => setFilterQuery(label)}
    />
  ));
};

export const MemorizedFilterTagList = React.memo(FilterTagList);
