import React from 'react';
import { View, Text, Pressable } from 'react-native';

import SafeArea from '@providers/safeArea';

import { ChatScreenProps } from '@type/stack/type';

const ChatScreen = ({ navigation }: ChatScreenProps) => {
  return (
    <SafeArea>
      <View className="flex-1">
        <Pressable onPress={() => navigation.goBack()}>
          <Text>뒤로가기</Text>
        </Pressable>

        <Text>쪽지 스크린</Text>
      </View>
    </SafeArea>
  );
};

export default ChatScreen;
