import React from 'react';
import { Pressable, ScrollView } from 'react-native';

import CustomText from '@components/common/customText';

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
          <CustomText>뒤로가기</CustomText>
        </Pressable>

        <CustomText>{id}</CustomText>
      </ScrollView>
    </SafeArea>
  );
};

export default DetailScreen;
