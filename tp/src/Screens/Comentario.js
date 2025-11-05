import React, { Component } from "react";


import { FlatList, View } from "react-native-web";


import Comentario from "../Components/Comentario";

class Home extends Component{
constructor(props){
    super(props);
    this.state = {
        
    }}
   
    render(){return (
        <View >
        <Comentario />
     </View>
    )
}}


 export default Home