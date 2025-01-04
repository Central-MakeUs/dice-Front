import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useLoggedInStore } from '@zustands/member/store';

import CustomText from '@components/common/customText';
import CustomPressable from '@components/common/customPressable';

import SafeArea from '@providers/safeArea';

import { MainScreenProps } from '@type/stack/type';

const MainScreen = ({ navigation }: MainScreenProps) => {
  const { isLoggedIn, setIsLoggedIn } = useLoggedInStore();

  const toCreate = () => {
    navigation.navigate('CreateScreen');
  };

  const handleLoggedIn = () => {
    setIsLoggedIn(false);
  };

  return (
    <SafeArea>
      <View className={`flex-1 space-y-2`}>
        <CustomText className="text-4xl font-semibold">메인 스크린</CustomText>
        <CustomPressable
          onPress={toCreate}
          disabled={!isLoggedIn}
          color="bg-black"
          text="ㅎㅇ"
          textColor="text-white"
        />

        <TouchableOpacity onPress={handleLoggedIn}>
          <CustomText className="text-4xl">로그아웃하기</CustomText>
        </TouchableOpacity>
      </View>
    </SafeArea>
  );
};

export default MainScreen;
