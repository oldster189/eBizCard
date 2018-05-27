import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Input } from 'react-native-elements';
import { LabelWithLink } from '../../common';
import styles from './Register.style';
import theme from '../../styles/theme.style';

class RegisterScreen extends Component {

  static navigationOptions = {
    title: 'Sign up',
    headerStyle: {
      backgroundColor: theme.NAV_BAR_COLOR,
    },
    headerTitleStyle: { color: 'white' },
    headerBackTitle: ' '
  }

  componentWillReceiveProps(nextProps) {
    const { error } = nextProps;
    if (error !== '') {
      alert(error);
    } 
  } 
  
  onClickSigninFacebook() {
    this.props.facebookLogin();
  }

  onClickSigninGoogle() {
    console.log('Click Sign in Google!');
  }

  onClickSubmit() {
    const { normalRegister, email, password, rePassword } = this.props; 
    normalRegister(email, password, rePassword);
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
      forgetPasswordGroupStyle,
      inputFormGroupStyle,
      inputGroupStyle,
      iconImageStyle,
      nextButtonStyle,
      layoutButtonGroupStyle,
      socialButtonStyle
    } = styles;

    // action creator
    const { registerValueChange, LoginScreen } = this.props;

    // props
    const { email, password, rePassword, error } = this.props; 
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
                onChangeText={text => registerValueChange('email', text)}
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
                returnKeyType="next"
                onSubmitEditing={() => {
                  this.rePasswordInput.focus();
                }}
                ref={input => (this.passwordInput = input)}
                onChangeText={text => registerValueChange('password', text)}
                value={password}
              />
            </View>
            <View style={inputGroupStyle}>
              <Image
                source={require('../../assets/images/ic_password.png')}
                style={iconImageStyle}
              />

              <Input
                placeholder="Confirm Password"
                autoCapitalize="none" keyboardAppearance="light"
                secureTextEntry
                autoCorrect={false}
                keyboardType="default"
                placeholderTextColor={theme.PLACEHOLDER_TEXT_COLOR}
                inputStyle={{ marginLeft: 0, color: theme.INPUT_TEXT_COLOR }}
                returnKeyType="done"
                ref={input => (this.rePasswordInput = input)}
                onChangeText={text => registerValueChange('rePassword', text)}
                value={rePassword}
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
          </View>
        </View>

        <View style={layoutButtonGroupStyle}>
          <View>
            <View style={indicatorGroupStyle} >
              <View style={lineIndicatorStyle} />
              <Text style={textIndicatorStyle}>
                Or Sign up with
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
                textDesc={'you have account already'}
                textLink='Sign in now'
                onPress={LoginScreen}
              />
            </View>
          </View>
        </View>

      </ScrollView>
    );
  }
}

export default RegisterScreen;
