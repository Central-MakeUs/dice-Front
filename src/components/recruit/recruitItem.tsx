import React from 'react';
import { Text, View, Pressable } from 'react-native';

import CustomPressable from '@components/common/customPressable';

import { RecruitItem } from '@type/recruit';
import { RecruitScreenProps } from '@type/stack/type';

import LikeFull from '@assets/recruit/like-full.svg';
import LikeEmpty from '@assets/recruit/like-empty.svg';

interface RecruitItemComponentProps {
  recruitItem: RecruitItem;
  onLike: (id: number) => void;
  navigation: RecruitScreenProps['navigation'];
}

export default function RecruitItemComponent({
  recruitItem,
  onLike,
  navigation,
}: RecruitItemComponentProps) {
  const { id, city, source, title, isLiked, likeCount, target, startDate, endDate } = recruitItem;

  const toRecruitDetail = () => {
    navigation.navigate('RecruitDetailScreen', { id: recruitItem.id });
  };

  return (
    <CustomPressable onPress={toRecruitDetail} disabled={false}>
      <View className="relative h-[108px] w-full rounded-xl border border-stroke p-4">
        <Pressable
          onPress={() => onLike(id)}
          className="absolute right-[6px] top-2 flex flex-col items-center"
        >
          {isLiked ? (
            <LikeFull className="mx-[12px] my-2" />
          ) : (
            <LikeEmpty className="mx-[12px] my-2" />
          )}
          <Text className={`${isLiked ? 'text-purple' : 'text-light_gray'}`}>{likeCount}</Text>
        </Pressable>
        <View className="flex flex-row items-center gap-0.5 ">
          <Text className="font-CAP1 text-CAP1 leading-CAP1 text-medium_gray">{city}</Text>
          <Text className="font-CAP1 text-CAP1 leading-CAP1 text-medium_gray">·</Text>
          <Text className="font-CAP1 text-CAP1 leading-CAP1 text-medium_gray">{source}</Text>
        </View>
        <Text className="mb-2 mt-0.5 font-SUB1 text-SUB1 leading-SUB1">{title}</Text>
        <View className="flex flex-row items-center gap-1">
          <Text className="font-CAP2 text-CAP2 leading-CAP2 text-light_gray">{target} 대상</Text>
          <Text className="font-CAP2 text-CAP2 leading-CAP2 text-light_gray">|</Text>
          <Text className="font-CAP2 text-CAP2 leading-CAP2 text-light_gray">
            {startDate} ~ {endDate}
          </Text>
        </View>
      </View>
    </CustomPressable>
  );
}
