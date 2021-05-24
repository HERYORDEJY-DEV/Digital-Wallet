import React, { FC } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { icons, images, theme, COLORS, SIZES, FONTS } from '../../constants';

interface Props {
  text: string;
  textColor: string;
  textFont: any;
  leftIcon: any;
  rightIcon: any;
  iconColor: string;
}

export const Header: FC<Props> = ({
  text,
  textColor,
  leftIcon,
  rightIcon,
  iconColor,
  textFont,
}: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: SIZES.padding2 * 3,
        paddingVertical: SIZES.padding2 * 2,
      }}
    >
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
        {leftIcon && (
          <Image
            source={icons.back}
            style={{
              marginRight: SIZES.padding2,
              tintColor: iconColor,
              width: 20,
              height: 20,
            }}
            resizeMode={'contain'}
          />
        )}
        <Text
          style={{
            ...textFont,
            color: textColor,
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
      {rightIcon && (
        <TouchableOpacity>
          <Image
            source={icons.back}
            style={{ tintColor: COLORS.green, width: 20, height: 20 }}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
