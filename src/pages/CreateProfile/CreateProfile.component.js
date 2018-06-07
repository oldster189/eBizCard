import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Spinner from 'react-native-loading-spinner-overlay';
import { Button, } from 'react-native-elements';
import ActionSheet from 'react-native-actionsheet'
import ImageLoading from 'react-native-image-progress';
import { ProgressCircle } from 'react-native-progress';

import TextInput from '../../common/TextInput';
import SeparatorLine from '../../common/SeparatorLine';
import SeparatorHeader from '../../common/SeparatorHeader';
import Picker from '../../common/Picker';
import AddButton from '../../common/AddButton';

import {
  USER_TYPE_NORMAL, BASE_URL_FB_API
} from '../../constants/constants';
import styles from './CreateProfile.style';
import theme from '../../styles/theme.style';

const infoPrefixArray = [
  {
    label: 'Mr.',
    value: 'MR',
  },
  {
    label: 'Miss',
    value: 'MISS',
  },
  {
    label: 'Mrs.',
    value: 'MRS',
  }
];

class CreateProfileScreen extends Component {

  static propTypes = {
    //Action Creator
    inputValueChange: PropTypes.func,
    handleActionSheetPress: PropTypes.func,
    createProfile: PropTypes.func,

    //Data
    infoPrefix: PropTypes.string,
    profileImage: PropTypes.object,
    profileName: PropTypes.string,
    firstName: PropTypes.string,
    middleName: PropTypes.string,
    lastName: PropTypes.string,
    suffix: PropTypes.string,
    mobilePhone: PropTypes.string,
    secondMobilePhone: PropTypes.string,
    email: PropTypes.string,
    secondEmail: PropTypes.string,
    companyName: PropTypes.string,
    position: PropTypes.string,
    companyAddress: PropTypes.string,
    officePhone: PropTypes.string,
    faxPhone: PropTypes.string,
    businessType: PropTypes.string,
    userType: PropTypes.string,
    fbId: PropTypes.string,

    //Show/Hide View
    isShowSecondMobilePhone: PropTypes.bool,
    isShowSecondEmail: PropTypes.bool,

    //Error
    errorMessage: PropTypes.string,
    errorProfileName: PropTypes.string,
    errorFirstName: PropTypes.string,
    errorLastName: PropTypes.string,
    errorMobilePhone: PropTypes.string,
    errorCompanyName: PropTypes.string,
    errorPosition: PropTypes.string,
    errorCompanyAddress: PropTypes.string,

    //Loading
    loading: PropTypes.bool,
  };

  static navigationOptions = {
    title: 'Create your profile',
    headerStyle: {
      backgroundColor: theme.NAV_BAR_COLOR,
    },
    headerTitleStyle: { color: 'white' },
    headerBackTitle: ' '

  }

  showActionSheet = () => {
    this.ActionSheet.show()
  }

  renderProfileImage() {
    // Show image user type normal
    const { userType, profileImage, fbId } = this.props
    const {
      profileImageStyle,
      imageProgressStyle,
    } = styles

    if (userType === USER_TYPE_NORMAL) {
      if (profileImage) {
        // show image profile from picker
        return (
          <Image
            source={profileImage}
            style={profileImageStyle}
            resizeMode='cover'
          />
        )
      }

      // show image profile from default
      return (
        <Image
          source={require('../../assets/images/add_display.png')}
          style={profileImageStyle}
          resizeMode='cover'
        />
      )
    }

    // Show image user type facebook
    if (fbId) {
      // show image profile from fb graph api
      return (
        <View>
          <Image
            source={require('../../assets/images/add_display.png')}
            style={profileImageStyle}
            resizeMode='cover'
          />
          <ImageLoading
            source={{ uri: `${BASE_URL_FB_API}/${fbId}/picture?type=large&width=276&height=276` }}
            indicator={ProgressCircle}
            imageStyle={{
              borderRadius: 69,
              overflow: 'hidden'
            }}
            style={imageProgressStyle}
            resizeMode='cover'
          />
        </View>
      )
    }

    // show image profile from default
    return (
      <Image
        source={require('../../assets/images/add_display.png')}
        style={profileImageStyle}
        resizeMode='cover'
      />
    )
  }

  renderButtonAddImage() {
    const { addImageButtonLayoutStyle, imgCameraStyle } = styles

    //Show button add image
    if (this.props.userType === USER_TYPE_NORMAL) {
      return (
        <View style={addImageButtonLayoutStyle}>
          <TouchableOpacity onPress={this.showActionSheet}>
            <Image
              source={require('../../assets/images/add_picture.png')}
              style={imgCameraStyle}
              resizeMode='cover'
            />
          </TouchableOpacity>
        </View>
      )
    }

    //Hide button add image
    return null
  }

  renderSecondMobilePhone() {
    const { inputValueChange, secondMobilePhone, isShowSecondMobilePhone } = this.props
    const {
      secondInputLayoutStyle,
      imgIconInputStyle,
      textInputStyle,
      separatorColorStyle
    } = styles

    if (isShowSecondMobilePhone) {
      return (
        <View>
          <View style={secondInputLayoutStyle}>

            {/* Icon input */}
            <TouchableOpacity
              onPress={() =>
                inputValueChange({ prop: 'isShowSecondMobilePhone', value: false })
              }
            >
              <Image
                source={require('../../assets/images/ic_delete.png')}
                style={imgIconInputStyle}
              />
            </TouchableOpacity>

            <TextInput
              label={'Second mobile no'}
              containerStyle={textInputStyle}
              keyboardType="phone-pad"
              returnKeyType="done"
              lineWidth={0}
              onChangeText={value =>
                inputValueChange({ prop: 'secondMobilePhone', value })}
              value={secondMobilePhone}
              onBlur={() => { }}
              onFocus={() => { }}
            />
          </View>
          <SeparatorLine color={separatorColorStyle} />
        </View>

      )
    }
    return (
      <View>
        <AddButton
          title='Add mobile no'
          source={require('../../assets/images/ic_add.png')}
          onPress={() =>
            inputValueChange({ prop: 'isShowSecondMobilePhone', value: true })}
        />
        <SeparatorLine color={separatorColorStyle} />
      </View>

    );
  }

  renderSecondEmail() {
    const { inputValueChange, secondEmail, isShowSecondEmail } = this.props
    const { secondInputLayoutStyle, imgIconInputStyle, textInputStyle } = styles
    if (isShowSecondEmail) {
      return (
        <View>
          <View style={secondInputLayoutStyle}>

            {/* Icon input */}
            <TouchableOpacity
              onPress={() =>
                inputValueChange({ prop: 'isShowSecondEmail', value: false })}
            >
              <Image
                style={imgIconInputStyle}
                source={require('../../assets/images/ic_delete.png')}
              />
            </TouchableOpacity>

            <TextInput
              label={'Second email'}
              containerStyle={textInputStyle}
              keyboardType="email-address"
              returnKeyType="done"
              lineWidth={0}
              onChangeText={value =>
                inputValueChange({ prop: 'secondEmail', value })}
              value={secondEmail}
              onBlur={() => { }}
              onFocus={() => { }}
            />
          </View>
        </View>
      )
    }
    return (
      <View>
        <AddButton
          title='Add email'
          source={require('../../assets/images/ic_add.png')}
          onPress={() => inputValueChange({ prop: 'isShowSecondEmail', value: true })}
        />
      </View>
    );
  }

  render() {
    const {
      safeAreaStyle,
      scrollViewStyle,
      containerStyle,
      backgroundImageHeaderStyle,
      containerHeaderStyle,
      profileImageLayoutStyle,
      nextBtnStyle,
      textInputStyle,
      separatorColorStyle,
      textErrorStyle
    } = styles;

    const {
      inputValueChange,
      handleActionSheetPress,
      createProfile, 

      profileImage,
      infoPrefix,
      profileName,
      firstName,
      middleName,
      lastName,
      suffix,
      mobilePhone,
      secondMobilePhone,
      email,
      secondEmail,
      companyName,
      position,
      companyAddress,
      officePhone,
      faxPhone,
      businessType,

      errorProfileName,
      errorFirstName,
      errorLastName,
      errorMobilePhone,
      errorCompanyName,
      errorPosition,
      errorCompanyAddress,

      loading
    } = this.props


    return (
      <SafeAreaView
        forceInset={{ bottom: 'always' }}
        style={safeAreaStyle}
      >
        <ScrollView
          style={scrollViewStyle}
          keyboardShouldPersistTaps='handled'
        >
          <View style={containerStyle}>

            {/* Begin Header */}
            <View>
              <Image
                source={require('../../assets/images/background_profile.png')}
                style={backgroundImageHeaderStyle}
                resizeMode='cover'
              />
              <View style={containerHeaderStyle}>
                <View style={profileImageLayoutStyle}>
                  {this.renderProfileImage()}
                </View>
                {this.renderButtonAddImage()}
              </View>
            </View>
            {/* End Header */}

            {/* Begin Content */}
            <View style={{ marginTop: 10 }} />
            <TextInput
              label={'Profile name'}
              containerStyle={textInputStyle}
              lineWidth={0}
              onChangeText={value =>
                inputValueChange({ prop: 'profileName', value })}
              value={profileName}
              textError={errorProfileName}
              textErrorStyle={textErrorStyle}
              onSubmitEditing={() => {
                this.firstNameInput.focus();
              }}
              onBlur={() => { }}
              onFocus={() => { }}
            />

            {/* Section Personal info */}
            <View style={{ marginTop: 10 }} />
            <SeparatorHeader
              source={require('../../assets/images/ic_personal.png')}
              title='Personal info'
            />
            <SeparatorLine color={separatorColorStyle} />
            <Picker
              label={'Info Prefix'}
              containerStyle={textInputStyle}
              items={infoPrefixArray}
              onValueChange={(value) =>
                inputValueChange({ prop: 'infoPrefix', value })}
              value={infoPrefix}
            />
            <TextInput
              label={'First name'}
              containerStyle={textInputStyle}
              onChangeText={value =>
                inputValueChange({ prop: 'firstName', value })}
              value={firstName}
              textError={errorFirstName}
              textErrorStyle={textErrorStyle}
              onSubmitEditing={() => {
                this.middleNameInput.focus();
              }}
              ref={input => (this.firstNameInput = input)}
              onBlur={() => { }}
              onFocus={() => { }}
            />

            <TextInput
              label={'Middle name'}
              containerStyle={textInputStyle}
              onChangeText={value =>
                inputValueChange({ prop: 'middleName', value })}
              value={middleName}
              onSubmitEditing={() => {
                this.lastNameInput.focus();
              }}
              ref={input => (this.middleNameInput = input)}
              onBlur={() => { }}
              onFocus={() => { }}
            />

            <TextInput
              label={'Last name'}
              containerStyle={textInputStyle}
              onChangeText={value =>
                inputValueChange({ prop: 'lastName', value })}
              value={lastName}
              textError={errorLastName}
              textErrorStyle={textErrorStyle}
              onSubmitEditing={() => {
                this.suffixInput.focus();
              }}
              ref={input => (this.lastNameInput = input)}
              onBlur={() => { }}
              onFocus={() => { }}
            />

            <TextInput
              label={'Suffix'}
              containerStyle={textInputStyle}
              onChangeText={value =>
                inputValueChange({ prop: 'suffix', value })}
              value={suffix}
              onSubmitEditing={() => {
                this.mobilePhoneInput.focus();
              }}
              ref={input => (this.suffixInput = input)}
              onBlur={() => { }}
              onFocus={() => { }}
            />

            <TextInput
              label={'Mobile no'}
              containerStyle={textInputStyle}
              keyboardType="phone-pad"
              onChangeText={value =>
                inputValueChange({ prop: 'mobilePhone', value })}
              value={mobilePhone}
              textError={errorMobilePhone}
              textErrorStyle={textErrorStyle}
              onSubmitEditing={() => {
                this.emailInput.focus();
              }}
              ref={input => (this.mobilePhoneInput = input)}
              onBlur={() => { }}
              onFocus={() => { }}
            />
            {this.renderSecondMobilePhone()}

            <TextInput
              label={'Email'}
              containerStyle={textInputStyle}
              keyboardType="email-address"
              onChangeText={value =>
                inputValueChange({ prop: 'email', value })}
              value={email}
              onSubmitEditing={() => {
                this.companyNameInput.focus();
              }}
              ref={input => (this.emailInput = input)}
              onBlur={() => { }}
              onFocus={() => { }}
              disabled
            />
            {this.renderSecondEmail()}

            {/* Section Company info */}
            <View style={{ marginTop: 10 }} />
            <SeparatorHeader
              source={require('../../assets/images/ic_company_gray.png')}
              title='Company info'
            />
            <SeparatorLine color={separatorColorStyle} />
            <TextInput
              label={'Company'}
              containerStyle={textInputStyle}
              onChangeText={value =>
                inputValueChange({ prop: 'companyName', value })}
              value={companyName}
              textError={errorCompanyName}
              textErrorStyle={textErrorStyle}
              onSubmitEditing={() => {
                this.positionInput.focus();
              }}
              ref={input => (this.companyNameInput = input)}
              onBlur={() => { }}
              onFocus={() => { }}
            />

            <TextInput
              label={'Position'}
              containerStyle={textInputStyle}
              onChangeText={value =>
                inputValueChange({ prop: 'position', value })}
              value={position}
              textError={errorPosition}
              textErrorStyle={textErrorStyle}
              onSubmitEditing={() => {
                this.companyAddressInput.focus();
              }}
              ref={input => (this.positionInput = input)}
              onBlur={() => { }}
              onFocus={() => { }}
            />

            <TextInput
              label={'Company address'}
              containerStyle={textInputStyle}
              onChangeText={value =>
                inputValueChange({ prop: 'companyAddress', value })}
              value={companyAddress}
              textError={errorCompanyAddress}
              textErrorStyle={textErrorStyle}
              onSubmitEditing={() => {
                this.officePhoneInput.focus();
              }}
              ref={input => (this.companyAddressInput = input)}
              onBlur={() => { }}
              onFocus={() => { }}
            />

            <TextInput
              label={'Office no'}
              containerStyle={textInputStyle}
              onChangeText={value =>
                inputValueChange({ prop: 'officePhone', value })}
              value={officePhone}
              onSubmitEditing={() => {
                this.faxPhoneInput.focus();
              }}
              ref={input => (this.officePhoneInput = input)}
              onBlur={() => { }}
              onFocus={() => { }}
            />

            <TextInput
              label={'Fax no'}
              containerStyle={textInputStyle}
              onChangeText={value =>
                inputValueChange({ prop: 'faxPhone', value })}
              value={faxPhone}
              onSubmitEditing={() => {
                this.businessTypeInput.focus();
              }}
              ref={input => (this.faxPhoneInput = input)}
              onBlur={() => { }}
              onFocus={() => { }}
            />

            <TextInput
              label={'Business type'}
              containerStyle={textInputStyle}
              lineWidth={0}
              onChangeText={value =>
                inputValueChange({ prop: 'businessType', value })}
              value={businessType}
              ref={input => (this.businessTypeInput = input)}
              onBlur={() => { }}
              onFocus={() => { }}
            />
            {/* End Content */}

            <Button
              title='Next'
              buttonStyle={nextBtnStyle}
              onPress={() => createProfile({
                profileImage,
                profileName,
                infoPrefix,
                firstName,
                middleName,
                lastName,
                suffix,
                mobilePhone,
                secondMobilePhone,
                email,
                secondEmail,
                companyName,
                position,
                companyAddress,
                officePhone,
                faxPhone,
                businessType
              })}
            />

          </View>
        </ScrollView>

        <ActionSheet
          ref={o => { this.ActionSheet = o }}
          title={'Select Image Profile'}
          options={['Take Photo...', 'Choose from Library...', 'Cancel']}
          cancelButtonIndex={2}
          onPress={handleActionSheetPress}
        />

        {/* Loading  */}
        {/* <Spinner visible={loading} /> */}
      </SafeAreaView>
    );
  }
}

export default CreateProfileScreen;
