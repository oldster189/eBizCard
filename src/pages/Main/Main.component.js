import React, { Component } from 'react';
import { View, Text, } from 'react-native'; 

import styles from './Main.style';
import theme from '../../styles/theme.style';

class MainScreen extends Component {

  static navigationOptions = {
    title: 'Main Profile',
    headerStyle: {
      backgroundColor: theme.NAV_BAR_COLOR,
    },
    headerTitleStyle: { color: 'white' },
    headerBackTitle: ' '
  }

  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text> MainScreen </Text>
      </View>
    );
  }
}

export default MainScreen;
