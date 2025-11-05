import React, { Component } from "react";
import { Image, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";

import { View } from "react-native";
import { auth, db } from "../Firebase/config";

import firebase from "firebase";


class Post extends Component {
    constructor(props){
        super(props)
        this.state= {
            
            likeado: false, 
            
        }}

       

   
      like(){
    db.collection('posts')
    .doc(this.props.info.id)
    .update(

        this.props.info.data.likes.includes(auth.currentUser.email) ?
            {likes : firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email)}
            
        :
           {likes: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)}
           
        
       )
       .then((res)=>{
        console.log(res);
        
       })
       .catch(err => console.log(err)
       )

   }
   comentar(){
    console.log("comentar");
    
   }
    
    
    render(){return (
        <View style={styles.fondo}>
            <Text>{this.props.info.data.mensaje}</Text>
            <Text>Creador del posteo: {this.props.info.data.owner}</Text>
      
            <Pressable onPress={()=> this.like()}>  <Text style={styles.megusta}>Me gusta </Text> </Pressable>
            <Text >Cantidad de Me gusta : {this.props.info.data.likes.length} </Text>
                   <Pressable onPress = {() => this.props.navigation.navigate('Comentario' )}>
                 <Text style={styles.boton}>Comentar </Text>
        </Pressable>
        </View>
    )
}}
const styles = StyleSheet.create({
    imagen:{
        height: 100,
        width: 100
        
    },
    fondo: {
        backgroundColor: 'rgba(212, 217, 217, 0.53)',
        width: 300,
        borderRadius: 4,
        padding: 10,
        marginTop: 10
    },
       boton:{
       backgroundColor: '#28a745',
       paddingLeft: 10,
       paddingRight: 10,
       paddingTop: 6,
       paddingBottom: 6,
       textAlign:"center",
       borderRadius: 4,
       borderWidth: 1,
       borderStyle: 'solid',
       borderColor: '#28a745',
       marginBottom: 10
   },
        megusta:{
       backgroundColor: '#f06565ff',
       paddingLeft: 10,
       paddingRight: 10,
       paddingTop: 6,
       paddingBottom: 6,
       textAlign:"center",
       borderRadius: 4,
       borderWidth: 1,
       borderStyle: 'solid',
       borderColor: '#f06565ff',
       marginBottom: 10
   },
})

   

 export default Post