/**
 * 首页
 */
import React from 'react';
import { Text, View, Button } from 'react-native';

class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to 我的用电"
          onPress={() => this.props.navigation.navigate('Electricity')}
        />
      </View>
    );
  }
}

export default class HomeScreen extends React.Component{
  render(){
    console.log('home props', this.props)
    return (
      <Home navigation={this.props.navigation} />
    )
  }
}