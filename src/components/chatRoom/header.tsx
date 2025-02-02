import React from 'react';
import { View, Pressable } from 'react-native';

import { ChatRoomScreenProps } from '@type/stack/type';

import BackArrow from '@assets/blackLeftArrow.svg';

interface HeaderComponentProps {
  navigation: ChatRoomScreenProps['navigation'];
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ navigation }) => {
  return (
    <View className="bg-white">
      <Pressable onPress={() => navigation.goBack()} className="ml-[3px] flex self-start p-3">
        <BackArrow />
      </Pressable>
    </View>
  );
};

export default HeaderComponent;
