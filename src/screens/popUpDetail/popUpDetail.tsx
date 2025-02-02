import React, { useRef, useState, useEffect } from 'react';
import { View, Dimensions, SafeAreaView } from 'react-native';
import {
  NaverMapView,
  NaverMapViewRef,
  NaverMapMarkerOverlay,
} from '@mj-studio/react-native-naver-map';
import {
  Text,
  Image,
  FlatList,
  Pressable,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

import { dummyData } from './dummyData';

import DateModalComponent from '@components/popUpDetail/dateModal';

import { getGeocode } from '@server/naverMap';

import { makeCall } from '@utils/phoneCall';
import { openWebSite } from '@utils/website';

import { PopUpDetailScreenProps } from '@type/stack/type';

import LikeIcon from '@assets/popUp/like.svg';
import LeftArrow from '@assets/leftArrow.svg';
import Globe from '@assets/popUpDetail/globe.svg';
import Place from '@assets/popUpDetail/place.svg';
import Phone from '@assets/popUpDetail/phone.svg';
import Marker from '@assets/popUpDetail/marker.svg';
import Message from '@assets/popUpDetail/message.svg';
import DownArrow from '@assets/popUpDetail/downArrow.svg';
import FilledLikeIcon from '@assets/popUp/filled-like.svg';
import Reservation from '@assets/popUpDetail/reservation.svg';

const PopUpDetailScreen = ({ navigation }: PopUpDetailScreenProps) => {
  const width = Dimensions.get('screen').width;

  const mapRef = useRef<NaverMapViewRef>(null);

  const toBack = () => {
    navigation.goBack();
  };

  const [detailData, setDetailData] = useState(dummyData);

  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(offsetX / width);
    setCurrentIndex(index + 1);
  };

  // 해당 팝업공간의 위도/경도를 저장하는 state
  const [geoLocation, setGeoLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  // 주소를 통해서 위도/경도를 받아오는 메서드
  const handleGeocode = async () => {
    const response = await getGeocode(dummyData.location);

    setGeoLocation({
      latitude: parseFloat(response.addresses[0].y),
      longitude: parseFloat(response.addresses[0].x),
    });
  };

  useEffect(() => {
    handleGeocode();
  }, []);

  const [isFullDescription, setIsFullDescription] = useState<boolean>(false);
  const [numOfUsageInformation, setNumOfUsageInformation] = useState<number>(3);

  const handleLike = () => {
    setDetailData((prev) => ({
      ...prev,
      isLiked: !prev.isLiked,
      likeCount: prev.isLiked ? prev.likeCount - 1 : prev.likeCount + 1,
    }));
  };

  const [isReservationModalVisible, setIsReservationModalVisible] = useState<boolean>(false);

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
          <View className="relative">
            <FlatList
              data={detailData.imageList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Image
                  source={{ uri: item }}
                  style={{ width: width, height: width, resizeMode: 'cover' }}
                />
              )}
              bounces={false}
              horizontal={true}
              nestedScrollEnabled={true}
              disableIntervalMomentum={false}
              scrollEventThrottle={16}
              snapToInterval={width} // 화면 너비만큼 스냅
              decelerationRate="fast" // 스크롤 속도 줄임
              showsHorizontalScrollIndicator={false} // 스크롤 바 숨김
              onScroll={handleScroll}
            />
            <View className="absolute bottom-5 right-5 rounded-full bg-basic px-1.5 py-1">
              <Text className="font-BTN1 text-BTN1 text-white">
                {currentIndex} / {detailData.imageList.length}
              </Text>
            </View>
          </View>

          <View className="mt-8 px-5">
            <View className="flex flex-row items-start justify-between">
              <View className="flex flex-col">
                <Text className="font-H2 text-H2 leading-H2 text-black">{detailData.name}</Text>
                <Text className="mb-4 font-SUB3 text-SUB3 leading-SUB3 text-semiLight_gray">
                  {detailData.subtitle}
                </Text>
                <View className="flex flex-col">
                  <Text className="font-CAP1 text-CAP1 leading-CAP1 text-light_gray">1일 대여</Text>

                  <View className="flex flex-row items-center space-x-1.5">
                    <Text className="font-SUB2 text-SUB2 leading-SUB2 text-purple">
                      {detailData.salePercent}%
                    </Text>
                    <Text className="font-SUB1 text-SUB1 leading-SUB1 text-black">
                      {detailData.price.toLocaleString()}원
                    </Text>
                  </View>
                </View>
              </View>

              <Pressable onPress={handleLike} className="flex flex-col items-center">
                {detailData.isLiked ? <FilledLikeIcon /> : <LikeIcon />}
                <Text className="font-CAP2 text-CAP2 text-semiLight_gray">
                  {detailData.likeCount}
                </Text>
              </Pressable>
            </View>

            <View className="my-6 h-[1px] bg-stroke" />

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
                  className="rounded-full border border-stroke px-2.5 py-1 font-CAP1 text-CAP1 text-light_gray"
                >
                  # <Text className="text-deep_gray">{item}</Text>
                </Text>
              ))}
            </View>
          </View>

          <View className="my-6 h-2 bg-back_gray" />

          <View className="space-y-4 px-5">
            <Text className="font-SUB2 text-SUB2">팝업공간 소개</Text>
            <Text className="font-BODY1 text-BODY1 text-deep_gray">
              {isFullDescription
                ? detailData.description
                : detailData.description.slice(0, 90) + '...'}
            </Text>
            <Pressable
              onPress={() => setIsFullDescription(!isFullDescription)}
              className="relative flex flex-row items-center justify-center rounded-lg border border-stroke p-4"
            >
              <Text className="text-center font-BTN1 text-BTN1 text-medium_gray">
                {isFullDescription ? '간략히 보기' : '자세히 보기'}
              </Text>
              <View className={`absolute right-4 ${isFullDescription && 'rotate-180'}`}>
                <DownArrow />
              </View>
            </Pressable>
          </View>

          <View className="my-6 h-2 bg-back_gray" />

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
            <NaverMapView
              ref={mapRef}
              style={{ width: '100%', height: 160, borderRadius: 12, flex: 1 }}
              mapType="Basic"
              isShowLocationButton={false}
              isShowZoomControls={false}
              isShowScaleBar={false}
              locale="ko"
              region={{
                latitude: geoLocation.latitude,
                longitude: geoLocation.longitude,
                latitudeDelta: 0.001,
                longitudeDelta: -0.00001,
              }}
            >
              <NaverMapMarkerOverlay
                key={'marker-0'}
                latitude={geoLocation.latitude}
                longitude={geoLocation.longitude}
                anchor={{ x: 0.5, y: 1 }}
                width={32}
                height={32}
              >
                <View className="flex-1">
                  <Marker />
                </View>
              </NaverMapMarkerOverlay>
            </NaverMapView>

            <Pressable
              onPress={() => openWebSite(detailData.homepage)}
              className="flex flex-row justify-center space-x-1 rounded-lg border border-stroke p-4"
            >
              <Globe />
              <Text className="text-center font-BTN1 text-BTN1 text-medium_gray">
                웹사이트 바로가기
              </Text>
            </Pressable>
          </View>

          <View className="my-6 h-2 bg-back_gray" />

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
              className="relative flex flex-row items-center justify-center rounded-lg border border-stroke p-4"
            >
              <Text className="text-center font-BTN1 text-BTN1 text-medium_gray">
                {numOfUsageInformation === 3 ? '자세히 보기' : '간략히 보기'}
              </Text>
              <View className={`absolute right-4 ${numOfUsageInformation !== 3 && 'rotate-180'}`}>
                <DownArrow />
              </View>
            </Pressable>
          </View>

          <View className="my-6 h-2 bg-back_gray" />

          <View className="space-y-4 px-5">
            <Text className="font-SUB2 text-SUB2">공지사항 안내</Text>
            <View className="flex flex-col space-y-1 rounded-lg bg-back_gray p-4">
              {detailData.noticeInformation.map((item, index) => (
                <Text key={index} className="font-BODY1 text-BODY1 text-deep_gray">
                  * {item}
                </Text>
              ))}
            </View>
          </View>
        </ScrollView>

        <View className="fixed bottom-0 flex flex-row space-x-2 border-t border-t-stroke bg-white px-5 py-4">
          <Pressable
            onPress={() => makeCall(detailData.phoneNumber)}
            className="rounded-lg border border-stroke p-3.5"
          >
            <Phone />
          </Pressable>

          <Pressable onPress={() => {}} className="rounded-lg border border-stroke p-3.5">
            <Message />
          </Pressable>

          <Pressable
            onPress={() => setIsReservationModalVisible(true)}
            className="flex flex-1 flex-row items-center justify-center space-x-2 rounded-lg border border-stroke bg-black px-4 py-3.5"
          >
            <Reservation />
            <Text className="font-BTN1 text-BTN1 leading-BTN1 text-white">공간 예약하기</Text>
          </Pressable>
        </View>
      </SafeAreaView>
      <SafeAreaView className="bg-white" />

      <DateModalComponent
        isVisible={isReservationModalVisible}
        closeModal={() => setIsReservationModalVisible(false)}
      />
    </View>
  );
};

export default PopUpDetailScreen;
