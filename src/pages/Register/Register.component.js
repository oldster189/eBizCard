import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import FloatLabelTextInput from 'react-native-floating-label-text-input';

import { LabelWithLink } from '../../common';
import PasswordInputText from '../../common/PasswordInputText';
import styles from './Register.style';
import theme from '../../styles/theme.style';


class RegisterScreen extends Component {
  static propTypes = {
    registerValueChange: PropTypes.func.isRequired,
    normalRegister: PropTypes.func.isRequired,
    facebookLogin: PropTypes.func.isRequired,
    loginScreen: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    rePassword: PropTypes.string.isRequired,
  };

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
      // alert(error)
      console.log(`error: ${error}`)
    }
  }
  
  onClickSigninGoogle() {
    console.log('Click Sign in Google!');
  }
  
  showErrorEmail() { 
    return (
      <Text style={{ color: 'red', marginLeft: 40, marginTop: 6, backgroundColor: 'green' }}>
        Email is isRequired
      </Text>
    )
  }

  showErrorPassword() { 
    return (
      <Text style={{ color: 'red', marginLeft: 40, marginTop: 6, backgroundColor: 'green' }}>
        Password is isRequired
      </Text>
    )
  }

  showErrorConfirmPassword() { 
    return (
      <Text style={{ color: 'red', marginLeft: 40, marginTop: 6, backgroundColor: 'green' }}>
        Confirm is isRequired
      </Text>
    )
  }

  render() {
    const {
      containerStyle,
      rootLayoutStyle,
      labelSigninStyle,
      registerGroupBtnStyle,
      lineSeparatorStyle,
      separatorGroupStyle,
      textSeparatorStyle,
      nextBtnGroupStyle,
      inputFormGroupStyle,
      inputGroupStyle,
      iconImageStyle,
      nextButtonStyle,
      layoutButtonGroupStyle,
      socialButtonStyle
    } = styles;

    const {
      registerValueChange,
      normalRegister,
      facebookLogin,
      loginScreen,
      email,
      password,
      rePassword,
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
                inputStyle={{ color: 'red' }}
                placeholderTextColor={theme.PLACEHOLDER_TEXT_COLOR}
                returnKeyType="next"
                onSubmitEditing={() => {
                  this.passwordInput.focus();
                }}
                onChangeTextValue={text => registerValueChange({ prop: 'email', value: text })}
                value={email}
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
                ref={input => (this.passwordInput = input)}
                returnKeyType="next"
                onSubmitEditing={() => {
                  this.rePasswordInput.focus();
                }}
                onChangeTextValue={text => registerValueChange({ prop: 'password', value: text })}
                value={password}
              />
            </View>
            <View style={inputGroupStyle}>
              <Image
                source={require('../../assets/images/ic_password.png')}
                style={iconImageStyle}
              />
              <PasswordInputText
                placeholder="Confirm Password"
                keyboardType="default"
                autoCapitalize="none"
                keyboardAppearance="light"
                autoCorrect={false}
                secureTextEntry
                placeholderTextColor={theme.PLACEHOLDER_TEXT_COLOR}
                returnKeyType="done"
                ref={input => (this.rePasswordInput = input)}
                onChangeTextValue={text => registerValueChange({ prop: 'rePassword', value: text })}
                value={rePassword}
              />
            </View>
          </View>

          <View style={nextBtnGroupStyle}>
            <TouchableOpacity onPress={() => normalRegister({ email, password, rePassword })}>
              <Image
                source={require('../../assets/images/button_next.png')}
                style={nextButtonStyle}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={layoutButtonGroupStyle}>
          <View>
            <View style={separatorGroupStyle} >
              <View style={lineSeparatorStyle} />
              <Text style={textSeparatorStyle}>
                Or sign up with
              </Text>
              <View style={lineSeparatorStyle} />

            </View>
            <View style={registerGroupBtnStyle}>
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
            <View style={labelSigninStyle}>
              <LabelWithLink
                textDesc={'you have account already'}
                textLink='Sign in now'
                onPress={loginScreen}
              />
            </View>
          </View>
        </View>

      </ScrollView>
    );
  }
}

export default RegisterScreen;
