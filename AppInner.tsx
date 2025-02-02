import React from 'react';
import { useLoggedInStore } from '@zustands/member/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LikeScreen from '@screens/like/like';
import LoginScreen from '@screens/login/login';
import PopUpScreen from '@screens/popUp/popUp';
import HomeScreen from '@screens/home/homeScreen';
import MyPageScreen from '@screens/myPage/myPage';
import ChatBoxScreen from '@screens/chatBox/chatBox';
import RecruitScreen from '@screens/recruit/recruit';
import RegisterScreen from '@screens/register/register';
import ChatRoomScreen from '@screens/chatRoom/chatRoom';
import PopUpDetailScreen from '@screens/popUpDetail/popUpDetail';
import ReservationCompleteScreen from '@screens/reservation/complete';

import BottomNavigation from '@components/bottomNavigation/bottomNavigation';

import { StackParamList, RootStackParamList } from '@type/stack/type';

const Stack = createNativeStackNavigator<StackParamList>();
const RootStack = createNativeStackNavigator<RootStackParamList>();

function AppInner() {
  const { isLoggedIn } = useLoggedInStore();

  return isLoggedIn ? (
    <Stack.Navigator initialRouteName="BottomNavigation" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />

      <Stack.Screen name="PopUpScreen" component={PopUpScreen} />
      <Stack.Screen name="PopUpDetailScreen" component={PopUpDetailScreen} />
      <Stack.Screen name="RecruitScreen" component={RecruitScreen} />

      <Stack.Screen name="LikeScreen" component={LikeScreen} />
      <Stack.Screen name="MyPageScreen" component={MyPageScreen} />

      <Stack.Screen name="ChatRoomScreen" component={ChatRoomScreen} />
      <Stack.Screen name="ChatBoxScreen" component={ChatBoxScreen} />

      <Stack.Screen name="ReservationCompleteScreen" component={ReservationCompleteScreen} />
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
