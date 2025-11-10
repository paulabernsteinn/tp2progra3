import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import { View } from 'react-native-web';
import { auth } from '../Firebase/config';
import { Component } from 'react';
import { db } from '../Firebase/config';

import { FlatList} from "react-native-web";
import Post from '../Components/Post';


class Profile extends Component{
   constructor(props){
      super(props);
      this.state = {
        username: "",
        postsUsuario: [],
         }
    } 

componentDidMount() {
    
    db.collection('users')
    .where('owner', '==', auth.currentUser.email)
    .onSnapshot(
        docs =>{
            let userFound = [];
           docs.forEach( doc => {
             userFound.push({
                id: doc.id,
                user: doc.data()}) 
               
        })
        console.log(userFound);
        
        
             this.setState({
               username: userFound[0].user.username
               
        })
        console.log(username);
    }
        
    )

      db.collection('posts').where('owner', '==', auth.currentUser.email).onSnapshot(
        docs => {
        let postsUsuario = [];
        docs.forEach(doc => 
            postsUsuario.push({ 
            id: doc.id, 
            data: doc.data() 
        }));
        this.setState({ 
            postsUsuario: postsUsuario 
        });
      });

    
      }

logout(){
    console.log(auth.currentUser);
   auth.signOut()
   this.props.navigation.navigate('Login')
}

render() {
    console.log(this.state);
    
    return(
        <View style={styles.contenedor}>
        
        <Text style={styles.titulo}>Mi perfil</Text>
        <Text style={styles.texto}> Email: {auth.currentUser.email} </Text>
        <Text style={styles.texto}> Username:   {this.state.username} </Text>
              <Text style={styles.subtitulo}>Mis posteos</Text>
             <FlatList 
            data={ this.state.postsUsuario }
            keyExtractor={ item => item.id.toString() }
            renderItem={ ({item}) => <Post info= {item} navigation={this.props.navigation}/> }
            
           
/>
            <Pressable onPress={ ()=> props.navigation.navigate('Login')} >
                <Pressable style={styles.boton} onPress={()=> this.logout()}> <Text style={styles.textoboton}>Desloguearse</Text></Pressable>
            </Pressable>
           
            
        </View>
        
    )}}

// <Text> Username:   {this.state.username[0].data.username} </Text> esto iba en la linea 50 pero no anda

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
        marginTop: 20,
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
       marginTop: 30,
       backgroundColor: '#070707ff',
   },
   textoboton:{
       textAlign:"center",
       fontSize: 15,
       fontWeight: 'bold',
       color: 'white'
   },
   texto:{
       textAlign:"left",
       fontSize: 15,
       alignSelf:'flex-start'
   },
    contenedor:{
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 20
  },

})

export default Profile