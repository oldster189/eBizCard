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
    createProfileValueChange: PropTypes.func.isRequired,
    handleActionSheetPress: PropTypes.func.isRequired, 
    profileName: PropTypes.string.isRequired,
    infoPrefix: PropTypes.string.isRequired,
    fname: PropTypes.string.isRequired,
    mname: PropTypes.string.isRequired,
    lname: PropTypes.string.isRequired,
    suffix: PropTypes.string.isRequired,
    mobilePhone: PropTypes.string.isRequired,
    secondMobilePhone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    secondEmail: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    companyAddress: PropTypes.string.isRequired,
    officePhone: PropTypes.string.isRequired,
    faxPhone: PropTypes.string.isRequired,
    businessType: PropTypes.string.isRequired,
    error: PropTypes.string,
    loading: PropTypes.bool,
    isShowSecondMobilePhone: PropTypes.bool,
    isShowSecondEmail: PropTypes.bool,
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

            <TextInput
              placeholder={'Second mobile no'}
              keyboardType="phone-pad"
              returnKeyType="next"
              onChangeTextValue={text =>
                createProfileValueChange({ prop: 'secondMobilePhone', value: text })}
              value={secondMobilePhone}
              hideUnderLine
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

            <TextInput
              placeholder={'Second email'}
              keyboardType="email-address"
              returnKeyType="next"
              onChangeTextValue={text =>
                createProfileValueChange({ prop: 'secondEmail', value: text })}
              value={secondEmail}
              hideUnderLine
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
    } = this.props

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
          <TextInput
            placeholder={'Profile name'}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.fnameInput.focus();
            }}
            onChangeTextValue={text =>
              createProfileValueChange({ prop: 'profileName', value: text })}
            value={profileName}
          />

          {/* Section Personal info */}
          <View style={{ marginTop: 10 }} />
          <SeparatorHeader
            source={require('../../assets/images/ic_personal.png')}
            title='Personal info'
          />
          <SeparatorLine />
          <TextInput
            editable={false}
            placeholder={'Info prefix'}
            keyboardType="default"
            onChangeTextValue={text =>
              createProfileValueChange({ prop: 'infoPrefix', value: text })}
            value={infoPrefix}
          />

          <TextInput
            placeholder={'First name'}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.mnameInput.focus();
            }}
            ref={input => (this.fnameInput = input)}
            onChangeTextValue={text =>
              createProfileValueChange({ prop: 'fname', value: text })}
            value={fname}
          />

          <TextInput
            placeholder={'Middle name'}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.lnameInput.focus();
            }}
            ref={input => (this.mnameInput = input)}
            onChangeTextValue={text =>
              createProfileValueChange({ prop: 'mname', value: text })}
            value={mname}
          />

          <TextInput
            placeholder={'Last name'}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.suffixInput.focus();
            }}
            ref={input => (this.lnameInput = input)}
            onChangeTextValue={text =>
              createProfileValueChange({ prop: 'lname', value: text })}
            value={lname}
          />

          <TextInput
            placeholder={'Suffix'}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.mobilePhoneInput.focus();
            }}
            ref={input => (this.suffixInput = input)}
            onChangeTextValue={text =>
              createProfileValueChange({ prop: 'suffix', value: text })}
            value={suffix}
          />

          <TextInput
            placeholder={'Mobile no'}
            keyboardType="phone-pad"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.emailInput.focus();
            }}
            ref={input => (this.mobilePhoneInput = input)}
            onChangeTextValue={text =>
              createProfileValueChange({ prop: 'mobilePhone', value: text })}
            value={mobilePhone}
          />
          {this.renderSecondMobilePhone()}

          <TextInput
            placeholder={'Email'}
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.companyNameInput.focus();
            }}
            ref={input => (this.emailInput = input)}
            onChangeTextValue={text =>
              createProfileValueChange({ prop: 'email', value: text })}
            value={email}
          />
          {this.renderSecondEmail()}

          {/* Section Company info */}
          <View style={{ marginTop: 10 }} />
          <SeparatorHeader
            source={require('../../assets/images/ic_company.png')}
            title='Company info'
          />

          <TextInput
            placeholder={'Company'}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.positionInput.focus();
            }}
            ref={input => (this.companyNameInput = input)}
            onChangeTextValue={text =>
              createProfileValueChange({ prop: 'companyName', value: text })}
            value={companyName}
          />

          <TextInput
            placeholder={'Position'}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.companyAddressInput.focus();
            }}
            ref={input => (this.positionInput = input)}
            onChangeTextValue={text =>
              createProfileValueChange({ prop: 'position', value: text })}
            value={position}
          />

          <TextInput
            placeholder={'Company address'}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.officePhoneInput.focus();
            }}
            ref={input => (this.companyAddressInput = input)}
            onChangeTextValue={text =>
              createProfileValueChange({ prop: 'companyAddress', value: text })}
            value={companyAddress}
          />

          <TextInput
            placeholder={'Office no'}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.faxPhoneInput.focus();
            }}
            ref={input => (this.officePhoneInput = input)}
            onChangeTextValue={text =>
              createProfileValueChange({ prop: 'officePhone', value: text })}
            value={officePhone}
          />

          <TextInput
            placeholder={'Fax no'}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => {
              this.businessTypeInput.focus();
            }}
            ref={input => (this.faxPhoneInput = input)}
            onChangeTextValue={text =>
              createProfileValueChange({ prop: 'faxPhone', value: text })}
            value={faxPhone}
          />

          <TextInput
            placeholder={'Business type'}
            keyboardType="default"
            returnKeyType="done"
            ref={input => (this.businessTypeInput = input)}
            onChangeTextValue={text =>
              createProfileValueChange({ prop: 'businessType', value: text })}
            value={businessType}
          />
          {/* End Content */}

          <Button
            title='Next'
            buttonStyle={nextBtnStyle}
            onPress={() => { }}
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
