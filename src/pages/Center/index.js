/**
 * 中心
 */
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Center extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>我的中心</Text>
      </View>
    );
  }
}