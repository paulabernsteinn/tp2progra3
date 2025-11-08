import React, { Component } from 'react'
import { View, Text, Pressable, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import { auth, db } from '../Firebase/config'


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
        owner: auth.currentUser.email,
        createdAt: Date.now(),
        likes: []
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
<View style={styles.contenedor}>

  <Text style={styles.titulo}> Recetas deliciosas </Text> 
  <Text style={styles.subtitulo}> Agregá un nuevo posteo </Text> 
        <TextInput style={styles.input}
          keyboardType='default'
          placeholder='Mensaje'
          onChangeText={ text => this.setState({mensaje:text}) }
          value={this.state.mensaje}/> 
        <Pressable onPress={() => this.onSubmit()} style={styles.boton}>
          <Text style={styles.textoboton}> ADD POST </Text> 
        </Pressable>
        </View>
    )}}
    
const styles = StyleSheet.create({
  titulo:{
       fontWeight: "bold",
       fontSize: 30,
       margin: 20,
       textAlign:"center",
  },
  subtitulo:{
       fontWeight: "bold",
       fontSize: 20,
       marginBottom: 20,
       textAlign:"center",
  },
  boton:{
       height: 50,
       paddingLeft: 10,
       paddingRight: 10,
       paddingTop: 15,
       paddingBottom: 15,
       borderWidth: 1,
       borderColor:'#ccc',
       borderStyle: 'solid',
       borderRadius: 10,
       marginTop: 10,
       backgroundColor: '#4db6ac',
   },
   textoboton:{
       textAlign:"center",
       fontSize: 15,
       fontWeight: 'bold',
   },
   contenedor:{
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 20,
   },
   input:{
       height: 50,
       paddingLeft: 10,
       paddingRight: 10,
       paddingTop: 15,
       paddingBottom: 15,
       borderWidth: 1,
       borderColor:'#ccc',
       borderStyle: 'solid',
       borderRadius: 10,
       marginTop: 10,
       marginBottom: 10
   }
})

export default NuevoPost