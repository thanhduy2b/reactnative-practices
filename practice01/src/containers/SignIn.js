/* @flow */

import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { login } from 'redux/signin';

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignIn() {
    this.props.login({
      email: this.state.username,
      password: this.state.password
    });
  }

  handleSignUp() {
    Actions.SignUp();
  }

  render() {
    return (
      <Image
        source={require('assets/images/bg_signin.png')}>
      </Image>
    );
  }
}

SignIn.propTypes = {
  login: PropTypes.func,
  error: PropTypes.string,
  loading: PropTypes.bool,
  user: PropTypes.object
};

// Map redux state to component props
function mapStateToProps(state) {
  return {
    error: state.signInReducer.error,
    loading: state.signInReducer.loading,
    user: state.signInReducer.user
  }
}

// Map redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    login: (userCredentials) => dispatch(login(userCredentials))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
