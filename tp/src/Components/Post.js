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
    
    
    render(){return (
        <View >
            <Text>{this.props.info.data.mensaje}</Text>
            <Pressable onPress={()=> this.like()}>  <Text >Me gusta </Text> </Pressable>
            <Text >Cantidad de Me gusta :  </Text>
        </View>
    )
}}
const styles = StyleSheet.create({
    imagen:{
        height: 100,
        width: 100
        
    },
})

   

 export default Post