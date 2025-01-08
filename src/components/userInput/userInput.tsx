import React, { useState } from 'react';
import { View, TextInput, Pressable } from 'react-native';

import EyeOn from '@assets/input/eye-on.svg';
import Delete from '@assets/input/delete.svg';
import EyeOff from '@assets/input/eye-off.svg';

interface UserInputProps {
  type: 'id' | 'passwd' | 'passwd_check' | 'name' | 'email' | 'phone' | 'auth';
}

const UserInput: React.FC<UserInputProps> = ({ type }) => {
  const [value, setValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswdVissible, setIsPasswdVissible] = useState<boolean>(false);

  const placeholder = {
    id: '아이디를 입력해주세요',
    passwd: '비밀번호를 입력해주세요',
    passwd_check: '비밀번호를 한 번 더 입력해주세요',
    name: '이름을 입력해주세요',
    email: '예: popupdice',
    phone: '숫자만 입력해주세요',
    auth: '인증번호 받기',
  };

  return (
    <View className="relative h-11 w-[335px]">
      <TextInput
        className={`h-full w-full rounded-lg border p-4  ${
          isFocused ? 'border-black' : 'border-light_gray'
        }`}
        autoCapitalize="characters"
        secureTextEntry={type === 'passwd' && !isPasswdVissible ? true : false}
        placeholder={placeholder[type]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChangeText={setValue}
      />
      {value ? (
        <Pressable
          onPress={() => setValue('')}
          className={`absolute ${type === 'passwd' ? 'right-10' : 'right-0'} top-0 m-3`}
        >
          <Delete width={18} height={18} />
        </Pressable>
      ) : null}
      {type === 'passwd' || type === 'passwd_check' ? (
        <Pressable
          onPress={() => setIsPasswdVissible(!isPasswdVissible)}
          className="absolute right-0 top-0 m-3"
        >
          {isPasswdVissible ? <EyeOn width={18} height={18} /> : <EyeOff width={18} height={18} />}
        </Pressable>
      ) : null}
    </View>
  );
};

export default UserInput;
