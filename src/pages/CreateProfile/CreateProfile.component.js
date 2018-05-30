import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, TouchableOpacity, Image, } from 'react-native';
import { Button, } from 'react-native-elements';
import ActionSheet from 'react-native-actionsheet'

import TextInput from '../../common/TextInput';
import SeparatorLine from '../../common/SeparatorLine';
import SeparatorHeader from '../../common/SeparatorHeader';
import AddButton from '../../common/AddButton';

import styles from './CreateProfile.style';
import theme from '../../styles/theme.style';


class CreateProfileScreen extends Component {

  static propTypes = {
    createProfileValueChange: PropTypes.func,
    handleActionSheetPress: PropTypes.func,
    createProfile: PropTypes.func,
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
    error: PropTypes.string,
    loading: PropTypes.bool,
    isShowSecondMobilePhone: PropTypes.bool,
    isShowSecondEmail: PropTypes.bool,
    errorProfileName: PropTypes.string,
    errorFname: PropTypes.string,
    errorLname: PropTypes.string,
    errorMobilePhone: PropTypes.string,
    errorCompanyName: PropTypes.string,
    errorPosition: PropTypes.string,
    errorCompanyAddress: PropTypes.string,
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
    console.log(this.props.imageProfile)
    if (this.props.imageProfile == null) {
      return (
        <Image
          resizeMode='cover'
          source={require('../../assets/images/add_display.png')}
          style={styles.imgProfileStyle}
        />
      )
    }
    return (
      <Image style={styles.imgProfileStyle} resizeMode='cover' source={this.props.imageProfile} />
    )
  }

  renderSecondMobilePhone() {
    const { createProfileValueChange, secondMobilePhone, isShowSecondMobilePhone } = this.props
    const { secondGroupLayoutStyle, imgIconInputStyle } = styles
    if (isShowSecondMobilePhone) {
      return (
        <View>
          <View style={secondGroupLayoutStyle} >
            <TouchableOpacity
              onPress={() =>
                createProfileValueChange({ prop: 'isShowSecondMobilePhone', value: false })}
            >
              <Image
                style={imgIconInputStyle}
                source={require('../../assets/images/ic_delete.png')}
              />
            </TouchableOpacity>

            <TextInput lineWidth={0}
              label={'Second mobile no'}
              keyboardType="phone-pad"
              returnKeyType="next"
              onChangeText={text =>
                createProfileValueChange({ prop: 'secondMobilePhone', value: text })}
              value={secondMobilePhone}
              onFocus={() => { }}
            />
          </View>
          <SeparatorLine />
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
        <SeparatorLine />
      </View>

    );
  }

  renderSecondEmail() {
    const { createProfileValueChange, secondEmail, isShowSecondEmail } = this.props
    const { secondGroupLayoutStyle, imgIconInputStyle } = styles
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

            <TextInput lineWidth={0}
              label={'Second email'}
              keyboardType="email-address"
              returnKeyType="next"
              onChangeText={text =>
                createProfileValueChange({ prop: 'secondEmail', value: text })}
              value={secondEmail}
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
      cameraLayoutGroupStyle,
      imgCameraStyle,
      nextBtnStyle
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

    } = this.props

    console.log('asdasd'+this.props.errorFname)
    return (
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
              <View
                style={cameraLayoutGroupStyle}
              >
                <TouchableOpacity onPress={this.showActionSheet}>
                  <Image
                    resizeMode='cover'
                    source={require('../../assets/images/add_picture.png')}
                    style={imgCameraStyle}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* End Header */}

          {/* Begin Content */}
          <View style={{ marginTop: 10 }} />
          <TextInput lineWidth={0}
            label={'Profile name'}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.fnameInput.focus();
            }}
            textError={errorProfileName}
            onChangeText={text =>
              createProfileValueChange({ prop: 'profileName', value: text })}
            value={profileName}
            onFocus={() => { }}
          />

          {/* Section Personal info */}
          <View style={{ marginTop: 10 }} />
          <SeparatorHeader
            source={require('../../assets/images/ic_personal.png')}
            title='Personal info'
          />
          <SeparatorLine />
          <TextInput lineWidth={1}
            editable={false}
            label={'Info prefix'}
            keyboardType="default"
            onChangeText={text =>
              createProfileValueChange({ prop: 'infoPrefix', value: text })}
            value={infoPrefix}
            onFocus={() => { }}
          />

          <TextInput lineWidth={1}
            label={'First name'}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.mnameInput.focus();
            }}
            ref={input => (this.fnameInput = input)}
            onChangeText={text =>
              createProfileValueChange({ prop: 'fname', value: text })}
            value={fname}
            textError={errorFname}
            onFocus={() => { }}
          />

          <TextInput lineWidth={1}
            label={'Middle name'}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.lnameInput.focus();
            }}
            ref={input => (this.mnameInput = input)}
            onChangeText={text =>
              createProfileValueChange({ prop: 'mname', value: text })}
            value={mname}
            onFocus={() => { }}
          />

          <TextInput lineWidth={1}
            label={'Last name'}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.suffixInput.focus();
            }}
            ref={input => (this.lnameInput = input)}
            onChangeText={text =>
              createProfileValueChange({ prop: 'lname', value: text })}
            value={lname}
            textError={errorLname}
            onFocus={() => { }}
          />

          <TextInput lineWidth={1}
            label={'Suffix'}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.mobilePhoneInput.focus();
            }}
            ref={input => (this.suffixInput = input)}
            onChangeText={text =>
              createProfileValueChange({ prop: 'suffix', value: text })}
            value={suffix}
            onFocus={() => { }}
          />

          <TextInput lineWidth={1}
            label={'Mobile no'}
            keyboardType="phone-pad"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.emailInput.focus();
            }}
            ref={input => (this.mobilePhoneInput = input)}
            onChangeText={text =>
              createProfileValueChange({ prop: 'mobilePhone', value: text })}
            value={mobilePhone}
            textError={errorMobilePhone}
            onFocus={() => { }}
          />
          {this.renderSecondMobilePhone()}

          <TextInput lineWidth={1}
            label={'Email'}
            keyboardType="email-address"
            returnKeyType="next"
            disabled
            onSubmitEditing={() => {
              this.companyNameInput.focus();
            }}
            ref={input => (this.emailInput = input)}
            onChangeText={text =>
              createProfileValueChange({ prop: 'email', value: text })}
            value={email}
            onFocus={() => { }}
          />
          {this.renderSecondEmail()}

          {/* Section Company info */}
          <View style={{ marginTop: 10 }} />
          <SeparatorHeader
            source={require('../../assets/images/ic_company.png')}
            title='Company info'
          />
          <SeparatorLine />
          <TextInput lineWidth={1}
            label={'Company'}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.positionInput.focus();
            }}
            ref={input => (this.companyNameInput = input)}
            onChangeText={text =>
              createProfileValueChange({ prop: 'companyName', value: text })}
            value={companyName}
            textError={errorCompanyName}
            onFocus={() => { }}
          />

          <TextInput lineWidth={1}
            label={'Position'}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.companyAddressInput.focus();
            }}
            ref={input => (this.positionInput = input)}
            onChangeText={text =>
              createProfileValueChange({ prop: 'position', value: text })}
            value={position}
            textError={errorPosition}
            onFocus={() => { }}
          />

          <TextInput lineWidth={1}
            label={'Company address'}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.officePhoneInput.focus();
            }}
            ref={input => (this.companyAddressInput = input)}
            onChangeText={text =>
              createProfileValueChange({ prop: 'companyAddress', value: text })}
            value={companyAddress}
            textError={errorCompanyAddress}
            onFocus={() => { }}
          />

          <TextInput lineWidth={1}
            label={'Office no'}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.faxPhoneInput.focus();
            }}
            ref={input => (this.officePhoneInput = input)}
            onChangeText={text =>
              createProfileValueChange({ prop: 'officePhone', value: text })}
            value={officePhone}
            onFocus={() => { }}
          />

          <TextInput lineWidth={1}
            label={'Fax no'}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.businessTypeInput.focus();
            }}
            ref={input => (this.faxPhoneInput = input)}
            onChangeText={text =>
              createProfileValueChange({ prop: 'faxPhone', value: text })}
            value={faxPhone}
            onFocus={() => { }}
          />

          <TextInput lineWidth={0}
            label={'Business type'}
            keyboardType="default"
            returnKeyType="done"
            ref={input => (this.businessTypeInput = input)}
            onChangeText={text =>
              createProfileValueChange({ prop: 'businessType', value: text })}
            value={businessType}
            onFocus={() => { }}
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

    );
  }
}

export default CreateProfileScreen;
