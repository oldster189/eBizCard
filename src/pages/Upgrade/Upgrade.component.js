import React, { Component } from 'react';
import { View, Text, } from 'react-native';

import styles from './Upgrade.style';
import theme from '../../styles/theme.style';

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

UpgradeScreen.navigationOptions = {
  title: 'Upgrade',
  headerStyle: {
    backgroundColor: theme.NAV_BAR_COLOR,
  },
  headerTitleStyle: { color: 'white' },
  headerBackTitle: ' ',
  headerTintColor: '#FFF'
}

export default UpgradeScreen;
