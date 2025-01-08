import React from 'react';
import { View, Pressable } from 'react-native';

import CustomText from '@components/common/customText';
import UserInput from '@components/userInput/userInput';
import CustomButton from '@components/common/customButton';

import SafeArea from '@providers/safeArea';

import { LoginScreenProps } from '@type/stack/type';

import X from '@assets/x.svg';

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  return (
    <SafeArea>
      <View className="h-full w-full p-5">
        <Pressable onPress={() => navigation.goBack()}>
          <X />
        </Pressable>
        <View className="flex h-full flex-col justify-center">
          <View className="flex flex-col items-center">
            <CustomText className="mb-8 w-[335px] text-h1">로그인</CustomText>
            <View className="mb-3">
              <UserInput type="id" />
            </View>
            <View className="mb-8">
              <UserInput type="passwd" />
            </View>
            <CustomButton
              type="normal"
              onPress={() => console.log('login')}
              disabled={false}
              color="black"
              text="로그인"
              textColor="white"
            />
            <View className="flex flex-row gap-2 p-4">
              <CustomText className="text-medium_gray">아이디 찾기</CustomText>
              <CustomText className="text-medium_gray">|</CustomText>
              <CustomText className="text-medium_gray">비밀번호 찾기</CustomText>
            </View>
          </View>
        </View>
      </View>
    </SafeArea>
  );
};

export default LoginScreen;
