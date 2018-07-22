/**
 * 消息页
 */
import React from 'react';
import { View, Button } from 'react-native';

export default class MassageScreen extends React.Component{
  render(){
    console.log('msg props', this.props)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to 消息详情"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    )
  }
}