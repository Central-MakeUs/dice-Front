import React from 'react';
import { Text, View, Pressable, Dimensions } from 'react-native';

import Magnifier from '@assets/popUp/magnifier.svg';
import HeaderBack from '@assets/popUp/headerBack.svg';
export default function RecruitHeaderComponent() {
  const width = Dimensions.get('screen').width;

  return (
    <View className="relative bg-light px-5 pb-8 pt-16">
      <HeaderBack width={width} className="absolute" />
      <View className="relative z-10 w-full space-y-2.5 ">
        <Text className="font-H1 text-H1 text-[#FFFFFF]">
          저렴한 팝업 공간은{'\n'}쉽게 다이스에서.
        </Text>

        <Pressable className="flex flex-row items-center space-x-1 rounded-lg bg-white pb-3.5 pl-[13px] pr-2 pt-[13px]">
          <Magnifier />
          <Text className="text-medium_gray">찾는 지역이나 지하철역으로 검색해보세요</Text>
        </Pressable>
      </View>
    </View>
  );
}
