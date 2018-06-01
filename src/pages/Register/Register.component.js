import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import TextInput from '../../common/TextInput'

import { LabelWithLink } from '../../common';
import PasswordInputText from '../../common/PasswordInputText';
import styles from './Register.style';
import theme from '../../styles/theme.style';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;


class RegisterScreen extends Component {
  static propTypes = {
    registerValueChange: PropTypes.func,
    normalRegister: PropTypes.func,
    facebookLogin: PropTypes.func,
    loginScreen: PropTypes.func,
    email: PropTypes.string,
    password: PropTypes.string,
    rePassword: PropTypes.string,
    errorEmail: PropTypes.string,
    errorPassword: PropTypes.string,
    errorRePassword: PropTypes.string
  };

  static navigationOptions = {
    title: 'Sign up',
    headerStyle: {
      backgroundColor: theme.NAV_BAR_COLOR,
    },
    headerTitleStyle: { color: 'white' },
    headerBackTitle: ' '
  }

  componentDidMount() {
    console.log(SCREEN_HEIGHT, SCREEN_WIDTH)
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
      socialButtonStyle,
      textInputStyle
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
      errorRePassword
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
                  inputContainerStyle={{ paddingLeft: 0 }}
                  onChangeText={text => registerValueChange({ prop: 'email', value: text })}
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
                  lineWidth={1}
                  containerStyle={textInputStyle}
                  fontSize={19}
                  ref={input => (this.passwordInput = input)}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    this.rePasswordInput.focus();
                  }}
                  onChangeText={text => registerValueChange({ prop: 'password', value: text })}
                  value={password}
                  onFocus={() => { }}
                  onBlur={() => { }}
                  textError={errorPassword}
                />
              </View>
              <View style={inputGroupStyle}>
                <Image
                  source={require('../../assets/images/ic_password.png')}
                  style={iconImageStyle}
                />
                <PasswordInputText
                  label="Confirm Password"
                  keyboardType="default"
                  autoCapitalize="none"
                  keyboardAppearance="light"
                  autoCorrect={false}
                  secureTextEntry
                  lineWidth={1}
                  containerStyle={textInputStyle}
                  fontSize={19}
                  returnKeyType="done"
                  ref={input => (this.rePasswordInput = input)}
                  onChangeText={text => registerValueChange({ prop: 'rePassword', value: text })}
                  value={rePassword}
                  onFocus={() => { }}
                  onBlur={() => { }}
                  textError={errorRePassword}
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
      </SafeAreaView>
    );
  }
}

export default RegisterScreen;
