import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Dimensions } from 'react-native';

import styles from './CreateProfile.style';
import theme from '../../styles/theme.style';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

class CreateProfileScreen extends Component {

  static navigationOptions = {
    title: 'Create your profile',
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
        <View>
          <Image
            resizeMode='cover'
            source={require('../../assets/images/background_profile.png')}
            style={{
              height: 218,
              width: null,
            }}
          />
          <View style={{ position: 'absolute', left: (SCREEN_WIDTH / 2) - 85, top: 109 - 85 }}>
            <View
              style={{
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                height: 160,
                width: 160,
              }}
            >
              <Image
                resizeMode='cover'
                source={require('../../assets/images/add_display.png')}
                style={{
                  height: 138,
                  width: 138,
                }}
              />

            </View>
            <View
              style={{
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                height: 165,
                width: 165,
                position: 'absolute',
              }}
            >
              <TouchableOpacity onPress={this.handleOnPress}>
                <Image
                  resizeMode='cover'
                  source={require('../../assets/images/add_picture.png')}
                  style={{
                    height: 45,
                    width: 45, 
                  }}
                />
              </TouchableOpacity>

            </View>
          </View>


        </View>
      </View>
    );
  }
}

export default CreateProfileScreen;
