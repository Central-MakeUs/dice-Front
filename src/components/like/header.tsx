import React from 'react';
import { View, Pressable } from 'react-native';

import SwitchComponent from './switch';

import { LikeScreenProps } from '@type/stack/type';

import BackArrow from '@assets/blackLeftArrow.svg';

interface HeaderComponentProps {
  type: string;
  handleType: () => void;
  navigation: LikeScreenProps['navigation'];
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ type, handleType, navigation }) => {
  return (
    <View className="bg-white pb-6">
      <Pressable onPress={() => navigation.goBack()} className="ml-[3px] flex self-start p-3">
        <BackArrow />
      </Pressable>

      {/* 찜한 공간과 찜한 공고 type을 전환하는 스위치 컴포넌트 */}
      <SwitchComponent type={type} handleType={handleType} />
    </View>
  );
};

export default HeaderComponent;
