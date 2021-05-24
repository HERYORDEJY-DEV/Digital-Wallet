import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import Home from '../screens/tab/Home';
import Scan from '../screens/tab/Scan';
import User from '../screens/tab/User';
import { Image, StyleSheet } from 'react-native';
import { View, Thumbnail } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, icons } from '../../constants';
import { Text } from 'native-base';
import Svg, { Path } from 'react-native-svg';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  function TabBarCustomButton({
    accessibilityLabel,
    accessibilityState,
    children,
    onPress,
  }) {
    let isSelected = accessibilityState.selected;

    if (isSelected) {
      return (
        <View style={{ flex: 1, alignItems: 'center' }}>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              top: 0,
            }}
          >
            <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
            <Svg width={75} height={61} viewBox='0 0 75 61'>
              <Path
                d='M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z'
                fill={COLORS.white}
              />
            </Svg>
            <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
          </View>

          <TouchableOpacity
            style={{
              top: -22.5,
              justifyContent: 'center',
              alignItems: 'center',
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: COLORS.primary,
              ...styles.shadow,
            }}
            onPress={onPress}
          >
            {children}
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            height: 50,
            backgroundColor: COLORS.white,
          }}
          activeOpacity={1}
          onPress={onPress}
        >
          {children}
        </TouchableOpacity>
      );
    }
  }

  function CustomTabBar(props) {
    return <BottomTabBar {...props.props} />;
  }
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: 'transparent',
        },
      }}
      tabBar={(props) => <CustomTabBar props={props} />}
    >
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.more}
              resizeMode={'contain'}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.black : COLORS.gray,
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name={'Scan'}
        component={Scan}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.scan}
              resizeMode={'contain'}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.black : COLORS.gray,
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name={'User'}
        component={User}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.user}
              resizeMode={'contain'}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.black : COLORS.gray,
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
