import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import { recruitDetailDummy } from './recruitDetailDummy';

import SafeArea from '@providers/safeArea';

import { RecruitDetailScreenProps } from '@type/stack/type';
import { RecruitDetailItem } from '@type/recruit/recruitDetail.type';

import LeftArrow from '@assets/leftArrow.svg';
import LikeFull from '@assets/recruit/like-full.svg';
import LikeEmpty from '@assets/recruit/like-empty.svg';

export default function RecruitDetailScreen({ navigation }: RecruitDetailScreenProps) {
  const [recruitItem, setRecruitItem] = useState<RecruitDetailItem>(recruitDetailDummy[0]);

  const toBack = () => {
    navigation.goBack();
  };

  const handleLike = () => {
    setRecruitItem((prev) => ({
      ...prev,
      isLiked: !prev.isLiked,
      likeCount: prev.isLiked ? prev.likeCount - 1 : prev.likeCount + 1,
    }));
  };

  return (
    <SafeArea>
      <View className="ml-[3px] flex flex-row items-start justify-start">
        <Pressable onPress={toBack} className="p-3">
          <LeftArrow />
        </Pressable>
      </View>
      <View className="px-5">
        <View className="">
          <View className="relative flex flex-row items-center justify-between">
            <Text className="font-H2 text-H2 leading-H2">{recruitItem.title}</Text>
            <Pressable onPress={handleLike} className="flex flex-col items-center p-3">
              {recruitItem.isLiked ? <LikeFull /> : <LikeEmpty />}
              <Text className="font-CAP2 text-CAP2 text-semiLight_gray">
                {recruitItem.likeCount}
              </Text>
            </Pressable>
          </View>
          <View className="flex flex-row gap-[20px]">
            <Text className="font-CAP1 text-CAP1 leading-CAP1 text-deep_gray">해당 지역</Text>
            <Text className="font-CAP1 text-CAP1 leading-CAP1 text-deep_gray">
              {recruitItem.location}
            </Text>
          </View>
          <View className="flex flex-row gap-[20px]">
            <Text className="font-CAP1 text-CAP1 leading-CAP1 text-deep_gray">공간 위치</Text>
            <Text className="font-CAP1 text-CAP1 leading-CAP1 text-deep_gray">
              {recruitItem.locationDetail}
            </Text>
          </View>
          <View className="flex flex-row gap-[20px]">
            <Text className="font-CAP1 text-CAP1 leading-CAP1 text-deep_gray">지원 대상</Text>
            <Text className="font-CAP1 text-CAP1 leading-CAP1 text-deep_gray">
              {recruitItem.target[0]} {recruitItem.target[1]}
            </Text>
          </View>
          <View className="flex flex-row gap-[20px]">
            <Text className="font-CAP1 text-CAP1 leading-CAP1 text-deep_gray">모집 기간</Text>
            <Text className="font-CAP1 text-CAP1 leading-CAP1 text-deep_gray">
              {recruitItem.startDate} ~ {recruitItem.endDate}
            </Text>
          </View>
        </View>
        <View>
          <Text>지원 공고 소개</Text>
          <Text className="font-CAP1 text-CAP1 leading-CAP1 text-deep_gray">
            {recruitItem.information}
          </Text>
          <Text className="font-CAP1 text-CAP1 leading-CAP1 text-deep_gray">
            {recruitItem.locationDetail}
          </Text>
        </View>
      </View>
    </SafeArea>
  );
}
