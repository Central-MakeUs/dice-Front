import React from 'react';
import { View } from 'react-native';

import FilterChip from '@components/common/filterChip';

type ChipContainerProps = {
  chipList: string[];
};

const ChipContainer: React.FC<ChipContainerProps> = ({ chipList }: ChipContainerProps) => {
  return (
    <View className="flex flex-row justify-between bg-white px-5">
      <View className="flex flex-row py-4">
        {chipList.map((chip, index) => (
          <FilterChip title={chip} key={index} />
        ))}
      </View>
    </View>
  );
};

export default ChipContainer;
