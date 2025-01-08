import React from 'react';
import { View, Text, Pressable } from 'react-native';

import SafeArea from '@providers/safeArea';

import { LikeScreenProps } from '@type/stack/type';

const LikeScreen = ({ navigation }: LikeScreenProps) => {
  return (
    <SafeArea>
      <View className="flex-1">
        <Pressable onPress={() => navigation.goBack()}>
          <Text>뒤로가기</Text>
        </Pressable>

        <Text>좋아요 스크린</Text>
      </View>
    </SafeArea>
  );
};

export default LikeScreen;
