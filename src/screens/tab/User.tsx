import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Content, View, Text } from 'native-base';

export default function User() {
  return (
    <Container>
      <StatusBar
        barStyle={'dark-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <Content>
        <View>
          <Text>This is the User screen</Text>
        </View>
      </Content>
    </Container>
  );
}
