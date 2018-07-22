/**
 * App 导航
 */
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../pages/Login/index';
import MainScreen from './index';

const Navigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      key: 'Login',
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    Main: {
      screen: MainScreen,
      key: 'Main',
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
  },{
    initialRouteName: 'Main',
  }
)

export default Navigator;