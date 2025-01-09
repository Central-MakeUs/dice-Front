import React from 'react';
import { useLoggedInStore } from '@zustands/member/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LikeScreen from '@screens/like/like';
import MainScreen from '@screens/main/main';
import LoginScreen from '@screens/login/login';
import HomeScreen from '@screens/home/homeScreen';
import MyPageScreen from '@screens/myPage/myPage';
import RegisterScreen from '@screens/register/register';
import PopUpDetailScreen from '@screens/popUpDetail/popUpDetail';

import { StackParamList, RootStackParamList } from '@type/stack/type';

const Stack = createNativeStackNavigator<StackParamList>();
const RootStack = createNativeStackNavigator<RootStackParamList>();

function AppInner() {
  const { isLoggedIn } = useLoggedInStore();

  return isLoggedIn ? (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="PopUpDetailScreen" component={PopUpDetailScreen} />
      <Stack.Screen name="LikeScreen" component={LikeScreen} />
      <Stack.Screen name="MyPageScreen" component={MyPageScreen} />
    </Stack.Navigator>
  ) : (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      <RootStack.Screen name="LoginScreen" component={LoginScreen} />
      <RootStack.Screen name="RegisterScreen" component={RegisterScreen} />
    </RootStack.Navigator>
  );
}

export default AppInner;
