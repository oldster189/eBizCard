import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Spinner from 'react-native-loading-spinner-overlay';

import TextInput from '../../common/TextInput'
import { LabelWithLink } from '../../common';
import PasswordInputText from '../../common/PasswordInputText';
import styles from './Register.style';
import theme from '../../styles/theme.style';

class RegisterScreen extends Component {

  

  onClickSignInGoogle() {
    console.log('Click Sign in Google!');
  }

  renderErrorDialog() {
    const { errorMessage } = this.props
    console.log(errorMessage)
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
      safeAreaStyle,
      scrollViewStyle,
      containerStyle,
      labelSignInStyle,
      socialButtonGroupStyle,
      lineSeparatorStyle,
      separatorLayoutStyle,
      textSeparatorStyle,
      nextBtnGroupStyle,
      formGroupStyle,
      inputGroupStyle,
      iconImageStyle,
      nextButtonStyle,
      containerBottomStyle,
      socialButtonStyle,
      textInputStyle,
      textErrorStyle
    } = styles;

    const {
      registerValueChange,
      normalRegister,
      facebookLogin,
      loginScreen,
      email,
      password,
      rePassword,
      errorEmail,
      errorPassword,
      errorRePassword,
      loading
    } = this.props;


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
            <View style={formGroupStyle}>
              <View style={inputGroupStyle}>
                {/* Icon Image */}
                <Image
                  source={require('../../assets/images/ic_mail_auth.png')}
                  style={iconImageStyle}
                />
                <TextInput
                  label={'Email'}
                  containerStyle={textInputStyle}
                  keyboardType="email-address"
                  returnKeyType="next" 
                  inputContainerPadding={8} 
                  labelTextStyle={{ paddingLeft: 0 }}
                  inputContainerStyle={{ paddingLeft: 0 }}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={text =>
                    registerValueChange({ prop: 'email', value: text })}
                  value={email}
                  textError={errorEmail}
                  textErrorStyle={textErrorStyle}
                  onSubmitEditing={() => {
                    this.passwordInput.focus();
                  }}
                  onBlur={() => { }}
                  onFocus={() => { }}
                  blurOnSubmit={false}
                />
              </View>

              <View style={inputGroupStyle}>
                {/* Icon Image */}
                <Image
                  source={require('../../assets/images/ic_password.png')}
                  style={iconImageStyle}
                />
                <PasswordInputText
                  label="Password"
                  containerStyle={textInputStyle}
                  keyboardType="default"
                  returnKeyType="next"
                  lineWidth={1}
                  autoCorrect={false}
                  autoCapitalize="none"
                  secureTextEntry
                  fontSize={theme.TEXT_FONT}
                  onChangeText={text =>
                    registerValueChange({ prop: 'password', value: text })}
                  value={password}
                  textError={errorPassword}
                  textErrorStyle={textErrorStyle}
                  onSubmitEditing={() => {
                    this.rePasswordInput.focus();
                  }}
                  ref={input => (this.passwordInput = input)}
                  onBlur={() => { }}
                  onFocus={() => { }}
                />
              </View>

              <View style={inputGroupStyle}>
                {/* Icon Image */}
                <Image
                  source={require('../../assets/images/ic_password.png')}
                  style={iconImageStyle}
                />
                <PasswordInputText
                  label="Confirm Password"
                  containerStyle={textInputStyle}
                  keyboardType="default"
                  returnKeyType="done"
                  lineWidth={1}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  fontSize={theme.TEXT_FONT}
                  onChangeText={text =>
                    registerValueChange({ prop: 'rePassword', value: text })}
                  value={rePassword}
                  textError={errorRePassword}
                  textErrorStyle={textErrorStyle}
                  ref={input => (this.rePasswordInput = input)}
                  onBlur={() => { }}
                  onFocus={() => { }}
                />
              </View>
            </View>

            {/* Next Button */}
            <View style={nextBtnGroupStyle}>
              <TouchableOpacity
                onPress={() => normalRegister({ email, password, rePassword })}
              >
                <Image
                  source={require('../../assets/images/button_next.png')}
                  style={nextButtonStyle}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={containerBottomStyle}>
            <View style={separatorLayoutStyle} >
              {/* Line Separator */}
              <View style={lineSeparatorStyle} />
              {/* Text Separator */}
              <Text style={textSeparatorStyle}> Or sign up with </Text>
              {/* Line Separator */}
              <View style={lineSeparatorStyle} />
            </View>
            <View style={socialButtonGroupStyle}>

              {/* Facebook Login */}
              <TouchableOpacity onPress={facebookLogin}>
                <Image
                  source={require('../../assets/images/ic_facebook.png')}
                  style={socialButtonStyle}
                />
              </TouchableOpacity>

              {/* Google Login */}
              <TouchableOpacity onPress={() => this.onClickSignInGoogle()}>
                <Image
                  source={require('../../assets/images/ic_google.png')}
                  style={socialButtonStyle}
                />
              </TouchableOpacity>
            </View>

            {/* Button Sign in  */}
            <View style={labelSignInStyle}>
              <LabelWithLink
                textDesc={'you have account already'}
                textLink='Sign in now'
                onPress={loginScreen}
              />
            </View>
          </View>

        </ScrollView>

        {/* Loading */} 
        <Spinner visible={loading} /> 
      </SafeAreaView>
    );
  }
}

RegisterScreen.propTypes = {
  //Action Creator
  registerValueChange: PropTypes.func,
  normalRegister: PropTypes.func,
  facebookLogin: PropTypes.func,
  loginScreen: PropTypes.func,

  //Data
  email: PropTypes.string,
  password: PropTypes.string,
  rePassword: PropTypes.string,

  //Error
  errorMessage: PropTypes.string,
  errorEmail: PropTypes.string,
  errorPassword: PropTypes.string,
  errorRePassword: PropTypes.string,

  //Loading
  loading: PropTypes.bool,
};

RegisterScreen.navigationOptions = {
  title: 'Sign up',
  headerStyle: {
    backgroundColor: theme.NAV_BAR_COLOR,
  },
  headerTitleStyle: { color: 'white' },
  headerBackTitle: ' '
}

export default RegisterScreen;
