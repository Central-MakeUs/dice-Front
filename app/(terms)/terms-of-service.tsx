import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Pressable, Platform } from 'react-native';
import WebView from 'react-native-webview';

import Icon from '@/components/icon/icon';

const TermsOfServiceScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className={`flex-1 bg-white ${Platform.OS === 'android' && 'pt-[50px]'}`}>
      <StatusBar style="dark" />
      <Pressable onPress={() => router.back()} className="ml-[3px] flex self-start p-3">
        <Icon.BlackLeftArrow />
      </Pressable>
      <WebView
        source={{
          uri: 'https://juvenile-chess-b24.notion.site/18e7ece7ecb5800e99a0eedd7976c022?pvs=4',
        }}
      />
    </SafeAreaView>
  );
};

export default TermsOfServiceScreen;
