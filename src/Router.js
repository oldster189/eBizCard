import React from 'react';
import { Router, Stack, Scene, } from 'react-native-router-flux';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import CreateProfileScreen from './screens/CreateProfileScreen';
import CreatePhotoCardScreen from './screens/CreatePhotoCardScreen';

const RouterNavigator = () => {
  return (
    <Router>
      <Stack key='root'>
        <Scene key='welcomeScreen' component={WelcomeScreen} /> 

        <Scene key='loginScreen' component={LoginScreen} title='Sign in' initial /> 
        <Scene key='registerScreen' component={RegisterScreen} title='Sign up' /> 
        <Scene 
          key='createProfileScreen' 
          component={CreateProfileScreen} 
          title='Create your profile' 
        /> 
        <Scene 
          key='CreatePhotoCardScreen' 
          component={CreatePhotoCardScreen} 
          title='Capture your card' 
        /> 
      </Stack>
    </Router>
  );
};

export default RouterNavigator;
