import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { View, Pressable, ScrollView } from 'react-native';

import CustomText from '@components/common/customText';
import UserInput from '@components/userInput/userInput';
import CustomButton from '@components/common/customButton';

import SafeArea from '@providers/safeArea';

import { RegisterScreenProps } from '@type/stack/type';

import X from '@assets/x.svg';

interface FormData {
  id: string;
  passwd: string;
  passwd_check: string;
  name: string;
  email: string;
  phone: string;
}

const RegisterScreen = ({ navigation }: RegisterScreenProps) => {
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(JSON.stringify(data));
  };

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
                <UserInput type="id" name="id" control={control} />
              </View>
              <View className="mb-6">
                <View className="mb-2 flex flex-row">
                  <CustomText>비밀번호</CustomText>
                  <CustomText className="text-red">*</CustomText>
                </View>
                <UserInput type="passwd" name="passwd" control={control} />
              </View>
              <View className="mb-6">
                <View className="mb-2 flex flex-row">
                  <CustomText>비밀번호 확인</CustomText>
                  <CustomText className="text-red">*</CustomText>
                </View>
                <UserInput type="passwd_check" name="passwd_check" control={control} />
              </View>
              <View className="mb-6">
                <View className="mb-2 flex flex-row">
                  <CustomText>이름</CustomText>
                  <CustomText className="text-red">*</CustomText>
                </View>
                <UserInput type="name" name="name" control={control} />
              </View>
              <View className="mb-6">
                <View className="mb-2 flex flex-row">
                  <CustomText>이메일</CustomText>
                  <CustomText className="text-red">*</CustomText>
                </View>
                <UserInput type="email" name="email" control={control} />
              </View>
              <View className="mb-6">
                <View className="mb-2 flex flex-row">
                  <CustomText>휴대폰</CustomText>
                  <CustomText className="text-red">*</CustomText>
                </View>
                <UserInput type="phone" name="phone" control={control} />
              </View>
            </View>
          </ScrollView>
        </View>
        <CustomButton
          type="normal"
          onPress={handleSubmit(onSubmit)}
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
