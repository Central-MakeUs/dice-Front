import React from 'react';
import { View } from 'react-native';

import CustomText from '@components/common/customText';

import { RecruitScreenProps } from '@type/stack/type';

const RecruitScreen = ({ navigation }: RecruitScreenProps) => {
  return (
    <View className="flex-1">
      <CustomText>지원공고 스크린</CustomText>
    </View>
  );
};

export default RecruitScreen;
