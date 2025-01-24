import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { useFilteringStore } from '@zustands/filter/store';

import { regionItems } from './regionData';

const RegionFilterComponent = () => {
  const region = useFilteringStore((state) => state.filtering.region);
  const setRegion = useFilteringStore((state) => state.setRegion);

  const handleRegionChange = (newRegion: string) => {
    if (region.region === newRegion) {
      setRegion('', []);
    } else {
      setRegion(newRegion, []);
    }
  };

  const handleDetailRegion = (newDetail: string) => {
    const updatedDetails = region.detail.includes(newDetail)
      ? region.detail.filter((item) => item !== newDetail)
      : [...region.detail, newDetail];

    setRegion(region.region, updatedDetails);
  };

  return (
    <View className="space-y-6">
      <Text className="font-CAP1 text-CAP1 text-dark_gray">지역</Text>
      <View className="flex flex-row gap-x-1.5">
        {regionItems.map((item) => (
          <Pressable
            key={item.title}
            onPress={() => handleRegionChange(item.title)}
            className={`rounded-full border border-stroke px-3 py-[5.5px] ${
              region.region === item.title && 'bg-black'
            }`}
          >
            <Text
              className={`${
                region.region === item.title ? 'text-white' : 'text-deep_gray'
              } font-BTN1 text-BTN1`}
            >
              {item.title}
            </Text>
          </Pressable>
        ))}
      </View>

      {region.region && region.region !== '전국' && (
        <View className="rounded-lg bg-back_gray p-4">
          <View className="flex flex-row flex-wrap gap-x-1.5 gap-y-2">
            {regionItems
              .find((item) => item.title === region.region)
              ?.item?.map((subItem, index) => (
                <Pressable
                  key={index}
                  onPress={() => handleDetailRegion(subItem)}
                  className={`rounded border bg-white px-2.5 py-[9px] ${
                    region.detail?.includes(subItem) ? 'border-purple' : 'border-stroke'
                  }`}
                >
                  <Text
                    className={`font-BTN2 text-BTN2 ${
                      region.detail?.includes(subItem) ? 'text-purple' : 'text-deep_gray'
                    }`}
                  >
                    {subItem}
                  </Text>
                </Pressable>
              ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default RegionFilterComponent;
