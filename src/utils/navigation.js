/**
 * 导航
 */
import {
  createStackNavigator,
  StackNavigator,
  NavigationActions
} from "react-navigation";

import Login from "../pages/Login/index";
import Center from "../pages/Center/index";

const Navigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      key: "Login",
      navigationOptions: ({ navigation }) => ({
        title: `登陆`,
      })
    },
    Center: {
      screen: Center,
      key: "Center",
      navigationOptions: ({ navigation }) => ({
        title: `中心`,
      })
    },
  },
  {
    headerMode: "float",
    initialRouteName:'Login'
  }
);
export default Navigator;