import React from 'react';
import { View, Text, Pressable, Dimensions } from 'react-native';

import CustomText from '@components/common/customText';
import FilterChip from '@components/common/filterChip';

import Magnifier from '@assets/mainScreen/magnifier.svg';
import SearchBack from '@assets/mainScreen/headerBack.svg';

interface HeaderComponentProps {
  handleLayout: () => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ handleLayout }) => {
  const width = Dimensions.get('screen').width;

  return (
    <>
      <View className="relative">
        <SearchBack width={width} className="mx-[-20px] bg-light" />
        <View className="absolute z-10 w-full space-y-2.5 pb-8 pt-16">
          <CustomText className="text-h1 font-h1 text-[#FFFFFF]">
            팝업 공간과 지원공고를{'\n'}쉽고 빠르게.
          </CustomText>

          <Pressable className="flex flex-row items-center space-x-1 rounded-lg bg-[#FFFFFF] px-2 pb-3.5 pt-[13px]">
            <Magnifier />
            <CustomText className="text-medium_gray">원하시는 팝업 위치를 검색해보세요</CustomText>
          </Pressable>
        </View>
      </View>

      <View className="pb-2 pt-8">
        <CustomText className="text-sub1 font-sub1">대여 가능한 팝업 장소</CustomText>

        <View className="flex flex-row justify-between">
          <View className="flex flex-row py-4">
            <FilterChip title={'지역'} />
            <FilterChip title={'가격'} />
            <FilterChip title={'수용인원'} />
          </View>

          <Pressable onPress={handleLayout}>
            <Text>레이아웃 변경</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default HeaderComponent;
