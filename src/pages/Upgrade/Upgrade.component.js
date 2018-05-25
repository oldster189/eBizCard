import React, { Component } from 'react';
import { View, Text, } from 'react-native';

import styles from './Upgrade.style';

class UpgradeScreen extends Component {
  
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text> UpgradeScreen </Text>
      </View>
    );
  }
}

export default UpgradeScreen;
