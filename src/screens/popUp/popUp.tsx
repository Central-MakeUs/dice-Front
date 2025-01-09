import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import { dummyData } from './dummyData';

import CardComponent from '@components/popUp/card';
import HeaderComponent from '@components/popUp/header';

import { PopUpScreenProps } from '@type/stack/type';

const PopUpScreen = ({ navigation }: PopUpScreenProps) => {
  const [popUpData] = useState(dummyData);

  const [isGrid, setIsGrid] = useState<boolean>(false);

  const handleLayout = () => {
    setIsGrid(!isGrid);
  };

  return (
    <View className="flex-1 space-y-4">
      <FlatList
        // 렌더링하는 전체 데이터
        data={popUpData}
        // 각 아이템의 key 값 지정
        keyExtractor={(item) => item.id.toString()}
        // 아이템들을 렌더링하는 메서드
        renderItem={({ item }) => (
          <View className="px-5">
            <CardComponent storeData={item} navigation={navigation} />
          </View>
        )}
        // FlatList의 최상단에 렌더링되는 Header 아이템
        ListHeaderComponent={<HeaderComponent handleLayout={handleLayout} />}
        // FlatList의 최하단에 렌더링되는 Footer 아이템
        ListFooterComponent={<View className="h-16" />}
        // 렌더링 되는 아이템들 사이의 간격
        ItemSeparatorComponent={() => <View className="h-4" />}
        // 레이아웃 설정에 따른 열 개수 설정
        numColumns={isGrid ? 2 : 1}
        // 2개의 열 (Grid 형식)일 때 스타일
        columnWrapperStyle={isGrid && { columnGap: 16 }}
        // key 속성을 통해 강제 리렌더링
        key={isGrid ? 'grid' : 'list'}
      />
    </View>
  );
};

export default PopUpScreen;
