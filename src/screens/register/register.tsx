import React from 'react';
import { Pressable, View } from 'react-native';

import CustomText from '@components/common/customText';
import SafeArea from '@providers/safeArea';
import { RegisterScreenProps } from '@type/stack/type';

const RegisterScreen = ({ navigation }: RegisterScreenProps) => {
  return (
    <SafeArea>
      <View className="flex-1">
        <CustomText>회원가입 스크린</CustomText>
        <Pressable onPress={() => navigation.goBack()}>
          <CustomText>뒤로가기</CustomText>
        </Pressable>
      </View>
    </SafeArea>
  );
};

export default RegisterScreen;
