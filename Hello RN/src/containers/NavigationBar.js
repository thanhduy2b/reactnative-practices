import React, {Component} from 'react'
import {View, Text, Navigator, StatusBar, TouchableHighlight, StyleSheet} from 'react-native'

export default class NavigationBar extends Component{

  constructor(props){
    super(props);
  }

  static NavigationBarRouteMapper = props => ({
          LeftButton(route, navigator, index, navState) {
            if(index > 0) {
                  return (
                    <TouchableHighlight
                      underlayColor="transparent"
                      onPress={() => { if (index > 0) { navigator.pop() } }}>
                      <Text style={ styles.leftNavButtonText }>Back</Text>
                    </TouchableHighlight>)
                } else {
                  return null;
                }
          },
          RightButton(route, navigator, index, navState) {
          },
          Title(route, navigator, index, navState) {
          },
      })

  render(){
    return (
      <Navigator.NavigationBar routeMapper={NavigationBar.NavigationBarRouteMapper(this.props)}/>

    )
  }
}

NavigationBar.propType = {
  hidden: React.PropTypes.string
}
