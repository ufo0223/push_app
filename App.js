import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';

import LoginScreen from './src/LoginScreen';

export default class App extends Component {
  render(){
    return(
      <View style={{flex: 1}}>
        <LoginScreen/>
      </View>
    );
  }
}

