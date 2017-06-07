import React, {Component} from 'react'
import {View, Text, Button, TextInput, Image, TouchableHighlight, StyleSheet} from 'react-native'
import { Actions } from 'react-native-router-flux';

import Logo from '../components/Logo'
import NavigationBar from './NavigationBar'

export default class LoginScreen extends Component{

  constructor(props){
    super(props);
    this.state = {email: '', password: ''};
  }

  handleChangeEmail = (text) => this.setState({email: text})

  handleChangePassword = (text) => {
    console.log("Changed pass");
    this.setState({ password: text })
  }

  handlePressLogin = () => {
    const { email, password } = this.state
    console.log("Email " + email);
    console.log("Password " + password);
  }

  handlePressLoginFacebook = () => {
    const { email, password } = this.state
    console.log("Email " + email);
    console.log("Password " + password);
  }

  handlePressSignup = () => {
    console.log("Go to signup screen");
    this.props.navigator.push({name: 'SignupScreen', title: "Sign Up"})
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Logo title = "Welcome to Gia Su TOEIC"/>
          <TextInput placeholder="Email" style={styles.input}
            keyboardType='default'
            returnKeyType='next'
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText= {this.handleChangeEmail}/>
          <TextInput placeholder="Password" secureTextEntry={true}
              keyboardType='default'
              returnKeyType='next'
              autoCapitalize='none'
              autoCorrect={false}
              style={styles.input} onChangeText={this.handleChangePassword}/>

          <TouchableHighlight style={styles.signin} underlayColor="#ffa483" onPress={this.handlePressLogin}>
            <Text style={styles.label}>SIGN IN</Text>
          </TouchableHighlight>

          <Text style={styles.or}>or</Text>

          <TouchableHighlight style={styles.facebook} underlayColor="#87adf1" onPress={this.handlePressLoginFacebook}>
            <Text style={styles.label}>Sign in with Facebook</Text>
          </TouchableHighlight>

          <View style={styles.text}>
            <Text style={styles.noaccount}>Dont have account yet? </Text>
            <Button style={styles.signup} onPress={Actions.SignupScreen} title="Sign up"/>
          </View>
        </View>
      </View>
    )
  }
}


LoginScreen.propType = {
  logo: React.PropTypes.string,
  title: React.PropTypes.string
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#73c884',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    justifyContent: 'center',
    alignItems: 'stretch',
    width: 250
  },
  input: {
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#f0f8ff',
    paddingLeft: 10
  },
  signin: {
    backgroundColor: '#ff7f50',
    color: '#FFF',
    fontSize: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  facebook: {
    backgroundColor: '#6495ed',
    color: '#FFF',
    fontSize: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  or: {
    textAlign: 'center',
    color: '#a9a9a9',
    fontSize: 15,
    marginTop: 10
  },

  text: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  noaccount: {
    textAlign: 'center',
    color: '#a9a9a9',
    fontSize: 15,
    marginTop: 10
  },
  signup: {
    textAlign: 'center',
    color: '#f0f8ff',
    fontSize: 15,
    marginTop: 10
  },
  label: {
    color: '#f0f8ff'
  }
});
