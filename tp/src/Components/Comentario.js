import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { Text } from "react-native";

import { TextInput, View } from "react-native-web";



class Comentario extends Component  {
     constructor(props){
    super(props);
    this.state = {
        comentario: "",
       
}}

onSubmit(){
    console.log(this.state.comentario);
    
    
}
 
    render () {return (
        <View >
                <TextInput style= {style.input}
                keyboardType='default'
                placeholder='Comentario'
                secureTextEntry={true} 
                onChangeText={ text => this.setState({comentario:text}) }
                 value={this.state.comentario}/>
               
                <Pressable style= {style.boton} onPress={() => this.onSubmit()}>
                <Text style= {style.textoBoton}> Comentar </Text> 
                </Pressable> 
        </View>
    )}
}

let style = StyleSheet.create({
    titulo:{
        fontSize: 50,
        fontWeight: "bold",
        marginLeft:10
    },   
     contenedor: {
        paddingHorizontal: 10,
        marginTop: 20
    },
    input: {
        height: 20,
paddingVertical: 15,
paddingHorizontal: 10,
borderBottomWidth: 1,
borderColor:"‘#ccc",
borderCurve: 6,
marginVertical: 10

    },
    boton: {
    backgroundColor:"#28a745" , 
    paddingHorizontal: 10,
    paddingVertical: 6,
    textAlign: "center",
    borderRadius: 4, 
    borderColor: "#28a745",
    margin: 10

    }, 

    textoBoton: {
        color:" #fff"
    }
   
})
 export default Comentario