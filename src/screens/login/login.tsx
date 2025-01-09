import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { View, Text, Alert, Pressable } from 'react-native';

import UserInput from '@components/userInput/userInput';
import CustomButton from '@components/common/customButton';

import SafeArea from '@providers/safeArea';

import { LoginScreenProps } from '@type/stack/type';

import X from '@assets/x.svg';

interface FormData {
  id: string;
  passwd: string;
}

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (formData: FormData) => {
    const { id, passwd } = formData;
    Alert.alert('입력 데이터', `${id}, ${passwd}`);
  };

  const onError = () => {
    if (errors.id) {
      Alert.alert('입력 오류', errors.id.message);
    } else if (errors.passwd) {
      Alert.alert('입력 오류', errors.passwd.message);
    }
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
        <View className="flex h-full flex-col justify-center">
          <View className="flex flex-col items-center">
            <Text className="mb-8 w-[335px] font-H1 text-H1">로그인</Text>
            <View className="mb-3">
              <UserInput
                type="id"
                name="id"
                control={control}
                rules={{ required: '아이디를 입력해주세요' }}
              />
            </View>
            <View className="mb-8">
              <UserInput
                type="passwd"
                name="passwd"
                control={control}
                rules={{ required: '비밀번호를 입력해주세요' }}
              />
            </View>
            <CustomButton
              type="normal"
              onPress={handleSubmit(onSubmit, onError)}
              disabled={false}
              color="black"
              text="로그인"
              textColor="white"
            />
            <View className="flex flex-row gap-2 p-4">
              <Text className="font-BTN1 text-BTN1 text-medium_gray">아이디 찾기</Text>
              <Text className="font-BTN1 text-BTN1 text-medium_gray">|</Text>
              <Text className="font-BTN1 text-BTN1 text-medium_gray">비밀번호 찾기</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeArea>
  );
};

export default LoginScreen;
