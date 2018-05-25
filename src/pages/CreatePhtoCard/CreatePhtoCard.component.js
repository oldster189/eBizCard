import React, { Component } from 'react';
import { View, Text, } from 'react-native';

import styles from './CreatePhtoCard.style';

class CreatePhtoCardScreen extends Component {
  
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text> CreatePhtoCardScreen </Text>
      </View>
    );
  }
}

export default CreatePhtoCardScreen;
