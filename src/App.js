/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import NavigationScreen from './Screens/Navigation';
import './Config/Reactotron';
import axios from 'axios';

//setup default axios
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export default class App extends Component {
  render() {
    return (
      <NavigationScreen/>
    );
  }
}

