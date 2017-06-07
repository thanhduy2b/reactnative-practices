import React, {Component} from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

export default class Logo extends Component{

  render(){
    return (
      <View style={styles.main}>
        <Image source={require('./img/logo.png')} style={styles.logo}/>
        <Text style={styles.title}>
          {this.props.title}
        </Text>
      </View>
    )
  }
}

Logo.propType = {
  title: React.PropTypes.string
}


const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25
  },
  logo: {
    width: 82,
    height: 73
  },
  title: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
    marginTop: 10
  }
});
