import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import { initializeListeners } from 'react-navigation-redux-helpers';

import * as Pages from '../pages'; 
import { navigationPropConstructor } from '../utils/redux';

export const AppNavigator = createStackNavigator({
  Welcome: { screen: Pages.Welcome },
  Login: { screen: Pages.Login },
  Register: { screen: Pages.Register },
  ForgetPassword: { screen: Pages.ForgetPassword },
  CreateProfile: { screen: Pages.CreateProfile },
  CreatePhotoCard: { screen: Pages.CreatePhtoCard },
  Main: { screen: Pages.Main, },
});

class AppWithNavigationState extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  componentDidMount() {
    initializeListeners('root', this.props.nav);
  }

  render() {
    const { dispatch, nav } = this.props;
    const navigation = navigationPropConstructor(dispatch, nav);
    return <AppNavigator navigation={navigation} />;
  }
}

const mapStateToProps = ({ nav }) => {
  return { nav };
};

export default connect(mapStateToProps)(AppWithNavigationState);
