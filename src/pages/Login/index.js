/**
 * 登录页面
 */
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'antd-mobile-rn';
import { connect } from "react-redux";
import  {loginAction} from '../../store/rootAction';
import Wallpaper from '../../components/Wallpaper';
import Logo from '../../components/Logo';
import Form from '../../components/Form';
import SignupSection from '../../components/SignupSection';
import ButtonSubmit from '../../components/ButtonSubmit';

class Login extends Component {
  // 生命周期--组件挂载完毕
  componentDidMount() {

  }

  login=()=>{
    let {loginState} = this.props;

    if(loginState){
      // 退出
      this.props.dispatch({
        type: loginAction.signOut,
      })
    }else {
      // 登录
      this.props.dispatch({
        type: loginAction.loginRequest,
      })
    }

    // 跳转主页面
    this.props.navigation.navigate('Main');
  };

  render() {
    const {loginState} = this.props;

    return (
      <Wallpaper>
        <Logo />
        <Form />
        <SignupSection />
        <ButtonSubmit {...this.props} />
      </Wallpaper>
    );
  }
}

// 将 状态 绑定到 属性
const mapStateToProps = (state) => {
  return {
    loginState: state.loginReducer.loginState
  }
};
// 将 Dispatch 绑定到 属性
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch:dispatch
  }
};

const styles = StyleSheet.create({
  bigButton: {
    margin:10
  },
  text: {
    color: 'red',
    fontSize: 30,
    paddingBottom:50,
  },
  login:{
    color: 'blue',
    paddingBottom:50,
    fontSize: 30,
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);