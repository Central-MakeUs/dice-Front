import React from 'react';
import { View, Pressable } from 'react-native';
import { useLoggedInStore } from '@zustands/member/store';

import { PopUpScreenProps, RecruitScreenProps } from '@type/stack/type';

import Chat from '@assets/topNavigation/chat.svg';
import Heart from '@assets/topNavigation/heart.svg';
import Logo from '@assets/topNavigation/logo-white.svg';

interface TopNavigationProps {
  // type: 'popUp' | 'recruit';
  // handleType: (type: 'popUp' | 'recruit') => void;
  navigation: PopUpScreenProps['navigation'] | RecruitScreenProps['navigation'];
}

const TopNavigation: React.FC<TopNavigationProps> = ({
  navigation,

  //  type, handleType
}) => {
  const { setIsLoggedIn } = useLoggedInStore();

  // const navigation = useNavigation<TopNavigationProp>();

  // const width = Dimensions.get('screen').width;
  // const translateX = useRef(new Animated.Value(0)).current;

  // const [switchWidth, setSwitchWidth] = useState<number>(0);

  // const handleLayout = (event: any) => {
  //   const { width } = event.nativeEvent.layout;
  //   setSwitchWidth(width);
  // };

  // const slideAnimation = () => {
  //   if (type === 'popUp') {
  //     handleType('recruit');
  //   } else {
  //     handleType('popUp');
  //   }

  //   Animated.timing(translateX, {
  //     toValue: type === 'recruit' ? 0 : 73,
  //     duration: 200,
  //     useNativeDriver: true,
  //   }).start();
  // };

  return (
    <View className="fixed z-10 flex h-14 w-full flex-row items-center justify-between bg-black py-1 pl-5">
      <Pressable onPress={() => setIsLoggedIn(false)}>
        <Logo />
      </Pressable>

      {/* <Pressable
        onPress={() => slideAnimation()}
        onLayout={handleLayout}
        style={{ left: (width - switchWidth) / 2 }}
        className={`absolute flex flex-row items-center rounded-full bg-white p-1 ${
          type === 'popUp' ? 'text-white' : 'text-black'
        }`}
      >
        <Animated.View
          style={{
            transform: [{ translateX }],
          }}
          className="absolute left-1 top-1 h-full w-1/2 rounded-full bg-black"
        />
        <Text className={`${type === 'popUp' && 'text-white'} p-3 font-BTN1 text-BTN1`}>
          팝업공간
        </Text>
        <Text className={`${type === 'recruit' && 'text-white'} p-3 font-BTN1 text-BTN1`}>
          지원공고
        </Text>
      </Pressable> */}

      <View className="flex flex-row">
        <Pressable onPress={() => navigation.navigate('LikeScreen')} className="p-3">
          <Heart />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('ChatScreen')} className="p-3">
          <Chat />
        </Pressable>
      </View>
    </View>
  );
};

export default TopNavigation;
