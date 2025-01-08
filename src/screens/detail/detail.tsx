import React from 'react';
import { Text, Pressable, ScrollView } from 'react-native';

import SafeArea from '@providers/safeArea';

import { DetailScreenProps } from '@type/stack/type';

const DetailScreen = ({ navigation, route }: DetailScreenProps) => {
  const { id } = route.params;

  const toBack = () => {
    navigation.goBack();
  };

  return (
    <SafeArea>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }}>
        <Pressable onPress={toBack}>
          <Text>뒤로가기</Text>
        </Pressable>

        <Text>{id}</Text>
      </ScrollView>
    </SafeArea>
  );
};

export default DetailScreen;
