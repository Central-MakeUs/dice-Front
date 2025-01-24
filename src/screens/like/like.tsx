import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import { popUpDummyData } from './dummyData';

import CardComponent from '@components/popUp/card';
import HeaderComponent from '@components/like/header';

import SafeArea from '@providers/safeArea';

import { LikeScreenProps } from '@type/stack/type';

const LikeScreen = ({ navigation }: LikeScreenProps) => {
  const [type, setType] = useState<string>('popUp');

  const handleType = () => {
    if (type === 'popUp') {
      setType('recruit');
    } else {
      setType('popUp');
    }
  };

  const [popUpData, setPopUpData] = useState(popUpDummyData);

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
    <SafeArea>
      <View className="flex-1">
        <FlatList
          stickyHeaderIndices={[0]}
          // 렌더링하는 전체 데이터
          data={popUpData}
          // 각 아이템의 key 값 지정
          keyExtractor={(item) => item.id.toString()}
          // 아이템들을 렌더링하는 메서드
          renderItem={({ item }) => (
            <View className="px-5">
              <CardComponent storeData={item} onLike={handleLike} navigation={navigation} />
            </View>
          )}
          // FlatList의 최상단에 렌더링되는 Header 아이템
          ListHeaderComponent={
            <HeaderComponent type={type} handleType={handleType} navigation={navigation} />
          }
          // FlatList의 최하단에 렌더링되는 Footer 아이템
          ListFooterComponent={<View className="h-16" />}
          // 렌더링 되는 아이템들 사이의 간격
          ItemSeparatorComponent={() => <View className="h-4" />}
        />
      </View>
    </SafeArea>
  );
};

export default LikeScreen;
