import React from 'react';
import { View } from 'react-native';

import FilterChip from '@components/common/filterChip';

const ChipContainer: React.FC = () => {
  return (
    <View className="flex flex-row justify-between bg-white px-5">
      <View className="flex flex-row py-4">
        <FilterChip title={'지역'} />
        <FilterChip title={'가격'} />
        <FilterChip title={'수용인원'} />
        <FilterChip title={'인기순'} />
      </View>
    </View>
  );
};

export default ChipContainer;
