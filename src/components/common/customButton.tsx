import React, { useState } from 'react';
import { Pressable } from 'react-native';

import CustomText from '@components/common/customText';

interface CustomButtonProps {
  type: 'normal';
  onPress: any;
  disabled: boolean;
  color: string;
  text: string;
  textColor: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  type,
  onPress,
  disabled,
  color,
  text,
  textColor,
}) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const styles = {
    normal: `w-80 h-14 mx-auto flex justify-center items-center rounded-lg`,
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      className={`py-2 ${isPressed && 'opacity-50'} bg-${color} ${styles[type]}`}
    >
      <CustomText className={`text-center text-${textColor}`}>{text}</CustomText>
    </Pressable>
  );
};

export default CustomButton;
