import React from 'react';
import { View, Text, Pressable, Dimensions } from 'react-native';

import FilterChip from '@components/common/filterChip';

import Magnifier from '@assets/popUp/magnifier.svg';
import HeaderBack from '@assets/popUp/headerBack.svg';

interface HeaderComponentProps {
  handleLayout: () => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = () =>
  //{ handleLayout }
  {
    const width = Dimensions.get('screen').width;

    return (
      <View>
        <View className="relative bg-light px-5 pb-8 pt-16">
          <HeaderBack width={width} className="absolute" />
          <View className="relative z-10 w-full space-y-2.5 ">
            <Text className="font-H1 text-H1 text-[#FFFFFF]">
              팝업 공간과 지원공고를{'\n'}쉽고 빠르게.
            </Text>

            <Pressable className="flex flex-row items-center space-x-1 rounded-lg bg-white pb-3.5 pl-[13px] pr-2 pt-[13px]">
              <Magnifier />
              <Text className="text-medium_gray">원하시는 팝업 위치를 검색해보세요</Text>
            </Pressable>
          </View>
        </View>

        <View className="px-5 pt-8">
          <Text className="font-H2 text-H2">대여 가능한 팝업 장소</Text>

          <View className="flex flex-row justify-between">
            <View className="flex flex-row py-4">
              <FilterChip title={'지역'} />
              <FilterChip title={'가격'} />
              <FilterChip title={'수용인원'} />
              <FilterChip title={'인기순'} />
            </View>

            {/* <Pressable onPress={handleLayout}>
            <Text>레이아웃 변경</Text>
          </Pressable> */}
          </View>
        </View>
      </View>
    );
  };

export default HeaderComponent;
