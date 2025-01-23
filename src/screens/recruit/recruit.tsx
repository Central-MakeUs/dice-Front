import React, { useState } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';

import { recruitItemDummy } from './recruitItemDummy';

import CustomModal from '@components/common/customModal';
import RecruitItemComponent from '@components/recruit/recruitItem';
import TopNavigation from '@components/topNavigation/topNavigation';

import { RecruitItem } from '@type/recruit';
import { RecruitScreenProps } from '@type/stack/type';

const RecruitScreen = ({ navigation }: RecruitScreenProps) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [recruitItem] = useState<RecruitItem[]>(recruitItemDummy);

  return (
    <View className="flex-1">
      <SafeAreaView className="flex-1 bg-black">
        <TopNavigation navigation={navigation} />
        <View className="flex-1 space-y-4 bg-white">
          <Text>지원공고 스크린</Text>
          {recruitItem.map((item) => (
            <RecruitItemComponent recruitItem={item} />
          ))}
          <Button title="열기" onPress={() => setIsModalVisible(true)}></Button>

          <CustomModal
            isVisible={isModalVisible}
            closeModal={() => setIsModalVisible(false)}
            title="인증번호가 발송되었습니다"
            buttonText="확인"
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default RecruitScreen;
