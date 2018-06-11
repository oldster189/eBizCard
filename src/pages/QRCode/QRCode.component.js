import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import styles from './QRCode.style';
import theme from '../../styles/theme.style';

class QRCodeScreen extends Component {

  render() {
    const {
      safeAreaViewStyle,
      scrollViewStyle,
      containerStyle,
      profileImageLayoutGroupStyle,
      imageProfileLayoutGroupStyle,
      backgroundImageProfileStyle,
      profileImageStyle
    } = styles;
    return (
      <SafeAreaView style={safeAreaViewStyle}>
        <ScrollView style={scrollViewStyle}>
          <View style={containerStyle}>

            {/* Begin QRCode layout group.  */}
            <View style={profileImageLayoutGroupStyle}>

              {/* Profile image. */}
              <View style={imageProfileLayoutGroupStyle}>
                <View style={backgroundImageProfileStyle}>
                  <Image
                    style={profileImageStyle}
                    resizeMode='contain'
                    source={require('../../assets/images/add_display.png')}
                  />
                </View>
              </View>

              {/* Profile name. */}
              <Text
                style={{
                  color: '#FFF',
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginBottom: 20,
                }}
              >
                Mintra Jantarapak's QR Code
              </Text>
              <View
                style={{
                  height: 250,
                  width: 250,
                  backgroundColor: '#FFF',
                  borderRadius: 8,
                  padding: 12
                }}
              >

              </View>
            </View>
            {/* End QRCode layout group  */}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

QRCodeScreen.navigationOptions = ({ navigation }) => {
  return {
    title: 'My QR Code',
    headerStyle: {
      backgroundColor: theme.NAV_BAR_COLOR,
    },
    headerTitleStyle: { color: 'white' },
    headerBackTitle: ' ',
    headerTintColor: '#FFF',
    headerRight: (
      <TouchableOpacity
        onPress={() => navigation.navigate({ routeName: 'QRCode' })}
        style={{ padding: 10 }}
      >
        <Image
          style={{
            height: 24,
            width: 24,
          }}
          resizeMode='cover'
          source={require('../../assets/images/ic_qrcode.png')}
        />
      </TouchableOpacity>
    )
  }
}

export default QRCodeScreen;
