/**
 * @summary calendar 페이지
 * 2020.12.19
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class SettingScreen extends Component {
  render() {
    return (
      <View style={styles.wrap}>
        <Text style={styles.title}>Calendar</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrap: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title:{
      fontSize:30,
    }
    
});

export default SettingScreen;
