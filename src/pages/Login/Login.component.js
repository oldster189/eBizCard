import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Spinner from 'react-native-loading-spinner-overlay';

import TextInput from '../../common/TextInput'
import { LabelWithLink, TextLink } from '../../common';
import PasswordInputText from '../../common/PasswordInputText';
import styles from './Login.style';
import theme from '../../styles/theme.style';

class LoginScreen extends Component {

  onClickSignInGoogle() {
    console.log('Click Sign in Google!');
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
      safeAreaStyle,
      scrollViewStyle,
      containerStyle,
      labelSignUpStyle,
      socialButtonGroupStyle,
      lineSeparatorStyle,
      separatorLayoutStyle,
      textSeparatorStyle,
      forgetPasswordTextStyle,
      forgetPasswordGroupStyle,
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
      loginValueChange,
      normalLogin,
      facebookLogin,
      registerScreen,
      forgetPasswordScreen,
      email,
      password,
      errorEmail,
      errorPassword,
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
                    loginValueChange({ prop: 'email', value: text })}
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
                  returnKeyType="done"
                  lineWidth={1}
                  autoCorrect={false}
                  autoCapitalize="none"
                  secureTextEntry
                  fontSize={theme.TEXT_FONT}
                  onChangeText={text =>
                    loginValueChange({ prop: 'password', value: text })}
                  value={password}
                  textError={errorPassword}
                  textErrorStyle={textErrorStyle}
                  ref={input => (this.passwordInput = input)}
                  onBlur={() => { }}
                  onFocus={() => { }}
                />
              </View>
            </View>

            {/* Next Button */}
            <View style={forgetPasswordGroupStyle}>
              <TouchableOpacity
                onPress={() => normalLogin({ email, password })}
              >
                <Image
                  source={require('../../assets/images/button_next.png')}
                  style={nextButtonStyle}
                />
              </TouchableOpacity>
              <TextLink
                title='Forget password'
                onPress={forgetPasswordScreen}
                textLinkStyle={forgetPasswordTextStyle}
              />
            </View>
          </View>

          <View style={containerBottomStyle}>
            <View style={separatorLayoutStyle} >
              {/* Line Separator */}
              <View style={lineSeparatorStyle} />
              {/* Text Separator */}
              <Text style={textSeparatorStyle}> Or Sign in with </Text>
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

            {/* Button Sign up  */}
            <View style={labelSignUpStyle}>
              <LabelWithLink
                textDesc={'don\'t have an account yet?'}
                textLink='Sign up now'
                onPress={registerScreen}
              />
            </View>
          </View>

        </ScrollView>


        {/* Loading */}
        {/* {this.renderLoading()} */}
        {this.renderErrorDialog()}
      </SafeAreaView>

    );
  }
}

LoginScreen.propTypes = {
  //Action Creator
  loginValueChange: PropTypes.func,
  normalLogin: PropTypes.func,
  facebookLogin: PropTypes.func,
  registerScreen: PropTypes.func,
  forgetPasswordScreen: PropTypes.func,

  //Data
  email: PropTypes.string,
  password: PropTypes.string,

  //Error
  errorMessage: PropTypes.string,
  errorEmail: PropTypes.string,
  errorPassword: PropTypes.string,

  //Loading
  loading: PropTypes.bool,
};

LoginScreen.navigationOptions = {
  title: 'Sign in',
  headerStyle: {
    backgroundColor: theme.NAV_BAR_COLOR,
  },
  headerTitleStyle: { color: theme.TITLE_NAV_BAR_COLOR },
  headerBackTitle: ' '
}


export default LoginScreen;
