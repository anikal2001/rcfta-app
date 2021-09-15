import * as React from 'react';
import { InputProps } from './types';
import { TextInput as DefaultTextInput } from 'react-native-gesture-handler';

import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.lightInput & keyof typeof Colors.darkInput
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[`${theme}Input`][colorName];
  }
}

export function TextInput(props: InputProps) {
    const { style, darkInput, lightInput, ...otherProps } = props;
    let backgroundColor;
    let color;
    let placeholderTextColor;
    if (darkInput) {
      backgroundColor = Colors.darkInput.background;
      color = Colors.darkInput.text;
      placeholderTextColor = Colors.darkInput.placeholderColor;
    }
    else if (lightInput) {
      backgroundColor = Colors.lightInput.background;
      color = Colors.lightInput.text;
      placeholderTextColor = Colors.darkInput.placeholderColor;
    }
    else {
      backgroundColor = Colors.darkInput.background;
      color = Colors.darkInput.text;
      placeholderTextColor = Colors.darkInput.placeholderColor;
    }
    return <DefaultTextInput style={[{ backgroundColor, color, placeholderTextColor }, style]} {...otherProps} />

}