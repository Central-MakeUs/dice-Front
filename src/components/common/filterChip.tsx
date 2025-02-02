import React from 'react';
import { Text, Pressable } from 'react-native';

import DownArrow from '@assets/downArrow.svg';

interface FilterChipProps {
  title: string;
  openModal: () => void;
}

const FilterChip: React.FC<FilterChipProps> = ({ title, openModal }) => {
  return (
    <Pressable
      onPress={openModal}
      className="mr-1.5 flex flex-row space-x-0.5 rounded-2xl border border-stroke bg-back_gray p-2 pl-3"
    >
      <Text className="font-BTN1 text-BTN1 text-deep_gray">{title}</Text>
      <DownArrow />
    </Pressable>
  );
};

export default FilterChip;
