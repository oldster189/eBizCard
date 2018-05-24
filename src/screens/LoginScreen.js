import React, { Component } from 'react';
import { View, ScrollView, AsyncStorage, StyleSheet, Dimensions, Button } from 'react-native';
import { connect } from 'react-redux';
  
import { facebookLogin } from '../actions'; 
  
class LoginScreen extends Component {
 
  onLoginFacebook() { 
    AsyncStorage.removeItem('fb_token');
    this.props.facebookLogin();
  }

  render() { 
    const { 
      containerStyle, 
      containerSocialBtnLoginStyle
    } = styles;

    return ( 
      
      <View style={containerStyle}>
        {/* <ScrollView>
          <View style={containerStyle}>
            <View style={formInputStyle}>
              
            </View> 
          </View>  
        </ScrollView> */}
        <View style={containerSocialBtnLoginStyle}>
              <Button
                onPress={() => this.onLoginFacebook()} 
                title='Sign In With Facebook' 
              /> 
            </View> 
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1, 
    justifyContent: 'flex-start',
  },
  formInputStyle: {
    flex: 1,
    flexDirection: 'column',
    margin: 0,
  }, 
  containerSocialBtnLoginStyle: {  
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
    flexDirection: 'column',  
  }
});

export default connect(null, { facebookLogin })(LoginScreen);
