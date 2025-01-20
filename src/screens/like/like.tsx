import React, { useState } from 'react';
import { View, FlatList, Pressable } from 'react-native';

import { popUpDummyData } from './dummyData';

import CardComponent from '@components/popUp/card';
import SwitchComponent from '@components/like/switch';

import SafeArea from '@providers/safeArea';

import { LikeScreenProps } from '@type/stack/type';

import BackArrow from '@assets/blackLeftArrow.svg';

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
        <View className="my-2">
          <Pressable onPress={() => navigation.goBack()} className="ml-[3px] flex self-start p-3">
            <BackArrow />
          </Pressable>

          {/* 찜한 공간과 찜한 공고 type을 전환하는 스위치 컴포넌트 */}
          <SwitchComponent type={type} handleType={handleType} />
        </View>

        {type === 'popUp' && (
          <FlatList
            className="px-5"
            // 렌더링하는 전체 데이터
            data={popUpData}
            // 각 아이템의 key 값 지정
            keyExtractor={(item) => item.id.toString()}
            // 아이템들을 렌더링하는 메서드
            renderItem={({ item }) => (
              <CardComponent storeData={item} onLike={handleLike} navigation={navigation} />
            )}
            // FlatList의 최상단에 렌더링되는 Header 아이템
            ListHeaderComponent={<View className="h-6" />}
            // FlatList의 최하단에 렌더링되는 Footer 아이템
            ListFooterComponent={<View className="h-16" />}
            // 렌더링 되는 아이템들 사이의 간격
            ItemSeparatorComponent={() => <View className="h-4" />}
          />
        )}
      </View>
    </SafeArea>
  );
};

export default LikeScreen;
