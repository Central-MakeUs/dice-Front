import React from 'react';
import { View, Text } from 'react-native';

import { RecruitScreenProps } from '@type/stack/type';

const RecruitScreen = ({ navigation }: RecruitScreenProps) => {
  return (
    <View className="flex-1">
      <Text>지원공고 스크린</Text>
    </View>
  );
};

export default RecruitScreen;
