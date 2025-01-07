import React from 'react';
import { Pressable, View } from 'react-native';

import CustomText from '@components/common/customText';
import SafeArea from '@providers/safeArea';
import { LoginScreenProps } from '@type/stack/type';

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  return (
    <SafeArea>
      <View className="flex-1">
        <CustomText>로그인 스크린</CustomText>
        <Pressable onPress={() => navigation.goBack()}>
          <CustomText>뒤로가기</CustomText>
        </Pressable>
      </View>
    </SafeArea>
  );
};

export default LoginScreen;
