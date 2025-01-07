import React from 'react';
import { View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomText from '@components/common/customText';

import { TopNavigationProp } from '@type/stack/type';

import My from '@assets/topNavigation/my.svg';
import Logo from '@assets/topNavigation/logo.svg';
import Heart from '@assets/topNavigation/heart.svg';

interface TopNavigationProps {
  type: 'popUp' | 'recruit';
  handleType: (type: 'popUp' | 'recruit') => void;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ type, handleType }) => {
  const navigation = useNavigation<TopNavigationProp>();

  return (
    <View className="fixed z-10 flex h-[72px] w-full flex-row items-center justify-between bg-black px-5 py-3">
      <Logo />

      <View
        className={`flex flex-row items-center rounded-full bg-white p-1 ${
          type === 'popUp' ? 'text-white' : 'text-black'
        }`}
      >
        <Pressable
          onPress={() => handleType('popUp')}
          className={`${type === 'popUp' && 'bg-black'} rounded-full p-3`}
        >
          <CustomText className={`${type === 'popUp' && 'text-white'}`}>팝업장소</CustomText>
        </Pressable>

        <Pressable
          onPress={() => handleType('recruit')}
          className={`${type === 'recruit' && 'bg-black'} rounded-full p-3`}
        >
          <CustomText className={`${type === 'recruit' && 'text-white'}`}>지원공고</CustomText>
        </Pressable>
      </View>

      <View className="flex flex-row">
        <Pressable onPress={() => navigation.navigate('LikeScreen')} className="p-3">
          <Heart />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('MyPageScreen')} className="p-3">
          <My />
        </Pressable>
      </View>
    </View>
  );
};

export default TopNavigation;
