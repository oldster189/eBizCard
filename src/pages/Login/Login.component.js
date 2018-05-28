import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'; 
import FloatLabelTextInput from 'react-native-floating-label-text-input';

import { LabelWithLink, TextLink } from '../../common';
import PasswordInputText from '../../common/PasswordInputText';
import styles from './Login.style';
import theme from '../../styles/theme.style';

class LoginScreen extends Component {

  static propTypes = {
    loginValueChange: PropTypes.func.isRequired,
    normalLogin: PropTypes.func.isRequired,
    facebookLogin: PropTypes.func.isRequired,
    registerScreen: PropTypes.func.isRequired,
    forgetPasswordScreen: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
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
      socialButtonStyle
    } = styles;

    const {
      loginValueChange,
      normalLogin,
      facebookLogin,
      registerScreen,
      forgetPasswordScreen,
      email,
      password
    } = this.props;


    return (
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
              <FloatLabelTextInput
                placeholder={'Email'}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false} 
                placeholderTextColor={theme.PLACEHOLDER_TEXT_COLOR}
                returnKeyType="next"
                onSubmitEditing={() => {
                  this.passwordInput.focus();
                }}
                onChangeTextValue={text => loginValueChange({ prop: 'email', value: text })}
                value={email} 
                blurOnSubmit={false}
              />
              
            </View>
            <View style={inputGroupStyle}>
              <Image
                source={require('../../assets/images/ic_password.png')}
                style={iconImageStyle}
              />
              <PasswordInputText
                placeholder="Password"
                keyboardType="default"
                autoCapitalize="none"
                keyboardAppearance="light"
                autoCorrect={false}
                secureTextEntry
                placeholderTextColor={theme.PLACEHOLDER_TEXT_COLOR}
                returnKeyType="done"
                ref={input => (this.passwordInput = input)} 
                // ref={input => (this.passwordInput = input)} 
                onChangeTextValue={text => loginValueChange({ prop: 'password', value: text })}
                value={password} 
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
    );
  }
}

export default LoginScreen;
