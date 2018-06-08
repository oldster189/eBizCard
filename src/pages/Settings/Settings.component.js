import React, { Component } from 'react';
import { View, AsyncStorage, } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './Settings.style';
import { USER_TOKEN, FACEBOOK_TOKEN } from '../../constants/constants';

class SettingsScreen extends Component {
 
  async onClickLogout() {
    await AsyncStorage.removeItem(USER_TOKEN)
    await AsyncStorage.removeItem(FACEBOOK_TOKEN)
    this.props.navigation.navigate({ routeName: 'Login' })
  }

  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Button
          title='Logout'
          buttonStyle={{ margin: 26 }}
          onPress={() => this.onClickLogout()}
        />
      </View>
    );
  }
}

export default SettingsScreen;
