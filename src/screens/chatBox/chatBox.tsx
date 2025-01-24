import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import { dummyData } from './dummyData';

import HeaderComponent from '@components/chatBox/header';
import ChatRoomComponent from '@components/chatBox/chatRoom';

import SafeArea from '@providers/safeArea';

import { ChatBoxScreenProps } from '@type/stack/type';

const ChatBoxScreen = ({ navigation }: ChatBoxScreenProps) => {
  const [chatRoomData] = useState(dummyData);

  return (
    <SafeArea>
      <View className="flex-1">
        <FlatList
          bounces={false}
          stickyHeaderIndices={[0]}
          // 렌더링하는 전체 데이터
          data={chatRoomData}
          // 각 아이템의 key 값 지정
          keyExtractor={(item) => item.chatRoomId.toString()}
          // 아이템들을 렌더링하는 메서드
          renderItem={({ item }) => (
            <ChatRoomComponent chatRoomData={item} navigation={navigation} />
          )}
          // FlatList의 최상단에 렌더링되는 Header 아이템
          ListHeaderComponent={<HeaderComponent navigation={navigation} />}
          // FlatList의 최하단에 렌더링되는 Footer 아이템
          ListFooterComponent={<View className="h-16" />}
          // 렌더링 되는 아이템들 사이의 간격
          ItemSeparatorComponent={() => <View className="h-3" />}
        />
      </View>
    </SafeArea>
  );
};

export default ChatBoxScreen;
