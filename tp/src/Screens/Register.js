import React, { Component } from 'react'
import { View, Text, Pressable, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import { auth, db } from '../Firebase/config'


class Register extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      username: '', 
      password: '',
      error: '',
    }
  }

  onSubmit(){

    if (!this.state.email || !this.state.email.includes('@')) {
      this.setState({ error: 'El email está mal formateado' });
      return;
    }
    if (this.state.username == '') {
      this.setState({ error: 'Agregar un usuario' });
      return;
    }
    if (this.state.password.length < 6) {
      this.setState({ error: 'La contraseña debe tener al menos 6 caracteres.' });
      return;
    }

    auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then( response => {
      console.log(response);
      this.setState({registered: true});
      auth.signOut()
      this.props.navigation.navigate('Login')

      db.collection('users').add({
        owner: this.state.email,
        email: this.state.email,
        username: this.state.username,
        createdAt: Date.now(),
    })  
    })    
    .catch(error => {
      this.setState({error: 'Credenciales inválidas.'})
    })

  }
  render (){
    return (
      
      <View style={styles.contenedor}>
        
      <Text style={styles.titulo}> Recetas deliciosas </Text> 
      <Text style={styles.subtitulo}> Formulario de registro </Text> 

        <TextInput style={styles.input} 
          keyboardType='email-address'
          placeholder='Email'
          onChangeText={ text => this.setState({email:text}) }
          value={this.state.email} />

        <TextInput style={styles.input} 
          keyboardType='default'
          placeholder='Usuario'
          onChangeText={ text => this.setState({username:text}) }
          value={this.state.username}/> 

        <TextInput style={styles.input} 
          keyboardType='default'
          placeholder='Password'
          secureTextEntry={true} 
          onChangeText={ text => this.setState({password:text}) }
          value={this.state.password}/> 

          <Text>{this.state.error}</Text>
          
        <Pressable onPress={() => this.onSubmit()} style={styles.boton}>
          <Text style={styles.textoboton}> Registrate </Text> 
        </Pressable> 
        
        <Pressable style={styles.boton} onPress={ ()=> this.props.navigation.navigate('Login')}>
          <Text style={styles.textoboton}>Ya tengo cuenta</Text>
        </Pressable>

      </View>
    )}
  }
 


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
  background:{
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
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
   },
})

export default Register