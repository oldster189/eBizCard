import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import WelcomeScreen from '../components/WelcomeScreen';
import RegisterScreen from '../components/RegisterScreen';
import CreateProfileScreen from '../components/CreateProfileScreen';
import CreatePhotoCardScreen from '../components/CreatePhotoCardScreen';
import MainScreen from '../components/MainScreen';

import * as Pages from '../pages';

import { addListener } from '../utils/redux';

export const AppNavigator = StackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: { title: 'Welcome E-Biz Card' }
  },
  Login: {
    screen: Pages.Login,
    navigationOptions: { title: 'Sign in' }
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: { title: 'Sign up' }
  },
  CreateProfile: {
    screen: CreateProfileScreen,
    navigationOptions: { title: 'Create your profile' }
  },
  CreatePhotoCard: {
    screen: CreatePhotoCardScreen,
    navigationOptions: { title: 'Capture your card' }
  },
  Main: {
    screen: MainScreen,
    navigationOptions: { title: 'Main' }
  },
});
class AppWithNavigationState extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={{
          dispatch,
          state: nav,
          addListener,
        }}
      />
    );
  }
}

const mapStateToProps = ({ nav }) => {
  console.log(`State: ${JSON.stringify(nav)}`)
  return {
    nav: nav,
  };
};

export default connect(mapStateToProps)(AppWithNavigationState);
