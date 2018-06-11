import React, { Component } from 'react';
import { View, Text, } from 'react-native';

import styles from './ResetPassword.style';
import theme from '../../styles/theme.style';

class ResetPasswordScreen extends Component {
  
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text> ResetPasswordScreen </Text>
      </View>
    );
  }
}

ResetPasswordScreen.navigationOptions = {
  title: 'Reset your password',
  headerStyle: {
    backgroundColor: theme.NAV_BAR_COLOR,
  },
  headerTitleStyle: { color: 'white' },
  headerBackTitle: ' ',
  headerTintColor: '#FFF'
}


export default ResetPasswordScreen;
