/**
 * 背景墙 组件
 */
import React, {Component} from 'react';
import { Dimensions, StyleSheet, ImageBackground } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

import bgSrc from '../assets/images/wallpaper.png';

export default class Wallpaper extends Component {
  render() {
    return (
      <ImageBackground style={styles.background} source={bgSrc}>
        {this.props.children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT
  }
});