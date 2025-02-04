import Icon from '@/components/icon/icon';
import SvgComponent from '@/components/icon/icon';
import { colors } from '@/constants/Colors';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          android: {
            height: 72,
          },
          default: {
            borderWidth: 1,
            borderColor: '#EEEEEE',
          },
        }),
      }}
    >
      <Tabs.Screen
        name="space"
        options={{
          title: '팝업공간',
          tabBarIcon: ({ focused }) => <Icon.Space selected={focused} />,
          tabBarActiveTintColor: colors.dark_gray,
          tabBarInactiveTintColor: colors.light_gray,
          tabBarLabelStyle: {
            marginTop: 8,
            fontSize: 12,
            fontWeight: 'medium',
          },
        }}
      />
      <Tabs.Screen
        name="announcement"
        options={{
          title: '지원공고',
          tabBarIcon: ({ focused }) => <Icon.Announcement selected={focused} />,
          tabBarActiveTintColor: colors.dark_gray,
          tabBarInactiveTintColor: colors.light_gray,
          tabBarLabelStyle: {
            marginTop: 8,
            fontSize: 12,
            fontWeight: 'medium',
          },
        }}
      />
      <Tabs.Screen
        name="myPage"
        options={{
          title: '나의정보',
          tabBarIcon: ({ focused }) => <Icon.MyPage selected={focused} />,
          tabBarActiveTintColor: colors.dark_gray,
          tabBarInactiveTintColor: colors.light_gray,
          tabBarLabelStyle: {
            marginTop: 8,
            fontSize: 12,
            fontWeight: 'medium',
          },
        }}
      />
    </Tabs>
  );
}
