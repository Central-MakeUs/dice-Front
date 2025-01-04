import React from 'react';
import { styled } from 'nativewind';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';

interface CustomTextProps extends RNTextProps {
  className?: string;
}

const StyledText = styled(RNText);

const CustomText: React.FC<CustomTextProps> = ({ className = '', ...props }) => {
  return <StyledText className={`font-sans ${className}`} {...props} />;
};

export default CustomText;
