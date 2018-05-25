import React, { Component } from 'react';
import { View, Text, } from 'react-native';

import styles from './ResetPassword.style';

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

export default ResetPasswordScreen;
