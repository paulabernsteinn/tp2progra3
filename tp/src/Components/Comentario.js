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
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Recetas deliciosas</Text>
            <Text style={styles.subtitulo}>Deja tu comentario!</Text>

                <TextInput style= {styles.input}
                keyboardType='default'
                placeholder='Comentario' 
                onChangeText={ text => this.setState({comentario:text}) }
                 value={this.state.comentario}/>
               
                <Pressable style= {styles.boton} onPress={() => this.onSubmit()}>
                <Text style= {styles.textoBoton}> Comentar </Text> 
                </Pressable> 
        </View>
    )}
}

let styles = StyleSheet.create({
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
     contenedor: {
        padding: 20,
    },
    input: {
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
    boton: {
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
       backgroundColor: '#28a745',
    }, 

    textoBoton: {
       textAlign:"center",
       fontSize: 15,
       fontWeight: 'bold',
    }
   
})
 export default Comentario