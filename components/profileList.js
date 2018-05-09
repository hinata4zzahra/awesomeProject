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
import axios from 'axios'

import ProfileRow from './ProfileRow'


export default class profileList extends Component {

  state={
    users:[
      {
        id:1,name:'Liz Miller',position: 'Director of project manajemen at Goldenphase Solar',
        bio:'i am renewable energy executive with 10 years of experience and have build strong skills in comp...'
      },
      {
        id:2,name:'John Doe',position: 'Director of project manajemen at Goldenphase Solar',
        bio:'i am renewable energy executive with 10 years of experience and have build strong skills in comp...'
      },
      {
        id:3,name:'Deni Hartanto',position: 'Director of project manajemen at Goldenphase Solar',
        bio:'i am renewable energy executive with 10 years of experience and have build strong skills in comp...'
      },
      {
        id:4,name:'Liza Faizah',position: 'Director of project manajemen at Goldenphase Solar',
        bio:'i am renewable energy executive with 10 years of experience and have build strong skills in comp...'
      },
      {
        id:5,name:'Tutik Utari',position: 'Director of project manajemen at Goldenphase Solar',
        bio:'i am renewable energy executive with 10 years of experience and have build strong skills in comp...'
      }
    ],
    profiles:[],
    hightlights:[]
  }

  allProfiles = () =>{
    axios
    .get('https://api.backendless.com/A6110560-CDDC-FAFA-FF85-39A2C5B42B00/67F86092-AD36-2C4D-FFF6-C252CFA86800/data/profiles')
    .then((result) =>{
      this.setState({profiles: result.data})
    })
  }



  componentWillMount(){
    this.allProfiles
  }

  render() {
    console.log(this.state.profiles)
    return(
      <Container>
        <Header />
        <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require('../img/user.png')} />
              <Body>
                <Text>{this.state.users[0].name}</Text>
                <Text note>{this.state.users[0].position}</Text>
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
              <Text style={{paddingLeft:50}}>{this.state.users[0].bio}</Text>
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
              <CardItem header bordered title='Highlights' key={user.id}>
                <Icon active name='md-person' style={{color:"#4ac0e8"}} />
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProfileRow')}>
                  <Text>{user.name}</Text>
                </TouchableOpacity>
              </CardItem>
            ))}
          </Card>

        </Content>
      </Container>
    )
  }
}
