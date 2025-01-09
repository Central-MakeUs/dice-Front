import React, { useState } from 'react';
import { Text, Image, FlatList, Pressable, ScrollView } from 'react-native';
import { View, Linking, Platform, Dimensions, SafeAreaView } from 'react-native';

import { dummyData } from './dummyData';

import { PopUpDetailScreenProps } from '@type/stack/type';

import LeftArrow from '@assets/leftArrow.svg';
import Globe from '@assets/popUpDetail/globe.svg';
import Place from '@assets/popUpDetail/place.svg';
import Phone from '@assets/popUpDetail/phone.svg';
import Message from '@assets/popUpDetail/message.svg';

const PopUpDetailScreen = ({ navigation }: PopUpDetailScreenProps) => {
  const width = Dimensions.get('screen').width;

  const toBack = () => {
    navigation.goBack();
  };

  const [detailData] = useState(dummyData);

  const [isFullDescription, setIsFullDescription] = useState<boolean>(false);
  const [numOfUsageInformation, setNumOfUsageInformation] = useState<number>(3);

  const makeCall = () => {
    if (dummyData.phoneNumber != '' && dummyData.phoneNumber.length > 0) {
      if (Platform.OS === 'android') {
        Linking.openURL(`tel:${dummyData.phoneNumber}`);
      } else {
        // iOS에서 전화 걸기
        Linking.openURL(`tel://${dummyData.phoneNumber}`);
      }
    }
  };

  return (
    <View className="flex-1">
      <SafeAreaView className="flex-1 bg-black">
        <View className="ml-[3px] flex flex-row items-start justify-start">
          <Pressable onPress={toBack} className="p-3">
            <LeftArrow />
          </Pressable>
        </View>

        <ScrollView
          contentContainerStyle={{ paddingBottom: 64, backgroundColor: 'white' }}
          bounces={false}
        >
          <FlatList
            className="mb-8"
            data={detailData.imageList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item }}
                style={{ width: width, height: width, resizeMode: 'cover' }}
              />
            )}
            horizontal={true}
            nestedScrollEnabled={true}
            snapToInterval={width} // 화면 너비만큼 스냅
            decelerationRate="fast" // 스크롤 속도 줄임
            showsHorizontalScrollIndicator={false} // 스크롤 바 숨김
          />

          <View className="px-5">
            <Text className="font-H2 text-H2">{detailData.name}</Text>
            <Text className="mb-4 font-SUB2 text-SUB2 text-medium_gray">{detailData.subtitle}</Text>
            <Text className="font-SUB2 text-SUB2 text-light_gray">
              1일 대여
              <Text className="font-SUB1 text-SUB1 text-black">
                {' '}
                {detailData.price.toLocaleString()}원
              </Text>
            </Text>

            <View className="my-6 h-[1px] bg-[#EEEEEE]" />

            <View className="mb-5 flex flex-row space-x-5">
              <View className="flex flex-col justify-center space-y-2">
                <Text className="font-CAP1 text-CAP1 text-deep_gray">공간유형</Text>
                <Text className="font-CAP1 text-CAP1 text-deep_gray">영업 시간</Text>
                <Text className="font-CAP1 text-CAP1 text-deep_gray">수용인원</Text>
              </View>

              <View className="flex flex-col justify-center space-y-2">
                <Text className="font-CAP1 text-CAP1 text-deep_gray">{detailData.type}</Text>
                <Text className="font-CAP1 text-CAP1 text-deep_gray">{detailData.time}</Text>
                <Text className="font-CAP1 text-CAP1 text-deep_gray">
                  최대 {detailData.numOfPeople}인
                </Text>
              </View>
            </View>

            <View className="flex flex-row flex-wrap gap-1">
              {detailData.hashTagList.map((item, index) => (
                <Text
                  key={index}
                  className="rounded-full border border-[#EEEEEE] px-2.5 py-1 font-CAP1 text-CAP1 text-light_gray"
                >
                  # <Text className="text-deep_gray">{item}</Text>
                </Text>
              ))}
            </View>
          </View>

          <View className="my-6 h-2 bg-light_gray" />

          <View className="space-y-4 px-5">
            <Text className="font-SUB2 text-SUB2">팝업공간 소개</Text>
            <Text className="font-BODY1 text-BODY1 text-deep_gray">
              {isFullDescription
                ? detailData.description
                : detailData.description.slice(0, 90) + '...'}
            </Text>
            <Pressable
              onPress={() => setIsFullDescription(!isFullDescription)}
              className="rounded-lg border border-[#EEEEEE] px-4 py-3"
            >
              <Text className="text-center font-BTN1 text-BTN1 text-medium_gray">
                {isFullDescription ? '간략히 보기' : '자세히 보기'}
              </Text>
            </Pressable>
          </View>

          <View className="my-6 h-2 bg-light_gray" />

          <View className="space-y-4 px-5">
            <Text className="font-SUB2 text-SUB2">팝업공간 사진</Text>
            <FlatList
              data={detailData.spaceImageList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Image
                  source={{ uri: item }}
                  className="h-[220px] w-[220px] rounded-xl object-cover"
                  // style={{ width: 220, height: 220, resizeMode: 'cover' }}
                />
              )}
              horizontal={true}
              nestedScrollEnabled={true}
              ItemSeparatorComponent={() => <View className="w-3" />}
            />
          </View>

          <View className="my-6 h-2 bg-light_gray" />

          <View className="space-y-4 px-5">
            <Text className="font-SUB2 text-SUB2">위치 안내</Text>
            <View className="space-y-1">
              <View className="flex flex-row items-center space-x-0.5">
                <Place />
                <Text className="font-BODY1 text-BODY1 text-dark_gray">{detailData.location}</Text>
              </View>
              <Text className="pl-[26px] font-BODY1 text-BODY1 text-medium_gray">
                · {detailData.locationDescription}
              </Text>
            </View>
            <View className="h-40 w-full rounded-xl bg-black" />
            <Pressable className="flex flex-row justify-center space-x-1 rounded-lg border border-[#EEEEEE] px-4 py-3">
              <Globe />
              <Text className="text-center font-BTN1 text-BTN1 text-medium_gray">
                웹사이트 바로가기
              </Text>
            </Pressable>
          </View>

          <View className="my-6 h-2 bg-light_gray" />

          <View className="space-y-4 px-5">
            <Text className="font-SUB2 text-SUB2">시설 이용 안내</Text>
            <View className="flex flex-col space-y-1">
              {detailData.usageInformation.slice(0, numOfUsageInformation).map((item, index) => (
                <Text key={index} className="font-BODY1 text-BODY1 text-deep_gray">
                  · {item}
                </Text>
              ))}
            </View>
            <Pressable
              onPress={() =>
                numOfUsageInformation === 3
                  ? setNumOfUsageInformation(detailData.usageInformation.length)
                  : setNumOfUsageInformation(3)
              }
              className="rounded-lg border border-[#EEEEEE] px-4 py-3"
            >
              <Text className="text-center font-BTN1 text-BTN1 text-medium_gray">
                {numOfUsageInformation === 3 ? '자세히 보기' : '간략히 보기'}
              </Text>
            </Pressable>
          </View>

          <View className="my-6 h-2 bg-light_gray" />

          <View className="space-y-4 px-5">
            <Text className="font-SUB2 text-SUB2">공지사항 안내</Text>
            <View className="flex flex-col space-y-1 rounded-lg bg-light_gray p-4">
              {detailData.noticeInformation.map((item, index) => (
                <Text key={index} className="font-BODY1 text-BODY1 text-deep_gray">
                  * {item}
                </Text>
              ))}
            </View>
          </View>
        </ScrollView>

        <View className="fixed bottom-0 flex flex-row space-x-3 border-t border-t-[#EEEEEE] bg-white px-5 py-4">
          <Pressable onPress={makeCall} className="rounded-lg border border-[#EEEEEE] px-4 py-3">
            <Phone />
          </Pressable>
          <Pressable className="flex flex-1 flex-row items-center justify-center space-x-2 rounded-lg border border-[#EEEEEE] bg-black px-4 py-3">
            <Message />
            <Text className="font-BTN1 text-BTN1 text-white">채팅하기</Text>
          </Pressable>
        </View>
      </SafeAreaView>
      <SafeAreaView className="bg-white" />
    </View>
  );
};

export default PopUpDetailScreen;
