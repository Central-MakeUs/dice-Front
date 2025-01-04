import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useLoggedInStore } from '@zustands/member/store';

import CustomText from '@components/common/customText';

import SafeArea from '@providers/safeArea';

import ExampleImage from '@assets/example.svg';

const HomeScreen = () => {
  const { setIsLoggedIn } = useLoggedInStore();

  const handleLoggedIn = () => {
    setIsLoggedIn(true);
  };

  return (
    <SafeArea>
      <View className="flex-1 items-center justify-center space-y-2 bg-white">
        <CustomText>홈 스크린</CustomText>
        <TouchableOpacity onPress={handleLoggedIn}>
          <ExampleImage width={120} height={120} />
        </TouchableOpacity>
      </View>
    </SafeArea>
  );
};

export default HomeScreen;
