import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';

import CustomPressable from '@components/common/customPressable';

import { LikeScreenProps, PopUpScreenProps } from '@type/stack/type';

import LikeIcon from '@assets/popUp/like.svg';
import FilledLikeIcon from '@assets/popUp/filled-like.svg';

interface CardComponentProps {
  storeData: {
    id: number;
    thumbnail: string;
    cityName: string;
    neighborhoodName: string;
    name: string;
    area: number;
    numOfPeople: number;
    salePercent: number;
    price: number;
    isLiked: boolean;
    likeCount: number;
  };
  onLike: (id: number) => void;
  navigation: PopUpScreenProps['navigation'] | LikeScreenProps['navigation'];
}

const CardComponent: React.FC<CardComponentProps> = ({ storeData, onLike, navigation }) => {
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
              <Text className="font-CAP1 text-CAP1 leading-6 text-medium_gray">
                {storeData.cityName} · {storeData.neighborhoodName}
              </Text>

              <Text className="font-SUB1 text-SUB1 leading-6 text-black">{storeData.name}</Text>

              <Text className="font-CAP2 text-CAP2 leading-6 text-light_gray">
                {storeData.area}m² · {storeData.numOfPeople}명 수용 가능
              </Text>
            </View>

            <View className="flex flex-col">
              <Text className="font-CAP1 text-CAP1 text-light_gray">1일 대여</Text>

              <View className="flex flex-row items-center  space-x-1.5">
                <Text className="font-SUB2 text-SUB2 text-purple">{storeData.salePercent}%</Text>
                <Text className="font-SUB1 text-SUB1 text-black">
                  {storeData.price.toLocaleString()}원
                </Text>
              </View>
            </View>
          </View>

          <Pressable
            onPress={() => onLike(storeData.id)}
            className="flex flex-col items-center p-3"
          >
            {storeData.isLiked ? <FilledLikeIcon /> : <LikeIcon />}
            <Text className="font-CAP2 text-CAP2 text-semiLight_gray">{storeData.likeCount}</Text>
          </Pressable>
        </View>
      </View>
    </CustomPressable>
  );
};

export default CardComponent;
