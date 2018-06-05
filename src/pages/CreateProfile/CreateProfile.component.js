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
  USER_TYPE_NORMAL
} from '../../constants/constants';
import styles from './CreateProfile.style';
import theme from '../../styles/theme.style';


class CreateProfileScreen extends Component {

  static propTypes = {
    createProfileValueChange: PropTypes.func,
    handleActionSheetPress: PropTypes.func,
    createProfile: PropTypes.func,
    imageProfile: PropTypes.object,
    profileName: PropTypes.string,
    infoPrefix: PropTypes.string,
    fname: PropTypes.string,
    mname: PropTypes.string,
    lname: PropTypes.string,
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
    error: PropTypes.string,
    isShowSecondMobilePhone: PropTypes.bool,
    isShowSecondEmail: PropTypes.bool,
    errorProfileName: PropTypes.string,
    errorFname: PropTypes.string,
    errorLname: PropTypes.string,
    errorMobilePhone: PropTypes.string,
    errorCompanyName: PropTypes.string,
    errorPosition: PropTypes.string,
    errorCompanyAddress: PropTypes.string,
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

  renderImageProfile() {
    // Show image user type normal
    const { userType, imageProfile, fbId } = this.props
    const {
      imgProfileStyle,
      imgProgressStyle,
    } = styles

    if (userType === USER_TYPE_NORMAL) {
      if (imageProfile === null) {
        // show image profile from default
        return (
          <Image
            source={require('../../assets/images/add_display.png')}
            style={imgProfileStyle}
            resizeMode='cover'
          />
        )
      }
      // show image profile from picker
      return (
        <Image style={imgProfileStyle} resizeMode='cover' source={imageProfile} />
      )
    }

    // Show image user type facebook
    if (fbId === '') {
      // show image profile from default
      return (
        <Image
          source={require('../../assets/images/add_display.png')}
          style={imgProfileStyle}
          resizeMode='cover'
        />
      )
    }

    // show image profile from fb graph api
    return (
      <View>
        <Image
          source={require('../../assets/images/add_display.png')}
          style={imgProfileStyle}
          resizeMode='cover'
        />
        <ImageLoading
          source={{ uri: `https://graph.facebook.com/${fbId}/picture?type=large&width=276&height=276` }}
          indicator={ProgressCircle}
          imageStyle={{
            borderRadius: 69,
            overflow: 'hidden'
          }}
          style={imgProgressStyle}
          resizeMode='cover'
        />
      </View>
    )
  }

  renderButtonAddImage() {
    const { cameraLayoutGroupStyle, imgCameraStyle } = styles

    //Show button add image
    if (this.props.userType === USER_TYPE_NORMAL) {
      return (
        <View style={cameraLayoutGroupStyle}>
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
    const { createProfileValueChange, secondMobilePhone, isShowSecondMobilePhone } = this.props
    const { secondGroupLayoutStyle, imgIconInputStyle, textInputStyle } = styles

    if (isShowSecondMobilePhone) {
      return (
        <View>
          <View style={secondGroupLayoutStyle}>
            <TouchableOpacity
              onPress={() =>
                createProfileValueChange({ prop: 'isShowSecondMobilePhone', value: false })}
            >
              <Image
                source={require('../../assets/images/ic_delete.png')}
                style={imgIconInputStyle}
              />
            </TouchableOpacity>

            <TextInput
              label={'Second mobile no'}
              keyboardType="phone-pad"
              returnKeyType="next"
              inputContainerPadding={16}
              containerStyle={textInputStyle}
              fontSize={19}
              lineWidth={0}
              labelTextStyle={{ paddingLeft: 9 }}
              inputContainerStyle={{ paddingLeft: 9 }}
              onChangeText={value =>
                createProfileValueChange({ prop: 'secondMobilePhone', value })}
              value={secondMobilePhone}
              onFocus={() => { }}
              onBlur={() => { }}
            />
          </View>

          <SeparatorLine color={styles.separatorColorStyle} />
        </View>

      )
    }
    return (
      <View>
        <AddButton
          title='Add mobile no'
          source={require('../../assets/images/ic_add.png')}
          onPress={() =>
            createProfileValueChange({ prop: 'isShowSecondMobilePhone', value: true })}
        />
        <SeparatorLine color={styles.separatorColorStyle} />
      </View>

    );
  }

  renderSecondEmail() {
    const { createProfileValueChange, secondEmail, isShowSecondEmail } = this.props
    const { secondGroupLayoutStyle, imgIconInputStyle, textInputStyle } = styles
    if (isShowSecondEmail) {
      return (
        <View>
          <View style={secondGroupLayoutStyle}>
            <TouchableOpacity
              onPress={() =>
                createProfileValueChange({ prop: 'isShowSecondEmail', value: false })}
            >
              <Image
                style={imgIconInputStyle}
                source={require('../../assets/images/ic_delete.png')}
              />
            </TouchableOpacity>

            <TextInput
              lineWidth={0}
              label={'Second email'}
              keyboardType="email-address"
              returnKeyType="next"
              inputContainerPadding={16}
              containerStyle={textInputStyle}
              fontSize={19}
              labelTextStyle={{ paddingLeft: 9 }}
              inputContainerStyle={{ paddingLeft: 9 }}
              onChangeText={value =>
                createProfileValueChange({ prop: 'secondEmail', value })}
              value={secondEmail}
              onFocus={() => { }}
              onBlur={() => { }}
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
          onPress={() => createProfileValueChange({ prop: 'isShowSecondEmail', value: true })}
        />
      </View>
    );
  }

  render() {
    const {
      containerStyle,
      imgBackgroundHeaderStyle,
      imgProfileAndCameraLayoutGroupStyle,
      profileLayoutGroupStyle,
      nextBtnStyle,
      textInputStyle,
      separatorColorStyle,
      errorStyle
    } = styles;

    const {
      createProfileValueChange,
      handleActionSheetPress,
      createProfile,
      profileName,
      infoPrefix,
      fname,
      mname,
      lname,
      suffix,
      mobilePhone,
      email,
      companyName,
      position,
      companyAddress,
      officePhone,
      faxPhone,
      businessType,
      errorProfileName,
      errorFname,
      errorLname,
      errorMobilePhone,
      errorCompanyName,
      errorPosition,
      errorCompanyAddress,
      loading
    } = this.props


    return (
      <SafeAreaView
        forceInset={{ bottom: 'always' }}
        style={containerStyle}
      >
        <View style={containerStyle}>
          <ScrollView
            style={containerStyle}
            keyboardShouldPersistTaps='handled'
          >
            {/* Begin Header */}
            <View>
              <Image
                resizeMode='cover'
                source={require('../../assets/images/background_profile.png')}
                style={imgBackgroundHeaderStyle}
              />
              <View style={imgProfileAndCameraLayoutGroupStyle}>
                <View
                  style={profileLayoutGroupStyle}
                >
                  {this.renderImageProfile()}
                </View>
                {this.renderButtonAddImage()}
              </View>
            </View>
            {/* End Header */}

            {/* Begin Content */}
            <View style={{ marginTop: 10 }} />
            <TextInput
              lineWidth={0}
              label={'Profile name'}
              keyboardType="default"
              returnKeyType="next"
              onSubmitEditing={() => {
                this.fnameInput.focus();
              }}
              containerStyle={textInputStyle}
              fontSize={19}
              inputContainerPadding={16}
              labelTextStyle={{ paddingLeft: 9 }}
              inputContainerStyle={{ paddingLeft: 9 }}
              textError={errorProfileName}
              errorStyle={errorStyle}
              onChangeText={value =>
                createProfileValueChange({ prop: 'profileName', value })}
              value={profileName}
              onFocus={() => { }}
              onBlur={() => { }}
            />

            {/* Section Personal info */}
            <View style={{ marginTop: 10 }} />
            <SeparatorHeader
              source={require('../../assets/images/ic_personal.png')}
              title='Personal info'
            />
            <SeparatorLine color={separatorColorStyle} />
            <Picker
              items={[
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
              ]}
              label={'Info Prefix'}
              lineWidth={1}
              containerStyle={textInputStyle}
              fontSize={19}
              inputContainerPadding={16}
              labelTextStyle={{ paddingLeft: 9 }}
              inputContainerStyle={{ paddingLeft: 9 }}
              onValueChange={(value) => createProfileValueChange({ prop: 'infoPrefix', value })}
              value={infoPrefix}
            />
            <TextInput
              lineWidth={1}
              label={'First name'}
              keyboardType="default"
              returnKeyType="next"
              onSubmitEditing={() => {
                this.mnameInput.focus();
              }}
              ref={input => (this.fnameInput = input)}
              containerStyle={textInputStyle}
              fontSize={19}
              inputContainerPadding={16}
              labelTextStyle={{ paddingLeft: 9 }}
              inputContainerStyle={{ paddingLeft: 9 }}
              onChangeText={value =>
                createProfileValueChange({ prop: 'fname', value })}
              value={fname}
              textError={errorFname}
              errorStyle={errorStyle}
              onFocus={() => { }}
              onBlur={() => { }}
            />

            <TextInput
              lineWidth={1}
              label={'Middle name'}
              keyboardType="default"
              returnKeyType="next"
              onSubmitEditing={() => {
                this.lnameInput.focus();
              }}
              ref={input => (this.mnameInput = input)}
              containerStyle={textInputStyle}
              fontSize={19}
              inputContainerPadding={16}
              labelTextStyle={{ paddingLeft: 9 }}
              inputContainerStyle={{ paddingLeft: 9 }}
              onChangeText={value =>
                createProfileValueChange({ prop: 'mname', value })}
              value={mname}
              onFocus={() => { }}
              onBlur={() => { }}
            />

            <TextInput
              lineWidth={1}
              label={'Last name'}
              keyboardType="default"
              returnKeyType="next"
              onSubmitEditing={() => {
                this.suffixInput.focus();
              }}
              ref={input => (this.lnameInput = input)}
              containerStyle={textInputStyle}
              fontSize={19}
              inputContainerPadding={16}
              labelTextStyle={{ paddingLeft: 9 }}
              inputContainerStyle={{ paddingLeft: 9 }}
              onChangeText={value =>
                createProfileValueChange({ prop: 'lname', value })}
              value={lname}
              textError={errorLname}
              errorStyle={errorStyle}
              onFocus={() => { }}
              onBlur={() => { }}
            />

            <TextInput
              lineWidth={1}
              label={'Suffix'}
              keyboardType="default"
              returnKeyType="next"
              onSubmitEditing={() => {
                this.mobilePhoneInput.focus();
              }}
              ref={input => (this.suffixInput = input)}
              containerStyle={textInputStyle}
              fontSize={19}
              inputContainerPadding={16}
              labelTextStyle={{ paddingLeft: 9 }}
              inputContainerStyle={{ paddingLeft: 9 }}
              onChangeText={value =>
                createProfileValueChange({ prop: 'suffix', value })}
              value={suffix}
              onFocus={() => { }}
              onBlur={() => { }}
            />

            <TextInput
              lineWidth={1}
              label={'Mobile no'}
              keyboardType="phone-pad"
              returnKeyType="next"
              onSubmitEditing={() => {
                this.emailInput.focus();
              }}
              ref={input => (this.mobilePhoneInput = input)}
              containerStyle={textInputStyle}
              fontSize={19}
              inputContainerPadding={16}
              labelTextStyle={{ paddingLeft: 9 }}
              inputContainerStyle={{ paddingLeft: 9 }}
              onChangeText={value =>
                createProfileValueChange({ prop: 'mobilePhone', value })}
              value={mobilePhone}
              textError={errorMobilePhone}
              errorStyle={errorStyle}
              onFocus={() => { }}
              onBlur={() => { }}
            />
            {this.renderSecondMobilePhone()}

            <TextInput
              lineWidth={1}
              label={'Email'}
              keyboardType="email-address"
              returnKeyType="next"
              disabled
              onSubmitEditing={() => {
                this.companyNameInput.focus();
              }}
              ref={input => (this.emailInput = input)}
              containerStyle={textInputStyle}
              fontSize={19}
              inputContainerPadding={16}
              labelTextStyle={{ paddingLeft: 9 }}
              inputContainerStyle={{ paddingLeft: 9 }}
              onChangeText={value =>
                createProfileValueChange({ prop: 'email', value })}
              value={email}
              onFocus={() => { }}
              onBlur={() => { }}
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
              lineWidth={1}
              label={'Company'}
              keyboardType="default"
              returnKeyType="next"
              onSubmitEditing={() => {
                this.positionInput.focus();
              }}
              ref={input => (this.companyNameInput = input)}
              containerStyle={textInputStyle}
              fontSize={19}
              inputContainerPadding={16}
              labelTextStyle={{ paddingLeft: 9 }}
              inputContainerStyle={{ paddingLeft: 9 }}
              onChangeText={value =>
                createProfileValueChange({ prop: 'companyName', value })}
              value={companyName}
              textError={errorCompanyName}
              errorStyle={errorStyle}
              onFocus={() => { }}
              onBlur={() => { }}
            />

            <TextInput
              lineWidth={1}
              label={'Position'}
              keyboardType="default"
              returnKeyType="next"
              onSubmitEditing={() => {
                this.companyAddressInput.focus();
              }}
              ref={input => (this.positionInput = input)}
              containerStyle={textInputStyle}
              fontSize={19}
              inputContainerPadding={16}
              labelTextStyle={{ paddingLeft: 9 }}
              inputContainerStyle={{ paddingLeft: 9 }}
              onChangeText={value =>
                createProfileValueChange({ prop: 'position', value })}
              value={position}
              textError={errorPosition}
              errorStyle={errorStyle}
              onFocus={() => { }}
              onBlur={() => { }}
            />

            <TextInput
              lineWidth={1}
              label={'Company address'}
              keyboardType="default"
              returnKeyType="next"
              onSubmitEditing={() => {
                this.officePhoneInput.focus();
              }}
              ref={input => (this.companyAddressInput = input)}
              containerStyle={textInputStyle}
              fontSize={19}
              inputContainerPadding={16}
              labelTextStyle={{ paddingLeft: 9 }}
              inputContainerStyle={{ paddingLeft: 9 }}
              onChangeText={value =>
                createProfileValueChange({ prop: 'companyAddress', value })}
              value={companyAddress}
              textError={errorCompanyAddress}
              errorStyle={errorStyle}
              onFocus={() => { }}
              onBlur={() => { }}
            />

            <TextInput
              lineWidth={1}
              label={'Office no'}
              keyboardType="default"
              returnKeyType="next"
              onSubmitEditing={() => {
                this.faxPhoneInput.focus();
              }}
              ref={input => (this.officePhoneInput = input)}
              containerStyle={textInputStyle}
              fontSize={19}
              inputContainerPadding={16}
              labelTextStyle={{ paddingLeft: 9 }}
              inputContainerStyle={{ paddingLeft: 9 }}
              onChangeText={value =>
                createProfileValueChange({ prop: 'officePhone', value })}
              value={officePhone}
              onFocus={() => { }}
              onBlur={() => { }}
            />

            <TextInput
              lineWidth={1}
              label={'Fax no'}
              keyboardType="default"
              returnKeyType="next"
              onSubmitEditing={() => {
                this.businessTypeInput.focus();
              }}
              ref={input => (this.faxPhoneInput = input)}
              containerStyle={textInputStyle}
              fontSize={19}
              inputContainerPadding={16}
              labelTextStyle={{ paddingLeft: 9 }}
              inputContainerStyle={{ paddingLeft: 9 }}
              onChangeText={value =>
                createProfileValueChange({ prop: 'faxPhone', value })}
              value={faxPhone}
              onFocus={() => { }}
              onBlur={() => { }}
            />

            <TextInput
              lineWidth={0}
              label={'Business type'}
              keyboardType="default"
              returnKeyType="done"
              ref={input => (this.businessTypeInput = input)}
              containerStyle={textInputStyle}
              fontSize={19}
              inputContainerPadding={16}
              labelTextStyle={{ paddingLeft: 9 }}
              inputContainerStyle={{ paddingLeft: 9 }}
              onChangeText={value =>
                createProfileValueChange({ prop: 'businessType', value })}
              value={businessType}
              onFocus={() => { }}
              onBlur={() => { }}
            />
            {/* End Content */}

            <Button
              title='Next'
              buttonStyle={nextBtnStyle}
              onPress={() => createProfile({
                infoPrefix,
                fname,
                mname,
                lname,
                suffix,
                mobilePhone,
                email,
                companyName,
                position,
                companyAddress,
                officePhone,
                faxPhone,
                businessType
              })}
            />
          </ScrollView>
          <ActionSheet
            ref={o => { this.ActionSheet = o }}
            title={'Select Image Profile'}
            options={['Take Photo...', 'Choose from Library...', 'Cancel']}
            cancelButtonIndex={2}
            onPress={handleActionSheetPress}
          />
        </View>
        
        {/* Loading  */}
        <Spinner visible={loading} />
      </SafeAreaView>


    );
  }
}

export default CreateProfileScreen;
