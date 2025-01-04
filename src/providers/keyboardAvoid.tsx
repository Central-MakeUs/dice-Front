import React, { PropsWithChildren } from 'react';
import { Platform, KeyboardAvoidingView } from 'react-native';

const KeyboardAvoid = ({ children }: PropsWithChildren) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoid;
