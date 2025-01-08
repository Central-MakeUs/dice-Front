import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';

interface CustomButtonProps {
  onPress: any;
  disabled: boolean;
  color: string;
  text: string;
  textColor: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
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
      <Text className={`text-center font-BTN1 text-BTN1 ${textColor}`}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;
