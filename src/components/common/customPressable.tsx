import React, { useState } from 'react';
import { Pressable } from 'react-native';
import CustomText from './customText';

interface CustomPressableProps {
  onPress: any;
  disabled: boolean;
  color: string;
  text: string;
  textColor: string;
}

const CustomPressable: React.FC<CustomPressableProps> = ({
  onPress,
  disabled,
  color,
  text,
  textColor,
}) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      className={`py-2 ${isPressed && 'opacity-50'} ${color}`}
    >
      <CustomText className={`text-center ${textColor}`}>{text}</CustomText>
    </Pressable>
  );
};

export default CustomPressable;
