import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import { SafeAreaView } from 'react-navigation'; 
import TextInfo from '../../common/TextInfo';
import SeparatorLine from '../../common/SeparatorLine';
import styles from './Main.style';
import theme from '../../styles/theme.style';

class MainScreen extends Component {
  
  render() {
    const {
      containerStyle,
      headerSwipeStyle,
      paginationStyle,
      dotStyle,
      activeDotStyle,
      photoCardStyle,
      textTitleStyle,
      textNameProfileStyle,
      textNameCompanyStyle,
      editButtonStyle
    } = styles
    return (
      <SafeAreaView
        forceInset={{ bottom: 'always' }}
        style={containerStyle}
      >
        <ScrollView style={containerStyle} >

          {/* Begin Header Photo Card Swipe */}
          <View
            style={headerSwipeStyle}
          >
            <Swiper
              paginationStyle={paginationStyle}
              dotStyle={dotStyle}
              activeDotStyle={activeDotStyle}
            >
              <Image
                resizeMode='cover'
                source={require('../../assets/images/background_profile.png')}
                style={photoCardStyle}
              />
              <Image
                resizeMode='cover'
                source={require('../../assets/images/background_profile.png')}
                style={photoCardStyle}
              />
            </Swiper>
          </View>
          {/* End Header Photo Card Swipe */}

          <View style={{ backgroundColor: '#FFF', marginTop: 10 }}>

            {/* Begin Profile Info Content */}
            <View style={{ alignSelf: 'flex-end', marginTop: 4 }}>
              <Button
                title='Default'
                titleStyle={{ color: '#2F2F2F', fontSize: 16 }}
                buttonStyle={{ width: 100, }}
                iconRight
                icon={
                  <MaterialIcon
                    name='chevron-down'
                    size={25}
                    color='#2F2F2F'
                  />
                }
                clear
              />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>  
            {/*  Begin Image Profile Group */} 
              <View
                style={{
                  marginLeft: theme.MARGIN_XX,
                  marginBottom: 20,
                  marginTop: 8,
                  marginRight: 20,
                  backgroundColor: '#339CED',
                  height: 74,
                  width: 74,
                  borderRadius: 37,
                  padding: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    backgroundColor: '#FFF',
                    height: 69,
                    width: 69,
                    borderRadius: 33,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    style={{
                      height: 60,
                      width: 60,
                      borderRadius: 34,
                    }}
                    resizeMode='contain'
                    source={require('../../assets/images/add_display.png')}
                  />
                </View>
              </View> 
              {/*  End Image Profile Group */}

              <View style={{ marginBottom: 10, flex: 1 }}>
                <Text style={textNameProfileStyle}>
                  Mintra Jantarapakasdasdas
                  </Text>
                <Text style={textNameCompanyStyle}>
                  Codemobiles.co.,Ltd
                </Text>
              </View>
            </View>
            <SeparatorLine color={'#E0E0E0'} />
            {/* End Profile Info Content */}

            {/* Begin Contact Info Content */}
            <View>
              <Text style={textTitleStyle}> Contact </Text>
              <TextInfo
                placehoder='Phone no.'
                value='091-112-1314'
                source={require('../../assets/images/ic_mobile.png')}
              />
              <TextInfo
                placehoder='Email'
                value='oldster189@gmail.com'
                source={require('../../assets/images/ic_mail.png')}
              />
              <SeparatorLine color={'#E0E0E0'} />
            </View>
            {/* End Contact Info Content */}

            {/* Begin Company Info Content */}
            <View>
              <Text style={textTitleStyle}> Company Info </Text>
              <TextInfo
                placehoder='Company Name'
                value='Codemobiles.co.,Ltd'
                source={require('../../assets/images/ic_company.png')}
              />
              <TextInfo
                placehoder='Position'
                value='Manager'
                source={require('../../assets/images/ic_position.png')}
              />
              <TextInfo
                placehoder='Company Address'
                value='Charoen Rat 7'
                source={require('../../assets/images/ic_location.png')}
              />
              <TextInfo
                placehoder='Office No.'
                value='0813599468'
                source={require('../../assets/images/ic_phone.png')}
              />
              <TextInfo
                placehoder='Fax No.'
                value='026897926'
                source={require('../../assets/images/ic_fax.png')}
              />
              <TextInfo
                placehoder='Business Type'
                value='Outsource'
                source={require('../../assets/images/ic_business.png')}
              />
              <SeparatorLine color={'#E0E0E0'} />
            </View>
            {/* End Company Info Content */}

            <View style={{ alignSelf: 'center' }}>
              <Button
                title='Edit'
                titleStyle={{ color: '#339CED', fontSize: 19 }}
                buttonStyle={editButtonStyle}
                clear
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

    );
  }
}

export default MainScreen;
