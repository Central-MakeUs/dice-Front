import React from 'react';
import { View } from 'react-native';

import FilterChip from '@components/common/filterChip';

interface ChipContainerProps {
  chipList: string[];
  openModal: (text: string) => void;
}

const ChipContainer: React.FC<ChipContainerProps> = ({ chipList, openModal }) => {
  return (
    <View className="flex flex-row justify-between bg-white px-5">
      <View className="flex flex-row py-4">
        {/* <FilterChip title={'지역'} openModal={() => openModal('region')} />
        <FilterChip title={'가격'} openModal={() => openModal('price')} />
        <FilterChip title={'수용인원'} openModal={() => openModal('people')} />
        <FilterChip title={'인기순'} openModal={() => openModal('sort')} /> */}
        {chipList.map((chip, index) => (
          <FilterChip title={chip} key={index} openModal={() => openModal(chip)} />
        ))}
      </View>
    </View>
  );
};

export default ChipContainer;
