import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';

import CustomPressable from '@components/common/customPressable';

import { MainScreenProps } from '@type/stack/type';

import LikeIcon from '@assets/mainScreen/like.svg';

interface CardComponentProps {
  storeData: {
    id: number;
    thumbnail: string;
    cityName: string;
    neighborhoodName: string;
    name: string;
    area: number;
    numOfPeople: number;
    price: number;
    isLiked: boolean;
  };
  navigation: MainScreenProps['navigation'];
}

const CardComponent: React.FC<CardComponentProps> = ({ storeData, navigation }) => {
  const toDetail = () => {
    navigation.navigate('DetailScreen', { id: storeData.id });
  };

  return (
    <CustomPressable onPress={toDetail} disabled={false}>
      <View className="rounded-lg border border-[#EEEEEE] bg-white">
        <Image source={{ uri: storeData.thumbnail }} className="aspect-[2/1] rounded-t-lg" />

        <View className="flex flex-row items-start justify-between p-4 pr-0">
          <View className="space-y-4">
            <View className="space-y-1">
              <Text className="text-cap1 font-cap1 text-[#AAAAAA]">
                {storeData.cityName} · {storeData.neighborhoodName}
              </Text>

              <Text className="text-sub2 font-sub2 text-black">{storeData.name}</Text>

              <Text className="text-cap2 font-cap2 text-medium_gray">
                {storeData.area}m² · {storeData.numOfPeople}명 수용 가능
              </Text>
            </View>

            <View>
              <Text className="text-lg font-medium text-deep_gray">
                1일 대여{' '}
                <Text className="text-sub1 font-sub1 text-purple">
                  {storeData.price.toLocaleString()}원
                </Text>
              </Text>
            </View>
          </View>

          <Pressable className="mt-1.5 border p-3">
            <LikeIcon />
          </Pressable>
        </View>
      </View>
    </CustomPressable>
  );
};

export default CardComponent;
