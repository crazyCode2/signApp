/**
 * 我的用电
 */
import React from 'react';
import { Text, View } from 'react-native';

export default class MyElectricityScreen extends React.Component {
  // 构造函数
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>我的用电!</Text>
      </View>
    );
  }
}