import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, ScrollView, Alert, AsyncStorage } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import { SafeAreaView } from 'react-navigation';
import Spinner from 'react-native-loading-spinner-overlay';
import ActionSheet from 'react-native-actionsheet'

import TextInfo from '../../common/TextInfo';
import SeparatorLine from '../../common/SeparatorLine';
import styles from './Main.style';
import theme from '../../styles/theme.style';

class MainScreen extends Component {

 componentDidMount() { 
    this.props.getProfileDefault()
  }

  showActionSheet = () => {
    this.ActionSheet.show()
  }

  renderErrorDialog() {
    const { errorMessage } = this.props
    if (errorMessage) {
      Alert.alert(
        '',
        errorMessage,
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      )
    }
  }

  renderLoading() {
    const { loading } = this.props
    if (loading) {
      return (
        <Spinner visible />
      )
    }
  }

  render() {
    const {
      safeAreaViewStyle,
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

    const { data } = this.props
    return (
      <SafeAreaView
        style={safeAreaViewStyle}
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
              loop={false}
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

          <View style={{ backgroundColor: '#FFF', marginTop: 10, marginBottom: 10 }}>

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
                onPress={this.showActionSheet}
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
                    source={require(`http://192.168.200.30:8081/images/profile/${data.info.profile_image}`)}
                  />
                </View>
              </View>
              {/*  End Image Profile Group */}

              <View style={{ marginBottom: 10, flex: 1 }}>
                <Text style={textNameProfileStyle}>
                  Mintra Jantarapak
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
        <ActionSheet
          ref={o => { this.ActionSheet = o }}
          title='Select Language Display'
          options={['Default', 'Add more Language', 'Cancel']}
          cancelButtonIndex={2}
          onPress={() => { }}
        />

        {/* Loading */}
        {/* {this.renderLoading()} */}
        {this.renderErrorDialog()}
      </SafeAreaView>

    );
  }
}

MainScreen.propTypes = {
  //Action Creator
  getProfileDefault: PropTypes.func,

  //Data
  data: PropTypes.object,

  //Error
  errorMessage: PropTypes.string,

  //Loading
  loading: PropTypes.bool
};

MainScreen.navigationOptions = {
  title: 'Home',
  // header: ( 
  //   /* Your custom header */
  //   <View
  //     style={{
  //       height: 80,
  //       flexDirection: 'row',
  //       backgroundColor: theme.NAV_BAR_COLOR,
  //       marginTop: Platform.OS === 'ios' ? 20 : 0 
  //     }}
  //   >
  //     <Text>This is CustomHeader</Text>
  //   </View>
  // ),
  headerStyle: {
    backgroundColor: theme.NAV_BAR_COLOR,
  },
  headerTitleStyle: { color: 'white' },
  headerBackTitle: ' ',
  headerRight: (
    <Button
      title=' '
      icon={
        <MaterialIcon
          name='share'
          size={32}
          color='white'
        />
      }
      clear
      iconRight
    />
  )
}


export default MainScreen;
