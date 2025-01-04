import React, { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const SafeArea = ({ children }: PropsWithChildren) => {
  return <SafeAreaView className={`flex-1 bg-white`}>{children}</SafeAreaView>;
};

export default SafeArea;
