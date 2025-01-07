import React from 'react';
import { Pressable } from 'react-native';

import CustomText from './customText';

import DownArrow from '@assets/downArrow.svg';

interface FilterChipProps {
  title: string;
}

const FilterChip: React.FC<FilterChipProps> = ({ title }) => {
  return (
    <Pressable className="mr-1.5 flex flex-row space-x-0.5 rounded-2xl bg-[#F4F4F4] p-2 pl-3">
      <CustomText className="text-btn1 font-btn1 text-deep_gray">{title}</CustomText>
      <DownArrow />
    </Pressable>
  );
};

export default FilterChip;
