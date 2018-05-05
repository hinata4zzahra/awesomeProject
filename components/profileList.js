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
import { StackNavigator } from 'react-navigation';




export default class profileList extends Component {

  state={
    users:[
      {id:1,name:'Liz Miller'},
      {id:2,name:'John Doe'},
      {id:3,name:'Deni Hartanto'},
      {id:4,name:'Liza Faizah'},
      {id:5,name:'Tutik Utari'}
    ]
  }

  render() {
    return(
      <Container>
        <Header />
        <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require('../img/user.png')} />
              <Body>
                <Text>Maria Hart</Text>
                <Text note>Director of project manajemen at Goldenphase Solar</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <View style={{justifyContent:'space-between',flexDirection:'row',marginLeft:125,marginRight:25,marginTop:15,paddingRight:25}}>
              <Button bordered success style={{width:100,height:50}}>
                <Text style={{justifyContent:'center',alignItems:'center',alignSelf:'center',paddingLeft:25}}>Message</Text>
              </Button>
              <Button success style={{width:100,height:50}}>
                <Text style={{justifyContent:'center',alignItems:'center',alignSelf:'center',color:'white',paddingLeft:25}}>connect</Text>
              </Button>
            </View>
          </CardItem>
          <CardItem>
            <Body>
              <Text style={{paddingLeft:50}}>i am renewable energy executive with 10 years of experience and have build strong skills in comp...</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>


          <Card>
            <Text style={{paddingLeft:25}}>Highlights</Text>
            {this.state.users.map((user) => (
              <CardItem header bordered key={user.id} title='Highlights'>
                <Icon active name='md-person' style={{color:"#4ac0e8"}} />
                <Text>{user.name}</Text>
              </CardItem>
            ))}
          </Card>

        </Content>
      </Container>
    )
  }
}
