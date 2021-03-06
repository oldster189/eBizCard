import React, { Component } from 'react';
import { View, Text, } from 'react-native';

import styles from './TermOfUse.style';
import theme from '../../styles/theme.style';

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

TermOfUseScreen.navigationOptions = {
  title: 'Term of use',
  headerStyle: {
    backgroundColor: theme.NAV_BAR_COLOR,
  },
  headerTitleStyle: { color: 'white' },
  headerBackTitle: ' ',
  headerTintColor: '#FFF'
}

export default TermOfUseScreen;
