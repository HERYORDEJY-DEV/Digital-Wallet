import React, { FC } from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Header } from '../../components/Header';
import { icons, images, theme, COLORS, SIZES, FONTS } from '../../../constants';
import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { ButtonLarge } from '../../components/ButtonLarge';
import { Container, Content } from 'native-base';

export const SignUp: FC = () => {
  function onChangeText(text) {
    console.log(text);
  }

  return (
    <Container
      style={{
        flex: 1,
        backgroundColor: COLORS.green,
        paddingHorizontal: SIZES.padding * 2,
      }}
    >
      <StatusBar
        translucent={true}
        backgroundColor='transparent'
        barStyle='light-content'
      />
      <Header
        iconColor={COLORS.white}
        leftIcon={icons.back}
        text={'Sign Up'}
        textColor={COLORS.white}
        textFont={FONTS.h3}
      />
      <Logo />
      {/* SignUp Form */}
      <Content
        style={{ marginVertical: SIZES.padding * 2 }}
        showsVerticalScrollIndicator={false}
      >
        <Input
          label={'Email'}
          type={'email'}
          placeholder={'Enter your active Email'}
          onChangeText={onChangeText}
        />
        <Input
          label={'Phone Number'}
          type={'phoneNumber'}
          placeholder={'Enter your active PhoneNumber'}
          onChangeText={onChangeText}
        />
        <Input
          label={'Password'}
          type={'password'}
          placeholder={'Enter a rememberable password'}
          onChangeText={onChangeText}
        />
        <Input
          label={'Confirm Password'}
          type={'confirmPassword'}
          placeholder={'Confirm your password'}
          onChangeText={onChangeText}
        />
        <ButtonLarge text={'Continue'} backgroundColor={COLORS.black} />
      </Content>
    </Container>
  );
};
