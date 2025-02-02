import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';

// 로그인 이전 유저에 대한 스크린
export type RootStackParamList = {
  HomeScreen: undefined;

  // 로그인 스크린
  LoginScreen: undefined;

  // 회원가입 스크린
  RegisterScreen: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;
export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;
export type RegisterScreenProps = NativeStackScreenProps<RootStackParamList, 'RegisterScreen'>;

// 로그인한 유저에 대한 스크린
export type StackParamList = {
  BottomNavigation: { screen: keyof BottomNavigationParamList } | undefined;

  PopUpScreen: undefined;
  PopUpDetailScreen: { id: number };

  RecruitScreen: undefined;

  // 좋아요 스크린
  LikeScreen: undefined;

  // 마이페이지 스크린
  MyPageScreen: undefined;

  // 쪽지함 스크린
  ChatBoxScreen: undefined;
  // 쪽지방 스크린
  ChatRoomScreen: { roomId: number };

  // 예약완료 스크린
  ReservationCompleteScreen: undefined;
};

export type PopUpScreenProps = NativeStackScreenProps<StackParamList, 'PopUpScreen'>;
export type PopUpDetailScreenProps = NativeStackScreenProps<StackParamList, 'PopUpDetailScreen'>;
export type RecruitScreenProps = NativeStackScreenProps<StackParamList, 'RecruitScreen'>;
export type LikeScreenProps = NativeStackScreenProps<StackParamList, 'LikeScreen'>;
export type MyPageScreenProps = NativeStackScreenProps<StackParamList, 'MyPageScreen'>;
export type ChatBoxScreenProps = NativeStackScreenProps<StackParamList, 'ChatBoxScreen'>;
export type ChatRoomScreenProps = NativeStackScreenProps<StackParamList, 'ChatRoomScreen'>;
export type ReservationCompleteScreenProps = NativeStackScreenProps<
  StackParamList,
  'ReservationCompleteScreen'
>;

export type BottomNavigationParamList = {
  PopUpScreen: undefined;
  RecruitScreen: undefined;
  MyPageScreen: undefined;
};

export type HomeScreenParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

export type LoginScreenParamList = {
  HomeScreen: undefined;
};

export type HomeScreenProp = NativeStackNavigationProp<HomeScreenParamList>;
export type LoginScreenProp = NativeStackNavigationProp<LoginScreenParamList>;
