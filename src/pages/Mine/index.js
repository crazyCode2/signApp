/**
 * 我的
 */
import React from 'react';
import { View, Button } from 'react-native';

export default class MineScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to 公司详情"
          onPress={() => this.props.navigation.navigate('ComInf')}
        />
      </View>
    );
  }
}