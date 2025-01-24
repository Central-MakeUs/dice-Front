import RangeSlider from 'rn-range-slider';
import { Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { useFilteringStore } from '@zustands/filter/store';

import ThumbIcon from '@assets/thumb.svg';

const PriceFilterComponent: React.FC = () => {
  const price = useFilteringStore((state) => state.filtering.price);
  const setMinPrice = useFilteringStore((state) => state.setMinPrice);
  const setMaxPrice = useFilteringStore((state) => state.setMaxPrice);

  const handleValue = useCallback(
    (low: number, high: number) => {
      setMinPrice(low);
      setMaxPrice(high);
    },
    [setMinPrice, setMaxPrice],
  );

  const formatPrice = (value: number) => {
    if (value >= 10000) {
      return (
        <Text className="font-SUB1 text-SUB1 text-black">
          <Text className="text-purple">{value / 10000}</Text>만원
        </Text>
      );
    }
    return (
      <Text className="font-SUB1 text-SUB1 text-black">
        <Text className="text-purple">{value}</Text>원
      </Text>
    );
  };

  return (
    <View className="space-y-6">
      <Text className="font-CAP1 text-CAP1 text-dark_gray">가격</Text>
      <View className="space-y-8">
        <View className="flex flex-row items-center space-x-2">
          <Text className="rounded-full border border-stroke bg-back_gray px-3 py-[5.5px] font-BTN1 text-BTN1 text-deep_gray">
            1일 대여
          </Text>
          <Text className="flex flex-row items-center font-SUB1 text-SUB1">
            {formatPrice(price.minPrice)} ~ {formatPrice(price.maxPrice)}
          </Text>
        </View>
      </View>

      <View className="space-y-0.5" onTouchEnd={(e) => e.stopPropagation()}>
        <RangeSlider
          // 범위의 최솟값
          min={0}
          // 범위의 최댓값
          max={300000}
          // 범위가 증가/감소하는 단계
          step={50000}
          // 사용자가 지정한 최솟값
          low={price.minPrice}
          // 사용자가 지정한 최댓값
          high={price.maxPrice}
          // 슬라이더의 버튼
          renderThumb={() => <ThumbIcon />}
          // 슬라이더의 줄 (선택 X)
          renderRail={() => <View className="h-1 bg-back_gray" />}
          // 슬라이더의 줄 (선택 O)
          renderRailSelected={() => <View className="h-1 bg-black" />}
          // 값 변경 메서드
          onValueChanged={handleValue}
        />
        <View className="flex flex-row justify-between">
          <Text className="font-CAP1 text-CAP1 text-light_gray">0원</Text>
          <Text className="font-CAP1 text-CAP1 text-light_gray">15만원</Text>
          <Text className="font-CAP1 text-CAP1 text-light_gray">30만원</Text>
        </View>
      </View>
    </View>
  );
};

export default PriceFilterComponent;
