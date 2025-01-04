import React from 'react';
import { View, Pressable, TextInput, ScrollView } from 'react-native';

import InputBox from '@components/common/inputBox';
import CustomText from '@components/common/customText';

import SafeArea from '@providers/safeArea';
import KeyboardAvoid from '@providers/keyboardAvoid';

import { CreateScreenProps } from '@type/stack/type';

import ExampleImage from '@assets/example.svg';

const CreateScreen = ({ navigation }: CreateScreenProps) => {
  return (
    <SafeArea>
      <KeyboardAvoid>
        <ScrollView
          contentContainerStyle={{ rowGap: 40, paddingBottom: 16, paddingHorizontal: 16 }}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Pressable onPress={() => navigation.goBack()}>
              <CustomText>뒤로가기</CustomText>
            </Pressable>
          </View>
          <CustomText>생성 스크린</CustomText>
          <ExampleImage width={120} height={120} />
          <InputBox />

          <View className="flex flex-col justify-center space-y-1.5 border border-black">
            <CustomText>ㅎㅇ</CustomText>
            <TextInput placeholderTextColor="#ACADB4" />
          </View>

          <View className="flex flex-col justify-center space-y-1.5 border border-black">
            <CustomText>ㅎㅇ</CustomText>
            <TextInput placeholderTextColor="#ACADB4" />
          </View>

          <View className="flex flex-col justify-center space-y-1.5 border border-black p-4">
            <CustomText>ㅎㅇ</CustomText>
            <TextInput placeholderTextColor="#ACADB4" />
          </View>
        </ScrollView>
      </KeyboardAvoid>
    </SafeArea>
  );
};

export default CreateScreen;
