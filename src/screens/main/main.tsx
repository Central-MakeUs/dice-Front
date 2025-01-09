import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';

import PopUpScreen from '@screens/popUp/popUp';
import RecruitScreen from '@screens/recruit/recruit';

import TopNavigation from '@components/topNavigation/topNavigation';

import { MainScreenProps } from '@type/stack/type';

const MainScreen = ({ navigation }: MainScreenProps) => {
  const [type, setType] = useState<'popUp' | 'recruit'>('popUp');

  const handleType = (newType: 'popUp' | 'recruit') => {
    setType(newType);
  };

  return (
    <View className="flex-1">
      <SafeAreaView className="flex-1 bg-black">
        <View className="flex-1 bg-white">
          <TopNavigation type={type} handleType={handleType} />

          {type === 'popUp' && <PopUpScreen navigation={navigation} />}

          {type === 'recruit' && <RecruitScreen navigation={navigation} />}
        </View>
      </SafeAreaView>
      <SafeAreaView className="bg-white" />
    </View>
  );
};

export default MainScreen;
