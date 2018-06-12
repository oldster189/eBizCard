import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, ScrollView, Alert, TouchableOpacity, AsyncStorage } from 'react-native';
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
import { BASE_URL_IMAGE, USER_TYPE_FACEBOOK, USER_TYPE_NORMAL, PROFILE_DATA } from '../../constants/constants';

class MainScreen extends Component {

  componentDidMount() {
    this.props.checkAuth() 
  }
  
  renderProfileImage = () => {
    const {
      backgroundPlaceholderProfileImageStyle,
      profileImageStyle
    } = styles
    const profileImage = this.props.info.profile_image
    const userType = this.props.info.account_id.type
    const { facebookData } = this.props

    // Profile image for normal user.
    if (userType && userType === USER_TYPE_NORMAL && profileImage) {
      return (
        <View>
          <Image
            style={backgroundPlaceholderProfileImageStyle}
            resizeMode='cover'
            source={require('../../assets/images/add_display.png')}
          />
          <ImageLoading
            source={{ uri: `${BASE_URL_IMAGE}/profile/${profileImage}` }}
            indicator={ProgressCircle}
            imageStyle={{
              borderRadius: 32,
              overflow: 'hidden'
            }}
            style={profileImageStyle}
            resizeMode='cover'
          />
        </View>
      )
      // Profile image for facebook user.  
    } else if (userType && userType === USER_TYPE_FACEBOOK) {
      return (
        <View>
          <Image
            style={backgroundPlaceholderProfileImageStyle}
            resizeMode='cover'
            source={require('../../assets/images/add_display.png')}
          />
          <ImageLoading
            source={{ uri: `https://graph.facebook.com/${facebookData.id}/picture?type=large&width=180&height=180` }}
            indicator={ProgressCircle}
            imageStyle={{
              borderRadius: 32,
              overflow: 'hidden'
            }}
            style={profileImageStyle}
            resizeMode='cover'
          />
        </View>
      )
    }

    return (
      <Image
        style={profileImageStyle}
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
      textTitleProfileStyle,
      textSubTitleCompanyStyle,
      editButtonStyle,
      containerProfileInfoContentStyle,
      changeLanguageProfileLayoutStyle,
      buttonTitleStyle,
      buttonStyle,
      imageProfileLayoutGroupStyle,
      backgroundImageProfileStyle,
      contentProfileInfoStyle,
      titleButtonEditStyle
    } = styles

    const { info, detail, loading } = this.props
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

          <View style={containerProfileInfoContentStyle}>
            {/* Begin Profile Info Content */}
            <View style={changeLanguageProfileLayoutStyle}>
              <Button
                title='Default'
                titleStyle={buttonTitleStyle}
                buttonStyle={buttonStyle}
                iconRight
                icon={
                  <MaterialIcon
                    name='chevron-down'
                    size={theme.ICON_HOME_FONT}
                    color={theme.ICON_HOME_COLOR}
                  />
                }
                clear
                onPress={() => this.ActionSheet.show()}
              />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {/*  Begin Image Profile Group */}
              <View style={imageProfileLayoutGroupStyle}>
                <View style={backgroundImageProfileStyle} >
                  {this.renderProfileImage()}
                </View>
              </View>
              {/*  End Image Profile Group */}

              <View style={contentProfileInfoStyle}>
                <Text style={textTitleProfileStyle}>
                  {first_name}
                </Text>
                <Text style={textSubTitleCompanyStyle}>
                  {company_name}
                </Text>
              </View>
            </View>
            <SeparatorLine color={theme.SEPARATOR_HOME_COLOR} />
            {/* End Profile Info Content */}

            {/* Begin Contact Info Content */}
            <View>
              <Text style={textTitleStyle}> Contact </Text>
              <TextInfo
                placehoder='Name'
                value={`${info_prefix} ${first_name} ${last_name} ${suffix}`}
                source={require('../../assets/images/ic_name.png')}
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

              <SeparatorLine color={theme.SEPARATOR_HOME_COLOR} />
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

              <SeparatorLine color={theme.SEPARATOR_HOME_COLOR} />
            </View>
            {/* End Company Info Content */}

            <View style={{ alignSelf: 'center' }}>
              <Button
                title='Edit'
                titleStyle={titleButtonEditStyle}
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
        <Spinner visible={loading} />
        {/* {this.renderErrorDialog()} */}
      </SafeAreaView>

    );
  }
}

MainScreen.propTypes = {
  //Action Creator
  getProfileDefault: PropTypes.func,

  //Data
  dataProfile: PropTypes.object,
  facebookData: PropTypes.object,

  //Error
  errorMessage: PropTypes.string,

  //Loading
  loading: PropTypes.bool
};

MainScreen.navigationOptions = ({ navigation }) => {
  return {
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
          source={require('../../assets/images/ic_share.png')}
        />
      </TouchableOpacity>
    )
  }
}


export default MainScreen;
