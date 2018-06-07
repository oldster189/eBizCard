import React, { Component } from 'react';
import { View, Text, } from 'react-native';

import styles from './Storage.style';
import theme from '../../styles/theme.style';

class StorageScreen extends Component {
  
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text> StorageScreen </Text>
      </View>
    );
  }
}

StorageScreen.navigationOptions = ({ navigation }) => { 
  return {
    title: 'Storage',
    headerStyle: {
      backgroundColor: theme.NAV_BAR_COLOR,
    },
    headerTitleStyle: { color: 'white' },
    headerBackTitle: ' ', 
  }
}

export default StorageScreen;
