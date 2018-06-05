import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StatusBar, View, Image } from 'react-native'
import { connect } from 'react-redux'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { initializeListeners } from 'react-navigation-redux-helpers' 

import * as Pages from '../pages'
import { navigationPropConstructor } from '../utils/redux'
import theme from '../styles/theme.style';

const MainTab = createStackNavigator({
  Main: {
    screen: Pages.Main,
  }
})

const StorageTab = createStackNavigator({
  Storage: {
    screen: Pages.Storage,
  }
})

const SettingsTab = createStackNavigator({
  Settings: {
    screen: Pages.Settings,
    navigationOptions: {
      title: 'Settings',
      headerStyle: {
        backgroundColor: theme.NAV_BAR_COLOR,
      },
      headerTitleStyle: { color: theme.TITLE_NAV_BAR_COLOR },
      headerBackTitle: ' '
    }
  }
})

const Tabs = createBottomTabNavigator({
  MainTab: {
    screen: MainTab,
    path: '/',
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused }) => (
        <Image
          style={{
            height: 28,
            width: 28, 
          }}
          resizeMode='contain'
          source={
            focused
              ? require('../assets/images/ic_profile_select.png')
              : require('../assets/images/ic_profile.png')
          }
        />
      ),
    },
  },
  StorageTab: {
    screen: StorageTab,
    path: '/storage',
    navigationOptions: {
      tabBarLabel: 'Storage',
      tabBarIcon: ({ focused }) => (
        <Image
          style={{
            height: 28,
            width: 28, 
          }}
          resizeMode='contain'
          source={
            focused
              ? require('../assets/images/ic_card_select.png')
              : require('../assets/images/ic_card.png')
          }
        />
      ),
    },
  },
  SettingsTab: {
    screen: SettingsTab,
    path: '/settings',
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ focused }) => (
        <Image
          style={{
            height: 28,
            width: 28, 
          }}
          resizeMode='contain'
          source={
            focused
              ? require('../assets/images/ic_setting_select.png')
              : require('../assets/images/ic_setting.png')
          }
        />
      ),
    },
  },
},
  {
    tabBarOptions: {
      showLabel: false,
      headerMode: 'screen',
    },
  }
)

Tabs.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  let title;
  if (routeName === 'SettingsTab') {
    title = 'Settings';
  } else if (routeName === 'MainTab') {
    title = 'Home';
  }
  return {
    title,
  };
};

export const AppNavigator = createStackNavigator({
  Welcome: { screen: Pages.Welcome },
  Login: { screen: Pages.Login },
  Register: { screen: Pages.Register },
  ForgetPassword: { screen: Pages.ForgetPassword },
  CreateProfile: { screen: Pages.CreateProfile },
  CreatePhotoCard: { screen: Pages.CreatePhotoCard },
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    }
  },
})

class AppWithNavigationState extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  }

  componentDidMount() {
    initializeListeners('root', this.props.nav)
  }

  render() {
    const { dispatch, nav } = this.props
    const navigation = navigationPropConstructor(dispatch, nav)
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
        />
        <AppNavigator navigation={navigation} />
      </View>
    )
  }
}

const mapStateToProps = ({ nav }) => {
  return { nav }
}

export default connect(mapStateToProps)(AppWithNavigationState)
