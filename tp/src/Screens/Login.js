import React, { Component } from 'react'
import { View, Text, Pressable, TextInput, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { auth } from '../Firebase/config'
import { ImageBackground } from 'react-native-web';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      username: '', 
      password: '',
      error: '',
      loggedIn: false

    }
  }

  componentDidMount(){
        auth.onAuthStateChanged( user => {
          console.log(user)
          if (user) {
            this.props.navigation.navigate('HomeMenu')
          }
        })
  }


  onSubmit(){
    console.log(this.state.email)
    console.log(this.state.username)
    
    if (!this.state.email || !this.state.email.includes('@')) {
      this.setState({ error: 'El email está mal formateado' });
      return;
    }
    if (this.state.password.length < 6) {
      this.setState({ error: 'La contraseña debe tener al menos 6 caracteres.' });
      return;
    }

    auth.signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((response) => {
        this.setState({loggedIn: true});
        this.props.navigation.navigate('HomeMenu')
    })
    .catch(error => {
      this.setState({error: 'Credenciales inválidas.'})
    })
  }


  render(){
  return (
    // <ImageBackground style={styles.background} 
    //  source={require('../../assets/bg-body.png')}
    //  >
    
  <View style={styles.contenedor}>

  <Text style={styles.titulo}> Recetas deliciosas </Text> 
  <Text style={styles.subtitulo}> Formulario de login </Text> 

      <TextInput style={styles.input} 
        keyboardType='email-address'
        placeholder='Email'
        onChangeText={ text => this.setState({email:text}) }
        value={this.state.email} />

      <TextInput style={styles.input} 
        keyboardType='default'
        placeholder='Password'
         secureTextEntry={true}
        onChangeText={ text => this.setState({password:text}) }
        value={this.state.password}/> 

      <Text>{this.state.error}</Text>

      <Pressable onPress={() => this.onSubmit()} style={styles.boton}>
      <Text style={styles.textoboton}> Login </Text> 
      </Pressable>

      <Pressable style={styles.boton}
      onPress={ ()=> this.props.navigation.navigate('Register')}>
      <Text style={styles.textoboton}> No tengo cuenta </Text>
      </Pressable>

  </View>

  // </ImageBackground>
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

export default Login