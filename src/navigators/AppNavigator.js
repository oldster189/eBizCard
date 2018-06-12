import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StatusBar, View, Image, Text, Platform, TouchableOpacity, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { initializeListeners } from 'react-navigation-redux-helpers'

import * as Pages from '../pages'
import { navigationPropConstructor } from '../utils/redux'
import theme from '../styles/theme.style';

const Tabs = createBottomTabNavigator({
  MainTab: {
    screen: Pages.Main,
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
    screen: Pages.Storage,
    path: '/storage',
    navigationOptions: {
      tabBarLabel: (
        <View
          style={{
            height: 80,
            flexDirection: 'row',
            backgroundColor: theme.NAV_BAR_COLOR,
            marginTop: Platform.OS === 'ios' ? 20 : 0
          }}
        >
          <Text>This is CustomHeader</Text>
        </View>
      ),
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
    screen: Pages.Settings,
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
    },
  }
)

Tabs.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index]; 
  if (routeName === 'MainTab') {
    return {
      title: 'Home',
      headerStyle: {
        backgroundColor: theme.NAV_BAR_COLOR,
      },
      headerTitleStyle: { color: 'white' },
      headerBackTitle: ' ',
      headerRight: (
        <TouchableOpacity 
        onPress={() => navigation.navigate({ routeName: 'QRCode' })}
          style={{ padding: 10 }}
        >
          <Image
            style={{
              height: 24,
              width: 24,
            }}
            resizeMode='cover'
            source={require('../assets/images/ic_share.png')}
          />
        </TouchableOpacity>
      )
    }
  } else if (routeName === 'SettingsTab') {
    return {
      title: 'Settings',
      headerStyle: {
        backgroundColor: theme.NAV_BAR_COLOR,
      },
      headerTitleStyle: { color: 'white' },
      headerBackTitle: ' ',
    }
  }
  return {
    title: 'Storage',
    headerStyle: {
      backgroundColor: theme.NAV_BAR_COLOR,
    },
    headerTitleStyle: { color: 'white' },
    headerBackTitle: ' ',
  }
}

export const AppNavigator = createStackNavigator({
  Welcome: { screen: Pages.Welcome },
  Login: { screen: Pages.Login },
  Register: { screen: Pages.Register },
  ForgetPassword: { screen: Pages.ForgetPassword },
  ResetPassword: { screen: Pages.ResetPassword },
  CreateProfile: { screen: Pages.CreateProfile },
  CreatePhotoCard: { screen: Pages.CreatePhotoCard },
  Home: { screen: Tabs },
  QRCode: { screen: Pages.QRCode },
  ChangePassword: { screen: Pages.ChangePassword },
  Upgrade: { screen: Pages.Upgrade },
  TermOfUser: { screen: Pages.TermOfUse }
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
