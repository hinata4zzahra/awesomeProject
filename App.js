import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation'

import profileRow from './components/profileRow'
import profileList from './components/profileList'

const RootNavigator = StackNavigator({
  profileList: {
    screen: profileList,
    navigationOptions :{
      header: null
    }
  },
  profileRow: {
    screen: profileRow,
    navigationOptions :{
      header: null
    }
  },
})


  export default class App extends Component {
    render(){
      return(
        <RootNavigator />
      )
    }
}
