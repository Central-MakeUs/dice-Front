import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

import Delete from '@assets/input/delete.svg';
import EyeOff from '@assets/input/eye-off.svg';
// import EyeOn from '@assets/input/eye-on.svg';

interface UserInputProps {
  type: 'id' | 'passwd' | 'passwd_check';
}

const UserInput: React.FC<UserInputProps> = ({ type }) => {
  const [value, setValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);

  const placeholder = {
    id: '아이디를 입력해주세요',
    passwd: '비밀번호를 입력해주세요',
    passwd_check: '비밀번호를 한 번 더 입력해주세요',
  };

  return (
    <View className="relative h-11 w-[335px]">
      <TextInput
        className={`h-full w-full rounded-lg border p-4  ${
          isFocused ? 'border-black' : 'border-light_gray'
        }`}
        autoCapitalize="characters"
        secureTextEntry={type === 'passwd' ? true : false}
        placeholder={placeholder[type]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={setValue}
      />
      {value ? <Delete /> : null}
      {type === 'passwd' ? <EyeOff /> : null}
    </View>
  );
};

export default UserInput;
