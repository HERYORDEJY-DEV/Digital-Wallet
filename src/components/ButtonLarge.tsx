import React, { FC } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

interface Props {
  text: string;
  textColor: string;
  onPress: () => void;
  backgroundColor: any;
  disabled: boolean;
}

export const ButtonLarge: FC<Props> = ({
  text,
  textColor,
  onPress,
  backgroundColor,
  disabled,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled ?? false}
      style={{
        padding: SIZES.padding * 2,
        backgroundColor: backgroundColor,
        alignItems: 'center',
        borderRadius: SIZES.padding * 2,
        margin: SIZES.padding * 2,
      }}
    >
      <Text style={{ ...FONTS.h4, color: textColor ?? COLORS.white }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
