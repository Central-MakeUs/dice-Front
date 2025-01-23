import React from 'react';
import { Text, View } from 'react-native';

import { RecruitItem } from '@type/recruit';

import LikeFull from '@assets/recruit/like-full.svg';
import LikeEmpty from '@assets/recruit/like-empty.svg';

interface RecruitItemComponentProps {
  recruitItem: RecruitItem;
}

export default function RecruitItemComponent({ recruitItem }: RecruitItemComponentProps) {
  const { city, source, title, isLiked, likedNum, target, startDate, endDate } = recruitItem;
  return (
    <View className="relative h-[108px] w-full rounded-xl border border-stroke p-4">
      <View className="absolute right-[6px] top-2 flex flex-col items-center">
        {isLiked ? (
          <LikeFull className="mx-[12px] my-2" />
        ) : (
          <LikeEmpty className="mx-[12px] my-2" />
        )}
        <Text className={`${isLiked ? 'text-purple' : 'text-light_gray'}`}>{likedNum}</Text>
      </View>
      <View className="flex flex-row items-center gap-0.5 ">
        <Text className="font-CAP1 text-CAP1 leading-CAP1 text-medium_gray">{city}</Text>
        <Text className="font-CAP1 text-CAP1 leading-CAP1 text-medium_gray">·</Text>
        <Text className="font-CAP1 text-CAP1 leading-CAP1 text-medium_gray">{source}</Text>
      </View>
      <Text className="mb-2 font-SUB1 text-SUB1 leading-SUB1">{title}</Text>
      <View className="flex flex-row items-center gap-1">
        <Text className="font-CAP2 text-CAP2 leading-CAP2 text-light_gray">{target} 대상</Text>
        <Text className="font-CAP2 text-CAP2 leading-CAP2 text-light_gray">|</Text>
        <Text className="font-CAP2 text-CAP2 leading-CAP2 text-light_gray">
          {startDate} ~ {endDate}
        </Text>
      </View>
    </View>
  );
}
