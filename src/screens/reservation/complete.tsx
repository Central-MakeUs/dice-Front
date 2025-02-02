import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';

import { dummyData } from './dummyData';

import SafeArea from '@providers/safeArea';

import { ReservationCompleteScreenProps } from '@type/stack/type';

import CheckIcon from '@assets/reservation/check.svg';

const ReservationCompleteScreen = ({ navigation }: ReservationCompleteScreenProps) => {
  const [reservationData] = useState(dummyData);

  const toMain = () => {
    navigation.navigate('BottomNavigation', { screen: 'PopUpScreen' });
  };

  return (
    <SafeArea>
      <View className="space-y-12 px-5 pt-[120px]">
        <View className="flex flex-col items-center space-y-10">
          <CheckIcon />
          <Text className="text-center font-H2 text-H2 leading-H2">
            예약이 완료되었습니다 :{')'}
          </Text>
        </View>

        <View className="flex flex-row justify-between rounded-lg bg-back_gray p-4">
          <View className="space-y-1">
            <Text className="font-BODY1 text-BODY1 leading-BODY1 text-medium_gray">예약 공간</Text>
            <Text className="font-BODY1 text-BODY1 leading-BODY1 text-medium_gray">예약 번호</Text>
            <Text className="font-BODY1 text-BODY1 leading-BODY1 text-medium_gray">대여 기간</Text>
          </View>

          <View className="flex flex-col items-end space-y-1">
            <Text className="font-BODY1 text-BODY1 leading-BODY1 text-dark_gray">
              {reservationData.name}
            </Text>
            <Text className="font-BODY1 text-BODY1 leading-BODY1 text-dark_gray">
              {reservationData.resevationNumber}
            </Text>
            <Text className="font-BODY1 text-BODY1 leading-BODY1 text-dark_gray">
              {reservationData.startDate} ~ {reservationData.endDate}
            </Text>
          </View>
        </View>
      </View>

      <View className="absolute bottom-[34px] flex flex-row space-x-3 border-t border-t-stroke px-5 py-4">
        <Pressable className="flex-1 rounded-lg border border-stroke bg-white px-4 py-3">
          <Text className="text-center font-BTN1 text-BTN1 leading-BTN1 text-black">
            예약 확인하기
          </Text>
        </Pressable>
        <Pressable onPress={toMain} className="flex-1 rounded-lg bg-black px-4 py-3">
          <Text className="text-center font-BTN1 text-BTN1 leading-BTN1 text-white">나가기</Text>
        </Pressable>
      </View>
    </SafeArea>
  );
};

export default ReservationCompleteScreen;
