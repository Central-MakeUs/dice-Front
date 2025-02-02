import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { useFilteringStore } from '@zustands/filter/store';

const SortFilterComponent: React.FC = () => {
  const sortType = useFilteringStore((state) => state.filtering.sortType);
  const setSortType = useFilteringStore((state) => state.setSortType);

  const handleSortType = (newSortType: string) => {
    if (newSortType === sortType) {
      setSortType('');
    } else {
      setSortType(newSortType);
    }
  };

  return (
    <View className="space-y-6">
      <Text className="font-CAP1 text-CAP1 text-dark_gray">정렬</Text>
      <View className="space-y-1">
        {['인기 순', '가까운 순', '낮은 가격 순', '높은 가격 순'].map((item, index) => (
          <Pressable
            key={index}
            onPress={() => handleSortType(item)}
            className={`rounded-lg p-4 ${sortType === item ? 'bg-back_gray' : 'bg-white'}`}
          >
            <Text
              className={`font-SUB2 text-SUB2 ${
                sortType === item ? 'text-black' : 'text-medium_gray'
              }`}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default SortFilterComponent;
