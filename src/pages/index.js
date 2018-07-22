/**
 * 主页面
 */
/* ---depencies--- */
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

/* ---pages--- */
import HomeScreen from './Home/index';
import MassageScreen from './Message/index';
import MineScreen from './Mine/index';
import MyElectricityScreen from './Home/MyElectricity/index';
import DetailsScreen from './Message/Details/index';
import CompanyInforScreen from './Mine/CompanyInfor/index';

/* --- */
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

// 底部导航栏
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