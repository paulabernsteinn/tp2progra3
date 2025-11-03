import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import { View } from 'react-native-web';
import { auth } from '../Firebase/config';
import { Component } from 'react';

function Profile(props){
// class Profile extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             usuarios
//         }
//     }
// }

//     db.collection('users').onSnapshot(
//         docs =>{
//                 let uers = [];
//            docs.forEach( doc => {
//                 users.push({
//                     id: doc.id,
//                     data: doc.data()
//         })
//             this.setState({
//                usuarios: 
//            })
//         })
    return(
        
        <View>
            <Text style={styles.titulo}>Mi perfil</Text>
            <Pressable onPress={ ()=> props.navigation.navigate('Login')}>
                <Text style={styles.textoceleste}>Desloguearse</Text>
            </Pressable>
            <Text> Username:  {auth.currentUser.email} </Text>
            <Text> Email: {auth.currentUser.email} </Text>
        </View>
        
    )
 
}

const styles = StyleSheet.create({
   titulo:{
        fontWeight: "bold",
        fontSize: 30,
        marginBottom: 20,
        alignSelf: 'flex-start',
        marginLeft: 20
   },
   textoceleste:{
        textAlign:"center",
        fontSize: 20,
        backgroundColor: '#0bc8f7',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,  
    },
    textonaranja:{
        textAlign:"center",
        fontSize: 20,
        backgroundColor: '#f88c10ff', 
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,    
    }
})

export default Profile