import React, { useState } from 'react';
import { View, SectionList, SafeAreaView } from 'react-native';

import { dummyData } from './dummyData';

import CardComponent from '@components/popUp/card';
import HeaderComponent from '@components/popUp/header';
import ChipContainer from '@components/popUp/chipContainer';
import TopNavigation from '@components/topNavigation/topNavigation';

import { PopUpScreenProps } from '@type/stack/type';

const PopUpScreen = ({ navigation }: PopUpScreenProps) => {
  const [popUpData, setPopUpData] = useState(dummyData);

  const handleLike = (id: number) => {
    setPopUpData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? {
              ...item,
              isLiked: !item.isLiked,
              likeCount: item.isLiked ? item.likeCount - 1 : item.likeCount + 1,
            }
          : item,
      ),
    );
  };

  return (
    <View className="flex-1">
      <SafeAreaView className="flex-1 bg-black">
        <TopNavigation navigation={navigation} />

        <View className="flex-1 space-y-4 bg-white">
          <SectionList
            // section의 title과 데이터
            sections={[{ title: 'chip', data: popUpData }]}
            // 각 아이템의 key 값 지정
            keyExtractor={(item) => item.id.toString()}
            // 아이템들을 렌더링하는 메서드
            renderItem={({ item }) => (
              <View className="px-5">
                <CardComponent storeData={item} onLike={handleLike} navigation={navigation} />
              </View>
            )}
            // sticky한 ChipContainer를 렌더링하기 위한 메서드
            renderSectionHeader={({ section }) =>
              section.title === 'chip' ? <ChipContainer /> : null
            }
            // SectionList의 최상단에 렌더링되는 Header 아이템
            ListHeaderComponent={<HeaderComponent />}
            // FlatList의 최하단에 렌더링되는 Footer 아이템
            ListFooterComponent={<View className="h-16" />}
            // 렌더링 되는 아이템들 사이의 간격
            ItemSeparatorComponent={() => <View className="h-4" />}
            // 양 끝에서 스크롤 방지
            bounces={false}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default PopUpScreen;
