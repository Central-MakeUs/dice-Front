import React from 'react';
import { useLoggedInStore } from '@zustands/member/store';
import { View, Text, TouchableOpacity } from 'react-native';

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
        <Text className="font-H1 text-H1 leading-H1">헤더1</Text>
        <Text className="font-H2 text-H2 leading-H2">헤더2</Text>
        <Text className="font-SUB1 text-SUB1 leading-SUB1">서브타이틀1</Text>
        <Text className="font-SUB2 text-SUB2 leading-SUB2">서브타이틀2</Text>
        <Text className="font-BODY1 text-BODY1 leading-BODY1">바디1</Text>
        <Text className="font-BODY2 text-BODY2 leading-BODY2">바디2</Text>
        <Text className="font-CAP1 text-CAP1 leading-CAP1">캡션1</Text>
        <Text className="font-CAP2 text-CAP2 leading-CAP2">캡션2</Text>
        <Text className="font-BTN1 text-BTN1 leading-BTN1">버튼1</Text>

        <TouchableOpacity onPress={handleLoggedIn}>
          <ExampleImage width={120} height={120} />
        </TouchableOpacity>
      </View>
    </SafeArea>
  );
};

export default HomeScreen;
