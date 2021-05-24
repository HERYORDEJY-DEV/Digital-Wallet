import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Content, View, Text } from 'native-base';

export default function Scan() {
  return (
    <Container>
      <StatusBar
        barStyle={'dark-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <Content>
        <View>
          <Text>This is the Scan screen</Text>
        </View>
      </Content>
    </Container>
  );
}
