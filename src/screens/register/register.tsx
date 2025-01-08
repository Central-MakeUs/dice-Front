import React from 'react';
import { View, Pressable, ScrollView } from 'react-native';

import CustomText from '@components/common/customText';
import UserInput from '@components/userInput/userInput';
import CustomButton from '@components/common/customButton';

import SafeArea from '@providers/safeArea';

import { RegisterScreenProps } from '@type/stack/type';

import X from '@assets/x.svg';

const RegisterScreen = ({ navigation }: RegisterScreenProps) => {
  return (
    <SafeArea>
      <View className="h-full w-full p-5">
        <Pressable
          className="flex h-12 w-12 items-center justify-center"
          onPress={() => navigation.goBack()}
        >
          <X width={24} height={24} />
        </Pressable>
        <View className="flex-1 flex-col justify-center">
          <ScrollView>
            <View className="flex flex-col items-center">
              <CustomText className="my-6 w-[335px] text-h1">회원가입</CustomText>
              <View className="mb-6">
                <View className="mb-2 flex flex-row">
                  <CustomText>아이디</CustomText>
                  <CustomText className="text-red">*</CustomText>
                </View>
                <UserInput type="id" />
              </View>
              <View className="mb-6">
                <View className="mb-2 flex flex-row">
                  <CustomText>비밀번호</CustomText>
                  <CustomText className="text-red">*</CustomText>
                </View>
                <UserInput type="passwd" />
              </View>
              <View className="mb-6">
                <View className="mb-2 flex flex-row">
                  <CustomText>비밀번호 확인</CustomText>
                  <CustomText className="text-red">*</CustomText>
                </View>
                <UserInput type="passwd_check" />
              </View>
              <View className="mb-6">
                <View className="mb-2 flex flex-row">
                  <CustomText>이름</CustomText>
                  <CustomText className="text-red">*</CustomText>
                </View>
                <UserInput type="name" />
              </View>
              <View className="mb-6">
                <View className="mb-2 flex flex-row">
                  <CustomText>이메일</CustomText>
                  <CustomText className="text-red">*</CustomText>
                </View>
                <UserInput type="email" />
              </View>
              <View className="mb-6">
                <View className="mb-2 flex flex-row">
                  <CustomText>휴대폰</CustomText>
                  <CustomText className="text-red">*</CustomText>
                </View>
                <UserInput type="phone" />
              </View>
            </View>
          </ScrollView>
        </View>
        <CustomButton
          type="normal"
          onPress={() => console.log('login')}
          disabled={false}
          color="black"
          text="회원가입"
          textColor="white"
        />
      </View>
    </SafeArea>
  );
};

export default RegisterScreen;
