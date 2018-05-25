import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { LabelWithLink, TextLink } from '../../components/common';
import styles from './Login.style';
import theme from '../../styles/theme.style';

class LoginScreen extends Component {

  static navigationOptions = {
    title: 'Sign in',
    headerStyle: {
      backgroundColor: theme.NAV_BAR_COLOR,
    },
    headerTitleStyle: { color: 'white' },
    headerBackTitle: ' '
  }

  onClickSignup() {
    this.props.navigation.push('Register');
  }

  onClickForgetPassword() {
    this.props.navigation.push('ForgetPassword');
  }

  onClickSigninFacebook() {
    this.props.facebookLogin();
  }

  onClickSigninGoogle() {
    console.log('Click Sign in Google!');
  }

  onClickSubmit() {
    const { normalLogin, email, password } = this.props;
    normalLogin(email, password);
  }

  render() {
    const {
      containerStyle,
      rootLayoutStyle,
      labelSignupStyle,
      loginGroupBtnStyle,
      lineIndicatorStyle,
      indicatorGroupStyle,
      textIndicatorStyle,
      forgetPasswordTextStyle,
      forgetPasswordGroupStyle,
      inputFormGroupStyle,
      inputGroupStyle,
      iconImageStyle,
      nextButtonStyle,
      layoutButtonGroupStyle,
      socialButtonStyle
    } = styles;

    // action creator
    const { loginValueChange } = this.props;

    // props
    const { email, password } = this.props;

    return (
      <ScrollView style={containerStyle}>
        <View style={rootLayoutStyle}>
          <View style={inputFormGroupStyle}>
            <View style={inputGroupStyle}>
              <Image
                source={require('../../assets/images/ic_mail.png')}
                style={iconImageStyle}
              />
              <Input
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor={theme.PLACEHOLDER_TEXT_COLOR}
                inputStyle={{ marginLeft: 0, color: theme.INPUT_TEXT_COLOR }}
                returnKeyType="next"
                onSubmitEditing={() => {
                  this.passwordInput.focus();
                }}
                blurOnSubmit={false}
                onChangeText={text => loginValueChange('email', text)}
                value={email}
              />
            </View>
            <View style={inputGroupStyle}>
              <Image
                source={require('../../assets/images/ic_password.png')}
                style={iconImageStyle}
              />

              <Input
                placeholder="Password"
                autoCapitalize="none" keyboardAppearance="light"
                secureTextEntry
                autoCorrect={false}
                keyboardType="default"
                placeholderTextColor={theme.PLACEHOLDER_TEXT_COLOR}
                inputStyle={{ marginLeft: 0, color: theme.INPUT_TEXT_COLOR }}
                returnKeyType="done"
                ref={input => (this.passwordInput = input)}
                onChangeText={text => loginValueChange('password', text)}
                value={password}
              />
            </View>
          </View>

          <View style={forgetPasswordGroupStyle}>
            <TouchableOpacity onPress={() => this.onClickSubmit()}>
              <Image
                source={require('../../assets/images/button_next.png')}
                style={nextButtonStyle}
              />
            </TouchableOpacity>
            <TextLink
              title='Forget password'
              onPress={() => this.onClickForgetPassword()}
              textLinkStyle={forgetPasswordTextStyle}
            />
          </View>
        </View>

        <View style={layoutButtonGroupStyle}>
          <View>
            <View style={indicatorGroupStyle} >
              <View style={lineIndicatorStyle} />
              <Text style={textIndicatorStyle}>
                Or Sign in with
                </Text>
              <View style={lineIndicatorStyle} />

            </View>
            <View style={loginGroupBtnStyle}>
              <TouchableOpacity onPress={() => this.onClickSigninFacebook()}>
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
                onPress={() => this.onClickSignup()}
              />
            </View>
          </View>
        </View>

      </ScrollView>
    );
  }
}

export default LoginScreen;
