/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { register } from 'redux/signout';
import CustomTextInput from 'components/CustomTextInput/CustomTextInput';
import applicationStyles from 'config/applicationStyles';
import Colors from 'config/colors';

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      birthday: ''
    };

    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignUp() {
    this.props.register({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      birthday: this.state.birthday
    });
  }

  handleSignIn() {
    Actions.SignIn();
  }

  checkToRenderLoading() {
    if(this.props.loading) {
      return (
        <ActivityIndicator
          color='white',
          size='large'/>
      );
    }
    return (
      <TouchableOpacity activeOpacity={.5} onPress={this.handleSignUp}>
        <View style={styles.signupButton}>
          <Text style={styles.signupText}>Join</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Image
         style={applicationStyles.splashScreen}
         source={require('assets/images/bg_signup.png')}>
        <View style={applicationStyles.quarterHeight}>
          <Text>Sign Up</Text>
        </View>
        <View>
          <CustomTextInput
            onChangeText={(text) => this.setState({name: text})}
            autoCapitalize={'none'}
            placeholder={'Name'}
            imageIcon={require('assets/images/user_name.png')} />
          <CustomTextInput
            onChangeText={(text) => this.setState({email: text})}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            placeholder={'Email'}
            imageIcon={require('assets/images/email.png')} />
          <CustomTextInput
            onChangeText={(text) => this.setState({password: text})}
            autoCapitalize={'none'}
            secureTextEntry={true}
            placeholder={'Password'}
            imageIcon={require('assets/images/password.png')} />
          <CustomTextInput
            onChangeText={(text) => this.setState({birthday: text})}
            autoCapitalize={'none'}
            placeholder={'Birthday'}
            imageIcon={require('assets/images/birthday.png')} />
        </View>
        <View>
          <Text style={styles.errorText}>
            {this.props.error}
          </Text>
          {this.checkToRenderLoading()}
          <View style={styles.signinWrap}>
            <Text style={styles.accountText}>Already have an account?</Text>
            <TouchableOpacity activeOpacity={.5} onPress={this.handleSignIn}>
              <Text style={styles.signinLinkText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
    </Image>
    );
  }
}

// Map redux state to component props
function mapStateToProps(state) {
  return {
    error: state.signUpReducer.error,
    loading: state.signUpReducer.loading,
    user: state.signUpReducer.user
  };
}

// Map redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    register: (user) => dispatch(register(user))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);

const styles = StyleSheet.create({
  signupButton: {
    height: 60,
    backgroundColor: Colors.radicalRed,
    alignItems: "center",
    justifyContent: "center"
  },
  signupText: {
    color: "#FFF",
    fontSize: 18
  },
  signinWrap: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  accountText: {
    color: "#D8D8D8",
    backgroundColor: Colors.transparent
  },
  signinLinkText: {
    color: "white",
    marginLeft: 5,
    backgroundColor: Colors.transparent
  },
  errorText: {
    color: 'red',
    backgroundColor: 'transparent',
    textAlign: 'center',
    lineHeight: 20
  }
});
