import React, { Component } from "react";
import { Text } from "react-native";

import { FlatList, View } from "react-native-web";

import { StyleSheet } from "react-native";

import Post from "../Components/Post";
import { db } from "../Firebase/config";

class Home extends Component{
constructor(props){
    super(props);
    this.state = {
        posts: []
    }}
    componentDidMount(){
        db.collection('posts').onSnapshot(
    docs =>{
            let posts2 = [];
       docs.forEach( doc => {
            posts2.push({
                id: doc.id,
                data: doc.data()
    })
           this.setState({
            posts: posts2,
            
       })
    
       
    })}
)}
   
render(){
return(
              <View >
        <Text >Home</Text>
       
         <Text> Posts</Text>
        <FlatList
            data={ this.state.posts }
            keyExtractor={ item => item.id.toString() }
            renderItem={ ({item}) => <Post info= {item} /> }
/>
        </View>
    )
}}

const styles = StyleSheet.create({
   titulo:{
        fontWeight: "bold",
        fontSize: 30,
        marginBottom: 20,
        alignSelf: 'flex-start',
        marginLeft: 20
   }
})

export default Home