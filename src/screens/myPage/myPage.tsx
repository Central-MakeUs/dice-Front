import React from 'react';
import { View, Pressable } from 'react-native';

import CustomText from '@components/common/customText';

import SafeArea from '@providers/safeArea';

import { MyPageScreenProps } from '@type/stack/type';

const MyPageScreen = ({ navigation }: MyPageScreenProps) => {
  return (
    <SafeArea>
      <View className="flex-1">
        <Pressable onPress={() => navigation.goBack()}>
          <CustomText>뒤로가기</CustomText>
        </Pressable>

        <CustomText>마이페이지 스크린</CustomText>
      </View>
    </SafeArea>
  );
};

export default MyPageScreen;
