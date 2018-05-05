import React, {Component} from 'react'
import {
  Container, Content, Form,
  Item, Input, Label,
  Icon, Button, Header,
  Card, CardItem, Thumbnail,
  Left, Body, Right
} from 'native-base'
import {
  StyleSheet, TouchableOpacity,
  View, Text, Image, ImageBackground,
} from 'react-native'


export default class ProfileRow extends Component {

  render() {
    console.log(this.props)
    const {name} = this.props;
    return(
      <CardItem header bordered title='Highlights'>
        <Icon active name='md-person' style={{color:"#4ac0e8"}} />
        <Text>{name}</Text>
      </CardItem>
    )
  }
}
