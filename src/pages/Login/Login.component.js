import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { SocialIcon, Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';

import { LabelWithLink, TextLink } from '../../components/common';
import styles from './Login.style';

const SCREEN_WIDTH = Dimensions.get('window').width;

class LoginScreen extends Component {
  onClickSignup() {
    console.log('Click Sign up!');
  }

  onForgetPassword() {
    console.log('Click Forget Password!');
  }

  render() {
    const {
      containerStyle,
      labelSignupStyle,
      loginGroupBtnStyle,
      lineIndicatorStyle,
      indicatorGroupStyle,
      textIndicatorStyle,
      forgetPasswordTextStyle,
      forgetPasswordGroupStyle
    } = styles;

    return (
      <View style={containerStyle}>

        <View style={{ flex: 1 }}>
          <View>
            <Input
              leftIcon={
                <SimpleIcon
                  name="user"
                  color="#339CED"
                  size={25}
                />
              }
              iconContainerStyle={{
                marginLeft: 20
              }}
              placeholder="Email"
              placeholderTextColor="#B4B4B4"
              inputStyle={{ marginLeft: 10, color: '#454545' }}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="light"
              keyboardType="email-address"
              returnKeyType="next"
              ref={input => (this.usernameInput = input)}
              onSubmitEditing={() => {
                this.email2Input.focus();
              }}
              blurOnSubmit={false}
            />
            <Input
              leftIcon={
                <SimpleIcon
                  name="lock"
                  color="#339CED"
                  size={25}
                />
              }
              iconContainerStyle={{
                marginLeft: 20
              }}
              placeholder="Password"
              placeholderTextColor="#B4B4B4"
              inputStyle={{ marginLeft: 10, color: '#454545' }}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="light"
              keyboardType="email-address"
              returnKeyType="next"
              ref={input => (this.usernameInput = input)}
              onSubmitEditing={() => {
                this.email2Input.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={forgetPasswordGroupStyle}>
            <Button
              icon={
                <Icon
                  name='arrow-right'
                  size={15}
                  color='white'
                />
              }
              title=''
              buttonStyle={{ width: 48, height: 48, borderRadius: 24, marginBottom: 8 }}
            />
            <TextLink
              title='Forget password'
              onPress={() => this.onForgetPassword()}
              textLinkStyle={forgetPasswordTextStyle}
            />
          </View>
        </View>


        <View style={indicatorGroupStyle}>
          <View style={lineIndicatorStyle} />
          <Text style={textIndicatorStyle}>
            Or Sign in with
          </Text>
          <View style={lineIndicatorStyle} />
        </View>
        <View style={loginGroupBtnStyle}>
          <SocialIcon
            type='facebook'
          />
          <SocialIcon
            light
            type='google'
          />
        </View>
        <View style={labelSignupStyle}>
          <LabelWithLink
            textDesc={'don\'t have an account yet?'}
            textLink='Sign up now'
            onPress={() => this.onClickSignup()}
          />
        </View>

      </View>
    );
  }
}

export default LoginScreen;
