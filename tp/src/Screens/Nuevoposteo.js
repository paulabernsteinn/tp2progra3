import React, { Component } from 'react'
import { View, Text, Pressable, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import { auth, db } from '../Firebase/confirg'


class NuevoPost extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      mensaje: '',
      password: '',
    }
  }

  onSubmit(){
    this.setState({registered: true});
    this.props.navigation.navigate('Profile')
      db.collection('posts').add({
        mensaje: this.state.mensaje,
        createdAt: Date.now(),
    })

    .then(res =>{
        console.log(res)
    })

    .catch (e => {
        console.log(e)
    })
}

  render (){
    return (
        <View>
        <TextInput
          keyboardType='default'
          placeholder='mensaje'
          onChangeText={ text => this.setState({mensaje:text}) }
          value={this.state.mensaje}/> 
        <Pressable onPress={() => this.onSubmit()}>
          <Text> ADD POST </Text> 
        </Pressable>
        </View>
    )}}
    

export default NuevoPost