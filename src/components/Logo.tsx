import React, { FC } from 'react';
import { COLORS, images } from '../../constants';
import { Image, View } from 'react-native';

export const Logo: FC = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        source={images.wallieLogo}
        style={{ width: '50%' }}
        resizeMode={'contain'}
      />
    </View>
  );
};
