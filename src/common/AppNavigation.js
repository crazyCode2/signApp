/**
 * App 导航
 */
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../pages/Login/index';
import MainScreen from '../pages/index';

/* import HomeScreen from '../screen/home/index';
import MassageScreen from '../screen/message/index';
import MineScreen from '../screen/mine/index';
import MyElectricityScreen from '../screen/home/myElectricity/index';
import DetailsScreen from '../screen/message/details/index';
import CompanyInforScreen from '../screen/mine/companyInfor/index'; */

export const Navigator = createStackNavigator(
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
    /* Home: {
      screen: HomeScreen,
      key: 'Home',
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    Massage: {
      screen: MassageScreen,
      key: 'Massage',
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    Mine: {
      screen: MineScreen,
      key: 'Mine',
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    }*/
  },{
    initialRouteName: 'Login',
  }
)

/* export default class AppNavigator extends React.Component{
  
  render(){
    return (
      <Navigator navigation={this.props.navigation} />
    )
  }
} */

export default Navigator;