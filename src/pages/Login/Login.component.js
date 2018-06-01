import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import TextInput from '../../common/TextInput'

import { LabelWithLink, TextLink } from '../../common';
import PasswordInputText from '../../common/PasswordInputText';
import styles from './Login.style';
import theme from '../../styles/theme.style';

class LoginScreen extends Component {

  static propTypes = {
    loginValueChange: PropTypes.func,
    normalLogin: PropTypes.func,
    facebookLogin: PropTypes.func,
    registerScreen: PropTypes.func,
    forgetPasswordScreen: PropTypes.func,
    email: PropTypes.string,
    password: PropTypes.string,
    errorEmail: PropTypes.string,
    errorPassword: PropTypes.string
  };

  static navigationOptions = {
    title: 'Sign in',
    headerStyle: {
      backgroundColor: theme.NAV_BAR_COLOR,
    },
    headerTitleStyle: { color: theme.TITLE_NAV_BAR_COLOR },
    headerBackTitle: ' '
  }

  onClickSigninGoogle() {
    console.log('Click Sign in Google!');
  }

  render() {
    const {
      containerStyle,
      rootLayoutStyle,
      labelSignupStyle,
      loginGroupBtnStyle,
      lineSeparatorStyle,
      separatorGroupStyle,
      textSeparatorStyle,
      forgetPasswordTextStyle,
      forgetPasswordGroupStyle,
      inputFormGroupStyle,
      inputGroupStyle,
      iconImageStyle,
      nextButtonStyle,
      layoutButtonGroupStyle,
      socialButtonStyle,
      textInputStyle
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
      errorPassword
    } = this.props;


    return (
      <SafeAreaView
        forceInset={{ bottom: 'always' }}
        style={containerStyle}
      >
        <ScrollView
          style={containerStyle}
          keyboardShouldPersistTaps='handled'
        >
          <View style={rootLayoutStyle}>
            <View style={inputFormGroupStyle}>

              <View style={inputGroupStyle}>
                <Image
                  source={require('../../assets/images/ic_mail.png')}
                  style={iconImageStyle}
                />
                <TextInput 
                  label={'Email'}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    this.passwordInput.focus();
                  }}
                  containerStyle={textInputStyle}
                  fontSize={19}
                  lineWidth={1}
                  inputContainerPadding={8}
                  labelTextStyle={{ paddingLeft: 0 }}
                  inputContainerStyle={{ padding: 0 }}
                  onChangeText={text => loginValueChange({ prop: 'email', value: text })}
                  value={email}
                  onFocus={() => { }}
                  onBlur={() => { }}
                  blurOnSubmit={false}
                  textError={errorEmail}
                />

              </View>

              <View style={inputGroupStyle}>
                <Image
                  source={require('../../assets/images/ic_password.png')}
                  style={iconImageStyle}
                />
                <PasswordInputText
                  label="Password"
                  keyboardType="default"
                  autoCapitalize="none"
                  keyboardAppearance="light"
                  autoCorrect={false}
                  secureTextEntry
                  containerStyle={textInputStyle}
                  fontSize={19}
                  lineWidth={1}
                  returnKeyType="done"
                  ref={input => (this.passwordInput = input)}
                  onChangeText={text => loginValueChange({ prop: 'password', value: text })}
                  value={password}
                  onFocus={() => { }}
                  onBlur={() => { }}
                  textError={errorPassword}
                />
              </View>

            </View>

            <View style={forgetPasswordGroupStyle}>
              <TouchableOpacity onPress={() => normalLogin({ email, password })}>
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

          <View style={layoutButtonGroupStyle}>
            <View>
              <View style={separatorGroupStyle} >
                <View style={lineSeparatorStyle} />
                <Text style={textSeparatorStyle}>
                  Or Sign in with
                </Text>
                <View style={lineSeparatorStyle} />

              </View>
              <View style={loginGroupBtnStyle}>
                <TouchableOpacity onPress={facebookLogin}>
                  <Image
                    source={require('../../assets/images/ic_facebook.png')}
                    style={socialButtonStyle}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.onClickSigninGoogle()}>
                  <Image
                    source={require('../../assets/images/ic_google.png')}
                    style={socialButtonStyle}
                  />
                </TouchableOpacity>
              </View>
              <View style={labelSignupStyle}>
                <LabelWithLink
                  textDesc={'don\'t have an account yet?'}
                  textLink='Sign up now'
                  onPress={registerScreen}
                />
              </View>
            </View>
          </View>

        </ScrollView>
      </SafeAreaView>

    );
  }
}

export default LoginScreen;
