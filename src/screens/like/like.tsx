import React from 'react';
import { View, Pressable } from 'react-native';

import CustomText from '@components/common/customText';

import SafeArea from '@providers/safeArea';

import { LikeScreenProps } from '@type/stack/type';

const LikeScreen = ({ navigation }: LikeScreenProps) => {
  return (
    <SafeArea>
      <View className="flex-1">
        <Pressable onPress={() => navigation.goBack()}>
          <CustomText>뒤로가기</CustomText>
        </Pressable>

        <CustomText>좋아요 스크린</CustomText>
      </View>
    </SafeArea>
  );
};

export default LikeScreen;
