/**
 * 公司信息
 */
import React from 'react';
import { Text, View } from 'react-native';

export default class CompanyInforScreen extends React.Component {
  // 构造函数
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>公司信息!</Text>
      </View>
    );
  }
}