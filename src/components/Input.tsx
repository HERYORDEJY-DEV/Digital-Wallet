import React, { FC, useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONTS, SIZES, icons, images } from '../../constants';
import countries from '../../api/countries.json';

interface Props {
  label: string;
  onChangeText: (text: string) => void;
  type: string;
  placeholder: string;
}

export const Input: FC<Props> = ({
  label,
  onChangeText,
  type,
  placeholder,
}: Props) => {
  const [showPassword, setShowPassword] = useState<boolean | null>(true);

  const [modalVisible, setModalVisible] = useState<boolean | null>(false);

  const [selectedCountry, setSelectedCountry] = useState<null | {
    name: string;
    alpha2Code: string;
    callingCodes: string;
  }>({ callingCodes: '1' });

  // function to toggle password secrecy
  function _showPassword() {
    setShowPassword(!showPassword);
  }

  // function to select country
  function _selectCountry(
    name: string,
    alpha2Code: string,
    callingCodes: string,
  ) {
    setSelectedCountry({ name, alpha2Code, callingCodes });
    _modalVisible(false);
  }

  // function to get list of countries
  // function getCountries() {
  //   fetch();
  // }

  // Function to toggle modal visibility
  function _modalVisible(condition) {
    setModalVisible(condition);
  }

  function _renderItem({ item }) {
    return (
      <TouchableOpacity
        onPress={() =>
          _selectCountry(item.name, item.alpha2Code, item.callingCodes)
        }
        style={{
          // paddingHorizontal: SIZES.padding * 2,
          marginVertical: SIZES.padding * 1.6,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Image
          source={{
            uri: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`,
          }}
          style={{
            width: RFValue(30),
            height: RFValue(30),
            marginRight: 20,
          }}
          resizeMode={'contain'}
        />
        <Text style={{ ...FONTS.body3, color: COLORS.green }}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <>
      <View
        style={{
          marginVertical: SIZES.padding,
          borderBottomColor: COLORS.white,
          borderBottomWidth: 1,
        }}
      >
        {label && (
          <Text style={{ ...FONTS.body3, color: COLORS.white }}>{label}</Text>
        )}
        <View
          style={{
            flexDirection:
              type === 'phoneNumber' || 'password' ? 'row' : 'column',
            alignItems:
              type === 'phoneNumber' || 'password' ? 'center' : 'flex-start',
            justifyContent:
              type === 'password' ? 'space-between' : 'flex-start',
          }}
        >
          {type === 'phoneNumber' && (
            <TouchableOpacity
              onPress={() => _modalVisible(true)}
              style={{
                paddingHorizontal: SIZES.padding,
                marginRight: SIZES.padding2 * 1.5,
              }}
            >
              <Text style={{ ...FONTS.body3, color: COLORS.white }}>
                +{selectedCountry.callingCodes}
              </Text>
            </TouchableOpacity>
          )}
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={COLORS.white + 90}
            onChangeText={(text) => onChangeText(text)}
            style={{ color: COLORS.white, textAlign: 'left' }}
            keyboardType={type === 'phoneNumber' ? 'number-pad' : 'default'}
            secureTextEntry={type === 'password' ? showPassword : false}
          />
          {type === 'password' && (
            <TouchableOpacity
              onPress={_showPassword}
              style={{ paddingHorizontal: SIZES.padding * 2 }}
              style={{ paddingLeft: SIZES.padding * 3 }}
            >
              <Image
                source={icons.eye}
                style={{ width: 21, height: 21, tintColor: COLORS.white }}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Country list display modal */}
      <Modal visible={modalVisible} transparent={true} animationType={'slide'}>
        <TouchableWithoutFeedback onPress={() => _modalVisible(false)}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                backgroundColor: COLORS.lightGreen,
                height: 450,
                width: SIZES.width * 0.7,
                borderRadius: SIZES.padding * 2,
                padding: SIZES.padding * 2,
              }}
            >
              <FlatList
                data={countries}
                renderItem={_renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};
