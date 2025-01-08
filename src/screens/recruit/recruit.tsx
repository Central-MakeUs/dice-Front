import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import CustomModal from '@components/common/customModal';

import { RecruitScreenProps } from '@type/stack/type';

const RecruitScreen = ({ navigation }: RecruitScreenProps) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <View className="flex-1">
      <Text>지원공고 스크린</Text>
      <Button title="열기" onPress={() => setIsModalVisible(true)}></Button>

      <CustomModal
        isVisible={isModalVisible}
        closeModal={() => setIsModalVisible(false)}
        title="인증번호가 발송되었습니다"
        buttonText="확인"
      />
    </View>
  );
};

export default RecruitScreen;
