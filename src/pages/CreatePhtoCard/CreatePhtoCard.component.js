import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
 
import styles from './CreatePhtoCard.style';

class CreatePhtoCardScreen extends Component {
  
  render() {
    const { containerStyle } = styles;
    return (
      <ScrollView keyboardShouldPersistTaps='handled' style={containerStyle}>
     
      </ScrollView>
    );
  }
}

export default CreatePhtoCardScreen;
