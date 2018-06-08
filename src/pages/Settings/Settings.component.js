import React, { Component } from 'react';
import { View, Text, } from 'react-native';

import styles from './Settings.style';

class SettingsScreen extends Component {
  //kk
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text> SettingsScreen </Text>
      </View>
    );
  }
}

export default SettingsScreen;
