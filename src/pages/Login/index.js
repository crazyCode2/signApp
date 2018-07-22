/**
 * 登录
 */
import React, { Component } from 'react';
import { Text, View, Button, StyleSheet} from 'react-native';
import { connect } from "react-redux";
import  {loginAction} from '../../store/rootAction';

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
  };

  render() {
    const {loginState} = this.props;

    return (
      <View>
        <Text style = {styles.text}>
          login的页面你知道
        </Text>
        <Text style = {styles.login}>
          您的登陆状态是：{loginState?`已登陆成功！奖励你一朵小红花！`:'您还没登陆'}
        </Text>
        <View style = {styles.bigButton}>
          <Button
            onPress={this.login}
            title={loginState?"退出登陆":"立即登陆"}
            color="#000"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    );
  }
}

// 将 状态 绑定到 属性
const mapStateToProps = (state) => {
  return {
    loginState: state.mainPageReducer.loginState
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
    width:100,
    height:40,
    flexDirection:'row',
    backgroundColor:'red',
    alignItems:'center',
    marginLeft:150,
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