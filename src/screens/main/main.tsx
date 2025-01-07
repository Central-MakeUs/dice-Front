import { View } from 'react-native';
import React, { useState } from 'react';

import PopUpScreen from '@screens/popUp/popUp';
import RecruitScreen from '@screens/recruit/recruit';

import TopNavigation from '@components/topNavigation/topNavigation';

import SafeArea from '@providers/safeArea';

import { MainScreenProps } from '@type/stack/type';

const MainScreen = ({ navigation }: MainScreenProps) => {
  const [type, setType] = useState<'popUp' | 'recruit'>('popUp');

  const handleType = (newType: 'popUp' | 'recruit') => {
    setType(newType);
  };

  return (
    <SafeArea>
      <View className="flex-1 bg-white">
        <TopNavigation type={type} handleType={handleType} />

        {type === 'popUp' && <PopUpScreen navigation={navigation} />}

        {type === 'recruit' && <RecruitScreen navigation={navigation} />}
      </View>
    </SafeArea>
  );
};

export default MainScreen;
