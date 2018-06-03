import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StatusBar, View } from 'react-native'
import { connect } from 'react-redux'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { initializeListeners } from 'react-navigation-redux-helpers'
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as Pages from '../pages'
import { navigationPropConstructor } from '../utils/redux'
import theme from '../styles/theme.style';

const MainTab = createStackNavigator({
  Home: {
    screen: Pages.Main,
    path: '/',
    navigationOptions: {
      title: 'Welcome', 
    },
  }
})

const SettingsTab = createStackNavigator({
  Settings: {
    screen: Pages.Settings,
    path: '/',
    navigationOptions: {
      title: 'Settings', 
    },
  }
})

const Tabs = createBottomTabNavigator({
  MainTab: {
    screen: Pages.Main,
    path: '/',
    navigationOptions: { 
      tabBarLabel: 'Home', 
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  SettingsTab: {
    screen: Pages.Settings,
    path: '/settings',
    navigationOptions: {
      tabBarLabel: 'Settings', 
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-settings' : 'ios-settings-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  }
},
{
  tabBarOptions: {
    showLabel: false,
    headerMode: 'screen', 
  },
}
)

Tabs.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
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
    screen: Tabs ,
    navigationOptions: { 
      headerStyle: {
        backgroundColor: theme.NAV_BAR_COLOR,
      },
      headerTitleStyle: { color: theme.TITLE_NAV_BAR_COLOR },
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
