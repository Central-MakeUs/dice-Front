import React from 'react';
import { Text, View, Pressable, Dimensions } from 'react-native';

import Magnifier from '@assets/popUp/magnifier.svg';
import RecruitBanner from '@assets/recruit/recruit-banner.svg';

export default function RecruitHeaderComponent() {
  const width = Dimensions.get('screen').width;

  return (
    <View className="relative bg-light px-5 pb-8 pt-16">
      {/* TODO: 이미지 변경 필요 */}
      <RecruitBanner width={width} className="absolute" />
      <View className="relative z-10 w-full space-y-2.5 ">
        <Text className="font-H1 text-H1 text-[#FFFFFF]">
          모든 지원 공고는{'\n'}여기 다이스에서.
        </Text>
        <Pressable className="flex flex-row items-center space-x-1 rounded-lg bg-white pb-3.5 pl-[13px] pr-2 pt-[13px]">
          <Magnifier />
          <Text className="text-medium_gray">찾는 지역이나 지하철역으로 검색해보세요</Text>
        </Pressable>
      </View>
    </View>
  );
}
