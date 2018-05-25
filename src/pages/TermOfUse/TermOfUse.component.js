import React, { Component } from 'react';
import { View, Text, } from 'react-native';

import styles from './TermOfUse.style';

class TermOfUseScreen extends Component {
  
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text> TermOfUseScreen </Text>
      </View>
    );
  }
}

export default TermOfUseScreen;
