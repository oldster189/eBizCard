import React, { Component } from 'react';
import { View, Text, } from 'react-native';

import styles from './ChangePassword.style';
import theme from '../../styles/theme.style';

class ChangePasswordScreen extends Component {
  
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text> ChangePasswordScreen </Text>
      </View>
    );
  }
}

ChangePasswordScreen.navigationOptions = {
  title: 'Change password',
  headerStyle: {
    backgroundColor: theme.NAV_BAR_COLOR,
  },
  headerTitleStyle: { color: 'white' },
  headerBackTitle: ' ',
  headerTintColor: '#FFF' 
}

export default ChangePasswordScreen;
