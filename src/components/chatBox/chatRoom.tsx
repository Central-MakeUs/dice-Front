import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Reanimated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated';

import { ChatRoom } from '@screens/chatBox/dummyData';

import { ChatBoxScreenProps } from '@type/stack/type';

interface ChatRoomComponentProps {
  chatRoomData: ChatRoom;
  navigation: ChatBoxScreenProps['navigation'];
}

const ChatRoomComponent: React.FC<ChatRoomComponentProps> = ({ chatRoomData, navigation }) => {
  function RightAction(prog: SharedValue<number>, drag: SharedValue<number>) {
    const styleAnimation = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: drag.value + 74 }],
      };
    });

    return (
      <Reanimated.View style={styleAnimation}>
        <Pressable
          onPress={() => console.log('나가기')}
          className="flex h-full w-[74px] items-center justify-center bg-red"
        >
          <Text className="text-center font-SUB3 text-SUB3 leading-SUB3 text-white">나가기</Text>
        </Pressable>
      </Reanimated.View>
    );
  }

  return (
    <ReanimatedSwipeable renderRightActions={RightAction} overshootRight={false}>
      <TouchableOpacity
        onPress={() => navigation.navigate('LikeScreen')}
        className="flex flex-row justify-between px-5 py-[15.5px]"
      >
        <View>
          <Text className="font-SUB2 text-SUB2 leading-SUB2 text-dark_gray">
            {chatRoomData.name}
          </Text>
          <Text className="font-BODY2 text-BODY2 leading-BODY2 text-deep_gray">
            {chatRoomData.lastContent}
          </Text>
        </View>

        <View className="flex flex-col items-end justify-between">
          <Text className="font-CAP2 text-CAP2 leading-CAP2 text-light_gray">
            {chatRoomData.createdAt}
          </Text>

          {chatRoomData.notReadCount !== 0 && (
            <View className="rounded-full bg-red px-1.5 py-1">
              <Text className="font-CAP2 text-CAP2 leading-CAP2 text-white">
                {chatRoomData.notReadCount > 999 ? '999+' : chatRoomData.notReadCount}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </ReanimatedSwipeable>
  );
};

export default ChatRoomComponent;
