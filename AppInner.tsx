import React from 'react';
import { useLoggedInStore } from '@zustands/member/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '@screens/home/homeScreen';
import MainScreen from '@screens/main/mainScreen';
import CreateScreen from '@screens/create/createScreen';

import BottomNavigation from '@components/bottomNavigation/bottomNavigation';

import { StackParamList, RootStackParamList } from '@type/stack/type';

const stack = createNativeStackNavigator<StackParamList>();
const rootStack = createNativeStackNavigator<RootStackParamList>();

function AppInner() {
  const { isLoggedIn } = useLoggedInStore();

  return isLoggedIn ? (
    <stack.Navigator initialRouteName="BottomNavigation" screenOptions={{ headerShown: false }}>
      <stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <stack.Screen name="MainScreen" component={MainScreen} />
      <stack.Screen name="CreateScreen" component={CreateScreen} />
    </stack.Navigator>
  ) : (
    <rootStack.Navigator screenOptions={{ headerShown: false }}>
      <rootStack.Screen name="HomeScreen" component={HomeScreen} />
    </rootStack.Navigator>
  );
}

export default AppInner;
