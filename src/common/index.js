/**
 * 导航配置
 */
/* ---depencies--- */
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

/* ---pages--- */
import HomeScreen from '../pages/Home/index';
import MassageScreen from '../pages/Message/index';
import MineScreen from '../pages/Mine/index';
import MyElectricityScreen from '../pages/Home/MyElectricity/index';
import DetailsScreen from '../pages/Message/Details/index';
import CompanyInforScreen from '../pages/Mine/CompanyInfor/index';

/* ---主页 StackNav注册--- */
const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    key: 'Home',
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  Electricity: MyElectricityScreen,
});

/* ---消息 StackNav注册--- */
const MassageStack = createStackNavigator({
  Massage: {
    screen: MassageScreen,
    key: 'Massage',
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  Details: DetailsScreen,
});

/* ---我的 StackNav注册--- */
const MineStack = createStackNavigator({
  Mine: {
    screen: MineScreen,
    key: 'Mine',
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  ComInf: CompanyInforScreen,
});

// TODO: 封装方法 隐藏nextPage tabbar
HomeStack.navigationOptions = ({ navigation }) => {
  if(navigation.state.index==1){
    return {
      tabBarVisible: false,
    };
  }
  return {
    tabBarVisible: true,
  };
};

MassageStack.navigationOptions = ({ navigation }) => {
  if(navigation.state.index==1){
    return {
      tabBarVisible: false,
    };
  }
  return {
    tabBarVisible: true,
  };
};

MineStack.navigationOptions = ({ navigation }) => {
  if(navigation.state.index==1){
    return {
      tabBarVisible: false,
    };
  }
  return {
    tabBarVisible: true,
  };
};

export default createBottomTabNavigator(
  {
    Home: HomeStack,
    Massage: MassageStack,
    Mine: MineStack
  },
  {
    /* Other configuration remains unchanged */
  }
);