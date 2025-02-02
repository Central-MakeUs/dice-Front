import React, { useState } from 'react';
import { View, SectionList, SafeAreaView } from 'react-native';

import { recruitItemDummy } from './recruitItemDummy';

import ChipContainer from '@components/common/chipContainer';
import FilterContainer from '@components/common/filterContainer';
import RecruitItemComponent from '@components/recruit/recruitItem';
import TopNavigation from '@components/topNavigation/topNavigation';
import RecruitHeaderComponent from '@components/recruit/recruitHeader';

import { RecruitScreenProps } from '@type/stack/type';
import { RecruitItem } from '@type/recruit/recruit.type';

const RecruitScreen = ({ navigation }: RecruitScreenProps) => {
  const [recruitItem, setRecruitItem] = useState<RecruitItem[]>(recruitItemDummy);
  const [filteringType, setFilteringType] = useState<string>('');

  const handleLike = (id: number) => {
    setRecruitItem((prevData) =>
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

  const chipList = ['지역', '지원대상', '모집상태'];

  const handleFilteringType = (type: string) => {
    setFilteringType(type);
  };

  return (
    <View className="flex-1">
      <SafeAreaView className="flex-1 bg-black">
        <TopNavigation navigation={navigation} />
        <View className="flex-1 space-y-4 bg-white">
          <SectionList
            sections={[{ title: 'chip', data: recruitItem }]}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View className="px-5">
                <RecruitItemComponent
                  recruitItem={item}
                  onLike={handleLike}
                  navigation={navigation}
                />
              </View>
            )}
            renderSectionHeader={({ section }) =>
              section.title === 'chip' ? (
                <ChipContainer chipList={chipList} openModal={handleFilteringType} />
              ) : null
            }
            ListHeaderComponent={<RecruitHeaderComponent />}
            ListFooterComponent={<View className="h-16" />}
            ItemSeparatorComponent={() => <View className="h-4" />}
            bounces={false}
          />
        </View>
      </SafeAreaView>

      <FilterContainer
        isVisible={filteringType !== ''}
        type={filteringType}
        handleType={handleFilteringType}
      />
    </View>
  );
};

export default RecruitScreen;
