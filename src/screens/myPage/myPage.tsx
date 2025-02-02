import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { useLoggedInStore } from '@zustands/member/store';

import SafeArea from '@providers/safeArea';

import { deleteToken } from '@utils/token';

import { MyPageScreenProps } from '@type/stack/type';

import ProfileImage from '@assets/myPage/defaultProfile.svg';

const MyPageScreen = ({ navigation }: MyPageScreenProps) => {
  const { setIsLoggedIn } = useLoggedInStore();

  const name = '미니';

  const handleLogout = () => {
    setIsLoggedIn(false);
    deleteToken();
  };

  return (
    <SafeArea>
      <View className="flex-1 space-y-6">
        <View className="mt-12 flex flex-row items-center space-x-3 px-5">
          <ProfileImage />
          <Text className="font-SUB1 text-SUB1 text-purple">
            안녕하세요! <Text className="text-black">{name}님</Text>
          </Text>
        </View>

        <View className="h-2 bg-back_gray" />

        <View className="px-5">
          <Pressable onPress={() => navigation.navigate('LikeScreen')} className="py-3">
            <Text className="font-SUB3 text-SUB3 text-medium_gray">찜한 목록</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('ChatBoxScreen')} className="py-3">
            <Text className="font-SUB3 text-SUB3 text-medium_gray">쪽지함</Text>
          </Pressable>
        </View>

        <View className="mx-5 h-[1px] bg-stroke" />

        <View className="px-5">
          <Pressable className="py-3">
            <Text className="font-SUB3 text-SUB3 text-medium_gray">회원 정보 관리</Text>
          </Pressable>
          <Pressable className="py-3">
            <Text className="font-SUB3 text-SUB3 text-medium_gray">이용 약관</Text>
          </Pressable>
          <Pressable className="py-3">
            <Text className="font-SUB3 text-SUB3 text-medium_gray">개인정보 처리방침</Text>
          </Pressable>
        </View>

        <View className="mx-5 h-[1px] bg-stroke" />

        <View className="px-5">
          <Pressable onPress={handleLogout} className="py-2.5">
            <Text className="font-SUB3 text-SUB3 text-medium_gray">로그아웃</Text>
          </Pressable>
        </View>
      </View>
    </SafeArea>
  );
};

export default MyPageScreen;
