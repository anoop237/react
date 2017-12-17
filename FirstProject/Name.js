/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
export default class Name extends Component<{}> {
  render() {
    let pic = {
      uri: 'https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAIA_wDGAAAAAQAAAAAAAAq5AAAAJGM3NjVhMTdkLTg5MWYtNDg1My05YjRlLWZiMjY4YzA1YTJlMw.jpg'
    };
    return (
        <Image source={pic} style={styles.name}/>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    width:100,
    height:100,
    margin:10,
    padding:10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ccc'
  },

});
