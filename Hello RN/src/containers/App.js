import React, {Component} from 'react'
import {View, Text, Navigator, StatusBar, TouchableHighlight, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import { Router, Scene } from 'react-native-router-flux';


import { actionCreators } from '../redux/todoListRedux'

import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'

const mapStateToProps = (state) => ({
  todos: state.todos
})

class App extends Component{

  render(){
    return (
      <View style={styles.root}>
        <Router>
        <Scene key="root">
          <Scene key="LoginScreen" component={LoginScreen} hideNavBar={true} initial={true} />
          <Scene key="SignupScreen" component={SignupScreen} hideNavBar={false} title="Sign up" navigationBarStyle={styles.navBar}/>
        </Scene>
      </Router>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  leftNavButtonText: {
    marginLeft: 5,
    color: 'white'
  },
  navBar: {
    backgroundColor: '#84C873'
  }
});

export default connect(mapStateToProps)(App)
