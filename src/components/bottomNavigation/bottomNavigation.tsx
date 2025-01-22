import React from 'react';
import { Text, View, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PopUpScreen from '@screens/popUp/popUp';
import MyPageScreen from '@screens/myPage/myPage';
import RecruitScreen from '@screens/recruit/recruit';

import { BottomNavigationParamList } from '@type/stack/type';

import PopUpIcon from '@assets/bottomNavigation/popUp.svg';
import MyPageIcon from '@assets/bottomNavigation/myPage.svg';
import RecruitIcon from '@assets/bottomNavigation/recruit.svg';
import ColoredPopUpIcon from '@assets/bottomNavigation/coloredPopUp.svg';
import ColoredMyPageIcon from '@assets/bottomNavigation/coloredMyPage.svg';
import ColoredRecruitIcon from '@assets/bottomNavigation/coloredRecruit.svg';

const Tab = createBottomTabNavigator<BottomNavigationParamList>();

const BottomNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: '#EEEEEE',
          height: Platform.OS === 'ios' ? 96 : 62,
          paddingTop: Platform.OS === 'ios' ? 16 : 10,
        },
      }}
    >
      <Tab.Screen
        name="PopUpScreen"
        component={PopUpScreen}
        options={{
          // 기본 텍스트 (name 제거)
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <View className="flex h-[62px] w-12 flex-col items-center justify-center space-y-2">
              {focused ? <ColoredPopUpIcon /> : <PopUpIcon />}
              <Text
                className={`font-BTN2 text-BTN2 ${focused ? 'text-dark_gray' : 'text-medium_gray'}`}
              >
                팝업공간
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="RecruitScreen"
        component={RecruitScreen}
        options={{
          // 기본 텍스트 (name 제거)
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <View className="flex h-[62px] w-12 flex-col items-center justify-center space-y-2">
              {focused ? <ColoredRecruitIcon /> : <RecruitIcon />}
              <Text
                className={`font-BTN2 text-BTN2 ${focused ? 'text-dark_gray' : 'text-medium_gray'}`}
              >
                지원공간
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="MyPageScreen"
        component={MyPageScreen}
        options={{
          // 기본 텍스트 (name 제거)
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <View className="flex h-[62px] w-12 flex-col items-center justify-center space-y-2">
              {focused ? <ColoredMyPageIcon /> : <MyPageIcon />}
              <Text
                className={`font-BTN2 text-BTN2 ${focused ? 'text-dark_gray' : 'text-medium_gray'}`}
              >
                나의정보
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
