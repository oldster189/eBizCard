import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { NavigationActions } from 'react-navigation';

import styles from './ForgetPassword.style';
import theme from '../../styles/theme.style';

class ForgetPasswordScreen extends Component {

  static navigationOptions = {
    title: 'Forgot password ',
    headerStyle: {
      backgroundColor: theme.NAV_BAR_COLOR,
    },
    headerTitleStyle: { color: 'white' },
  }


  componentDidMount() {
    // const { dispatch } = this.props.navigation;
    // dispatch({
    //   type: 'Navigation/RESET',
    //   actions: [{ type: 'Navigate', routeName: 'CreateProfile' }], 
    //   index: 0
    // })

    const resetAction = NavigationActions.reset({
      index: 0,
      stateName: 'MainAppNav',
      actions: [
        NavigationActions.navigate({ routeName: 'Authenticated' })
      ]
   });
   this.props.navigation.dispatch(resetAction);
  }


  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text> ForgetPasswordScreen </Text>
      </View>
    );
  }
}

export default ForgetPasswordScreen;
