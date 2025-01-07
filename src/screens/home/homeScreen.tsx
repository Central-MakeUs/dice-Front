import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useLoggedInStore } from '@zustands/member/store';

import CustomText from '@components/common/customText';

import SafeArea from '@providers/safeArea';

import Logo from '@assets/topNavigation/logo-black.svg';
import CustomButton from '@components/common/customButton';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenProp } from '@type/stack/type';

const HomeScreen = () => {
  const { setIsLoggedIn } = useLoggedInStore();

  const handleLoggedIn = () => {
    setIsLoggedIn(true);
  };

  const navigation = useNavigation<HomeScreenProp>();

  return (
    <SafeArea>
      <View className="flex-1 items-center justify-center space-y-2">
        <View className="w-[180px] h-[180px]">
          <Logo width={180} height={180} />
          <CustomText className="text-sub2 font-sub2 absolute top-3/4">
            팝업 운영 올인원 솔루션
          </CustomText>
        </View>
      </View>
      <View className="">
        <CustomButton
          type="normal"
          onPress={() => navigation.navigate('LoginScreen')}
          disabled={false}
          color="black"
          text="다이스 아이디로 로그인"
          textColor="white"
        />
        <View className="flex flex-row justify-center gap-2 p-4">
          <Pressable onPress={() => navigation.navigate('RegisterScreen')}>
            <CustomText className="text-medium_gray underline">회원으로 가입하기</CustomText>
          </Pressable>
          <Text className="text-medium_gray">|</Text>
          <Pressable onPress={handleLoggedIn}>
            <CustomText className="text-medium_gray underline">비회원으로 둘러보기</CustomText>
          </Pressable>
        </View>
      </View>
    </SafeArea>
  );
};

export default HomeScreen;
