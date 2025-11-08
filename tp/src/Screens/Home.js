import React, { Component } from "react";
import { Pressable, Text } from "react-native";
import { FlatList, View } from "react-native-web";
import { StyleSheet } from "react-native";
import Post from "../Components/Post";
import { db } from "../Firebase/config";
import Comentario from "../Components/Comentario";

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
  <View style={styles.contenedor}>
        <Text style={styles.titulo}>Recetas deliciosas</Text>
        <Text style={styles.subtitulo}>Posts</Text>
        <FlatList style={styles.texto}
            data={ this.state.posts }
            keyExtractor={ item => item.id.toString() }
            renderItem={ ({item}) => <Post info= {item} navigation={this.props.navigation}/> }
            />
    </View>
)}
}

const styles = StyleSheet.create({
   titulo:{
       fontWeight: "bold",
       fontSize: 30,
       margin: 20,
  },
  subtitulo:{
       fontWeight: "bold",
       fontSize: 20,
       marginBottom: 20,
  },
  contenedor:{
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 20,
  },
  texto:{
        fontSize: 10,
        marginBottom: 20,
        alignSelf: 'flex-start',
        marginLeft: 20
   }
})

export default Home