import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SignUp } from './src/screens/auth/SignUp';
import AppNavigation from './src/navigation';

export default function NewApp() {
  return <AppNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
