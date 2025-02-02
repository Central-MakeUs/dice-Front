import React from 'react';
import { Text, View, Pressable } from 'react-native';

import { ChatBoxScreenProps } from '@type/stack/type';

import ChatIcon from '@assets/chatBox/chat.svg';
import BackArrow from '@assets/blackLeftArrow.svg';

interface HeaderComponentProps {
  navigation: ChatBoxScreenProps['navigation'];
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ navigation }) => {
  return (
    <View className="space-y-8 bg-white pb-6">
      <Pressable onPress={() => navigation.goBack()} className="ml-[3px] flex self-start p-3">
        <BackArrow />
      </Pressable>

      <View className="flex flex-row items-center space-x-2 px-5">
        <Text className="font-H1 text-H1 leading-H1 text-black">쪽지함</Text>
        <ChatIcon />
      </View>
    </View>
  );
};

export default HeaderComponent;
