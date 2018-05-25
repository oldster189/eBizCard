import React, { Component } from 'react';
import { View, Text, } from 'react-native';

import styles from './DetailProfileCard.style';

class DetailProfileCardScreen extends Component {
  
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text> DetailProfileCardScreen </Text>
      </View>
    );
  }
}

export default DetailProfileCardScreen;
