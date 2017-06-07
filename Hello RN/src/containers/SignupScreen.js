import React, {Component} from 'react'
import {View, Text, TextInput, Image, TouchableHighlight, StyleSheet} from 'react-native'
import Logo from '../components/Logo'

export default class SignupScreen extends Component{

  constructor(props){
    super(props);
    this.state = {firstName: '', email: '', password: ''};
  }

  handlePressBack = () => {
    console.log("Go to signup screen");
    this.props.navigator.pop();
  }

  handleChangeFirstname = (text) => this.setState({firstName: text});
  handleChangeEmail = (text) => this.setState({email: text})

  handleChangePassword = (text) => {
    console.log("Changed pass");
    this.setState({ password: text })
  }

  handlePressCreateAccount = () => {
    const { firstName, email, password } = this.state
    console.log("name " + firstName);
    console.log("email " + email);
    console.log("password " + password);
  }

  handlePressSignupFacebook = () => {
    console.log("Sign up by facebook")
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Logo title = "Free Sign Up"/>
          <TextInput placeholder="Name" style={styles.input}
            keyboardType='default'
            returnKeyType='next'
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText= {this.handleChangeFirstname}/>

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

          <TouchableHighlight style={styles.signup} underlayColor="#ffa483" onPress={this.handlePressCreateAccount}>
            <Text style={styles.label}>SIGN UP</Text>
          </TouchableHighlight>

          <Text style={styles.or}>or</Text>

          <TouchableHighlight style={styles.facebook} underlayColor="#87adf1" onPress={this.handlePressSignupFacebook}>
            <Text style={styles.label}>Sign up with Facebook</Text>
          </TouchableHighlight>

        </View>
      </View>
    )
  }
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
  signup: {
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
  label: {
    color: '#f0f8ff'
  }
});
