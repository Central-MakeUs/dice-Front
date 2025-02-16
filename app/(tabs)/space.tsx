import { StatusBar } from 'expo-status-bar';
import React, { Suspense, useState } from 'react';
import { View, SectionList, SafeAreaView } from 'react-native';

import ChipContainer from '@/components/common/chipContainer';
import FilterContainer from '@/components/common/filterContainer';
import CardComponent from '@/components/popUp/card';
import HeaderComponent from '@/components/popUp/header';
import TopNavigation from '@/components/topNavigation/topNavigation';
import { useToggleSpaceLike } from '@/hooks/like/like';
import { useGetFilteredSpaceLists } from '@/hooks/space/space';

const SpaceScreen = () => {
  const { data: spaceList, fetchNextPage, hasNextPage, refetch } = useGetFilteredSpaceLists();
  const { mutateAsync: spaceLike } = useToggleSpaceLike(refetch);

  const chipList = ['지역', '가격', '수용인원', '정렬'];

  const [filteringType, setFilteringType] = useState<string>('');

  const handleFilteringType = (type: string) => {
    setFilteringType(type);
  };

  return (
    <Suspense>
      <View className="flex-1">
        <StatusBar style="light" />
        <SafeAreaView className="flex-1 bg-black">
          <TopNavigation />

          <View className="flex-1 gap-y-4 bg-white pb-16">
            <SectionList
              // section의 title과 데이터
              sections={[{ title: 'chip', data: spaceList.pages.flatMap((page) => page.content) }]}
              // 각 아이템의 key 값 지정
              keyExtractor={(item) => item.id.toString()}
              // 아이템들을 렌더링하는 메서드
              renderItem={({ item }) => (
                <View className="px-5">
                  <CardComponent spaceData={item} toggleLike={spaceLike} />
                </View>
              )}
              // sticky한 ChipContainer를 렌더링하기 위한 메서드
              renderSectionHeader={({ section }) =>
                section.title === 'chip' ? (
                  <ChipContainer chipList={chipList} openModal={handleFilteringType} />
                ) : null
              }
              // SectionList의 최상단에 렌더링되는 Header 아이템
              ListHeaderComponent={<HeaderComponent />}
              // FlatList의 최하단에 렌더링되는 Footer 아이템
              ListFooterComponent={<View className="h-16" />}
              // 렌더링 되는 아이템들 사이의 간격
              ItemSeparatorComponent={() => <View className="h-4" />}
              onEndReached={() => {
                if (hasNextPage) {
                  fetchNextPage();
                }
              }}
              // 양 끝에서 스크롤 방지
              bounces={false}
              nestedScrollEnabled={true}
            />
          </View>
        </SafeAreaView>

        <FilterContainer
          isVisible={filteringType !== ''}
          type={filteringType}
          handleType={handleFilteringType}
        />
      </View>
    </Suspense>
  );
};

export default SpaceScreen;
