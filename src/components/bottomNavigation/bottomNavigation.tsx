import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainScreen from '@screens/main/mainScreen';

import { BottomNavigationParamList } from '@type/stack/type';

const Tab = createBottomTabNavigator<BottomNavigationParamList>();

const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          // tabBarLabel: () => null,
          tabBarStyle: {
            padding: 0,
            height: 84,
            backgroundColor: 'black',
            position: 'absolute',
            bottom: 0,
            zIndex: 100,
            borderColor: 'black',
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
