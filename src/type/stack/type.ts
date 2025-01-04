import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  HomeScreen: undefined;
};

export type StackParamList = {
  BottomNavigation: { screen: keyof BottomNavigationParamList } | undefined;

  MainScreen: undefined;

  CreateScreen: undefined;
};

export type BottomNavigationParamList = {
  MainScreen: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

export type MainScreenProps = NativeStackScreenProps<StackParamList, 'MainScreen'>;
export type CreateScreenProps = NativeStackScreenProps<StackParamList, 'CreateScreen'>;
