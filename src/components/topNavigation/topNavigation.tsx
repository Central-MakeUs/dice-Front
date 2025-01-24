import React from 'react';
import { View, Pressable } from 'react-native';

import { PopUpScreenProps, RecruitScreenProps } from '@type/stack/type';

import Chat from '@assets/topNavigation/chat.svg';
import Heart from '@assets/topNavigation/heart.svg';
import Logo from '@assets/topNavigation/logo-white.svg';

interface TopNavigationProps {
  navigation: PopUpScreenProps['navigation'] | RecruitScreenProps['navigation'];
}

const TopNavigation: React.FC<TopNavigationProps> = ({ navigation }) => {
  return (
    <View className="fixed z-10 flex h-14 w-full flex-row items-center justify-between bg-black py-1 pl-5">
      <Pressable onPress={() => navigation.navigate('ReservationCompleteScreen')}>
        <Logo />
      </Pressable>

      <View className="flex flex-row">
        <Pressable onPress={() => navigation.navigate('LikeScreen')} className="p-3">
          <Heart />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('ChatBoxScreen')} className="p-3">
          <Chat />
        </Pressable>
      </View>
    </View>
  );
};

export default TopNavigation;
