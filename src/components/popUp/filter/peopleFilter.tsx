import RangeSlider from 'rn-range-slider';
import { Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { useFilteringStore } from '@zustands/filter/store';

import ThumbIcon from '@assets/thumb.svg';

const PeopleFilterComponent: React.FC = () => {
  const numOfPeople = useFilteringStore((state) => state.filtering.numOfPeople);
  const setMinNumOfPeople = useFilteringStore((state) => state.setMinNumOfPeople);
  const setMaxNumOfPeople = useFilteringStore((state) => state.setMaxNumOfPeople);

  const handleValue = useCallback((low: number, high: number) => {
    setMinNumOfPeople(low);
    setMaxNumOfPeople(high);
  }, []);

  return (
    <View className="space-y-6">
      <Text className="font-CAP1 text-CAP1 text-dark_gray">수용인원</Text>
      <View className="space-y-8">
        <View>
          <Text>최대 0명 수용 가능</Text>
        </View>
      </View>

      <View className="space-y-0.5">
        <RangeSlider
          disableRange={true}
          // 범위의 최솟값
          min={0}
          // 범위의 최댓값
          max={100}
          // 범위가 증가/감소하는 단계
          step={5}
          // 사용자가 지정한 최솟값
          low={numOfPeople.minNumOfPeople}
          // 사용자가 지정한 최댓값
          high={numOfPeople.maxNumOfPeople}
          // 슬라이더의 버튼
          renderThumb={() => <ThumbIcon />}
          // 슬라이더의 줄 (선택 X)
          renderRail={() => <View className="h-1 bg-back_gray" />}
          // 슬라이더의 줄 (선택 O)
          renderRailSelected={() => <View className="h-1 bg-black" />}
          // 값 변경 메서드
          onValueChanged={handleValue}
        />
        <View className="flex flex-row items-center justify-between">
          <Text className="font-CAP1 text-CAP1 text-light_gray">0명</Text>
          <Text className="font-CAP1 text-CAP1 text-light_gray">50명</Text>
          <Text className="font-CAP1 text-CAP1 text-light_gray">100명</Text>
        </View>
      </View>
    </View>
  );
};

export default PeopleFilterComponent;
