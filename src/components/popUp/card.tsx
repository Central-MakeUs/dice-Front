import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';

import CustomPressable from '@components/common/customPressable';

import { MainScreenProps } from '@type/stack/type';

import LikeIcon from '@assets/popUp/like.svg';

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
    navigation.navigate('PopUpDetailScreen', { id: storeData.id });
  };

  return (
    <CustomPressable onPress={toDetail} disabled={false}>
      <View className="rounded-lg border border-stroke bg-white drop-shadow-basicShadow">
        <Image source={{ uri: storeData.thumbnail }} className="aspect-[2/1] rounded-t-lg" />

        <View className="flex flex-row items-start justify-between p-4 pr-0 pt-2">
          <View className="space-y-4">
            <View>
              <Text className="font-CAP1 text-CAP1 leading-6 text-[#AAAAAA]">
                {storeData.cityName} · {storeData.neighborhoodName}
              </Text>

              <Text className="font-SUB2 text-SUB2 leading-6 text-black">{storeData.name}</Text>

              <Text className="font-CAP1 text-CAP1 leading-6 text-medium_gray">
                {storeData.area}m² · {storeData.numOfPeople}명 수용 가능
              </Text>
            </View>

            <View>
              <Text className="font-SUB2 text-SUB2 text-deep_gray">
                1일 대여{' '}
                <Text className="font-SUB1 text-SUB1 text-purple">
                  {storeData.price.toLocaleString()}원
                </Text>
              </Text>
            </View>
          </View>

          <Pressable className="mt-1.5 p-3">
            <LikeIcon />
          </Pressable>
        </View>
      </View>
    </CustomPressable>
  );
};

export default CardComponent;
