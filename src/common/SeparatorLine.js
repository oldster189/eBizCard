import React from 'react';
import { View } from 'react-native';
import theme from '../styles/theme.style';

const SeparatorLine = () => {
  return (
    <View>
      <View style={{ backgroundColor: theme.SEPARATOR_COLOR, height: 1 }} />
    </View> 
  )
};

export default SeparatorLine;
