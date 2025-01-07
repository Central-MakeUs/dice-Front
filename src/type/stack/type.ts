import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';

// 로그인 이전 유저에 대한 스크린
export type RootStackParamList = {
  HomeScreen: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

// 로그인한 유저에 대한 스크린
export type StackParamList = {
  MainScreen: undefined;
  DetailScreen: { id: number };

  // 좋아요 스크린
  LikeScreen: undefined;

  // 마이페이지 스크린
  MyPageScreen: undefined;
};

export type MainScreenProps = NativeStackScreenProps<StackParamList, 'MainScreen'>;
export type PopUpScreenProps = { navigation: MainScreenProps['navigation'] };
export type RecruitScreenProps = { navigation: MainScreenProps['navigation'] };
export type DetailScreenProps = NativeStackScreenProps<StackParamList, 'DetailScreen'>;
export type LikeScreenProps = NativeStackScreenProps<StackParamList, 'LikeScreen'>;
export type MyPageScreenProps = NativeStackScreenProps<StackParamList, 'MyPageScreen'>;

// 상단 네비게이션
export type TopNavigationParamList = {
  LikeScreen: undefined;
  MyPageScreen: undefined;
};

export type TopNavigationProp = NativeStackNavigationProp<TopNavigationParamList>;
