/**
  * Entry point of pratice project
  *
  */


import { AppRegistry, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import React, {Component} from 'react'

// Import the reducer and create a store
import { reducer } from './src/redux/todoListRedux'
const store = createStore(reducer)

// Import the App container component
import App from './src/containers/App'

// Pass the store into the app container
const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('GST', () => AppWithStore)
