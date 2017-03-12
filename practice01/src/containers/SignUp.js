/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import applicationStyles from 'config/applicationStyles';

export default class SignUp extends Component {
  render() {
    return (
      <Image
         style={applicationStyles.splashScreen}
         source={require('assets/images/bg_signup.png')}>
      <View style={styles.container}>
        <Text>SignUp screen</Text>
      </View>
    </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
