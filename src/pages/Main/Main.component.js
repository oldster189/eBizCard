import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, ScrollView, Alert } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import { SafeAreaView } from 'react-navigation';
import Spinner from 'react-native-loading-spinner-overlay';
import ActionSheet from 'react-native-actionsheet'
import ImageLoading from 'react-native-image-progress';
import { ProgressCircle } from 'react-native-progress';

import TextInfo from '../../common/TextInfo';
import SeparatorLine from '../../common/SeparatorLine';
import styles from './Main.style';
import theme from '../../styles/theme.style';
import { formatNumberPhone } from '../../utils/util';
import { BASE_URL_IMAGE } from '../../constants/constants';

class MainScreen extends Component {

  componentDidMount() { 
    this.props.checkAuth()
  }

  showActionSheet = () => {
    this.ActionSheet.show()
  }

  renderProfileImage() {
    const profileImage = this.props.info.profile_image
    console.log(`${BASE_URL_IMAGE}/profile/${profileImage}`)
    if (profileImage) {
      return (
        <View>
          <Image
            style={{
              height: 60,
              width: 60,
              borderRadius: 34,
            }}
            resizeMode='cover'
            source={require('../../assets/images/add_display.png')}
          />
          <ImageLoading
            source={{ uri: `${BASE_URL_IMAGE}/profile/${profileImage}` }}
            indicator={ProgressCircle}
            imageStyle={{
              borderRadius: 30,
              overflow: 'hidden'
            }}
            style={{
              height: 60,
              width: 60,
              position: 'absolute'
            }}
            resizeMode='cover'
          />
        </View>
      )
    }

    return (
      <Image
        style={{
          height: 60,
          width: 60,
          borderRadius: 30,
        }}
        resizeMode='contain'
        source={require('../../assets/images/add_display.png')}
      />
    )
  }

  renderCompanyFax() {
    const companyFax = this.props.detail.company_fax
    if (companyFax) {
      return (
        <TextInfo
          placehoder='Fax No.'
          value={companyFax}
          source={require('../../assets/images/ic_fax.png')}
        />
      )
    }
    return null
  }

  renderCompanyPhone() {
    const companyPhone = this.props.detail.company_phone
    if (companyPhone) {
      return (
        <TextInfo
          placehoder='Office No.'
          value={companyPhone}
          source={require('../../assets/images/ic_phone.png')}
        />
      )
    }
    return null
  }

  renderBusinnessType() {
    const businnessType = this.props.detail.businness_type
    if (businnessType) {
      return (
        <TextInfo
          placehoder='Business Type'
          value={businnessType}
          source={require('../../assets/images/ic_business.png')}
        />
      )
    }
    return null
  }

  renderSecondMobilePhone() {
    const secondMobilePhone = this.props.detail.mobile_phone_second
    if (secondMobilePhone) {
      return (
        <TextInfo
          placehoder='Second phone no.'
          value={formatNumberPhone(secondMobilePhone)}
          source={require('../../assets/images/ic_mobile.png')}
        />
      )
    }
    return null
  }


  renderSecondEmail() {
    const secondEmail = this.props.detail.email_second
    if (secondEmail) {
      return (
        <TextInfo
          placehoder='Second email'
          value={secondEmail}
          source={require('../../assets/images/ic_mail.png')}
        />
      )
    }
    return null
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

    const { info, detail } = this.props
    // Info data.
    const { card_front, card_back } = info 
    // Detail profile language data.
    const {
      info_prefix, 
      first_name,
      last_name,
      suffix,
      mobile_phone, 
      email, 
      company_name,
      position,
      company_address, 
    } = detail


    return (
      <SafeAreaView style={safeAreaViewStyle}>
        <ScrollView style={containerStyle}>
          {/* Begin Header Photo Card Swipe */}
          <View
            style={headerSwipeStyle}
          >
            {/* Slide paging images */}
            <Swiper
              paginationStyle={paginationStyle}
              dotStyle={dotStyle}
              activeDotStyle={activeDotStyle}
              loop={false}
            >
              {/* Photo card front */}
              <ImageLoading
                source={{ uri: `${BASE_URL_IMAGE}/card/${card_front}` }}
                indicator={ProgressCircle}
                style={photoCardStyle}
                resizeMode='cover'
              />
              {/* Photo card back */}
              <ImageLoading
                source={{ uri: `${BASE_URL_IMAGE}/card/${card_back}` }}
                indicator={ProgressCircle}
                style={photoCardStyle}
                resizeMode='cover'
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
                  {this.renderProfileImage()}
                </View>
              </View>
              {/*  End Image Profile Group */}

              <View style={{ marginBottom: 10, flex: 1 }}>
                <Text style={textNameProfileStyle}>
                  {first_name}
                </Text>
                <Text style={textNameCompanyStyle}>
                  {company_name}
                </Text>
              </View>
            </View>
            <SeparatorLine color={'#E0E0E0'} />
            {/* End Profile Info Content */}

            {/* Begin Contact Info Content */}
            <View>
              <Text style={textTitleStyle}> Contact </Text>
              <TextInfo
                placehoder='Name'
                value={`${info_prefix} ${first_name} ${last_name} ${suffix}`}
                source={require('../../assets/images/ic_mobile.png')}
              />
              <TextInfo
                placehoder='Phone no.'
                value={formatNumberPhone(mobile_phone)}
                source={require('../../assets/images/ic_mobile.png')}
              />

              {/* Second mobile phone. */}
              {this.renderSecondMobilePhone()}

              <TextInfo
                placehoder='Email'
                value={email}
                source={require('../../assets/images/ic_mail.png')}
              />

              {/* Second email */}
              {this.renderSecondEmail()}

              <SeparatorLine color={'#E0E0E0'} />
            </View>
            {/* End Contact Info Content */}

            {/* Begin Company Info Content */}
            <View>
              <Text style={textTitleStyle}> Company Info </Text>
              <TextInfo
                placehoder='Company Name'
                value={company_name}
                source={require('../../assets/images/ic_company.png')}
              />
              <TextInfo
                placehoder='Position'
                value={position}
                source={require('../../assets/images/ic_position.png')}
              />
              <TextInfo
                placehoder='Company Address'
                value={company_address}
                source={require('../../assets/images/ic_location.png')}
              />

              {/* Office no. */}
              {this.renderCompanyPhone()}

              {/* Fax no. */}
              {this.renderCompanyFax()}

              {/* Business Type */}
              {this.renderBusinnessType()}

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
  dataProfile: PropTypes.object,

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
