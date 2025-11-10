import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { FlatList } from "react-native-web";
import { TextInput, View } from "react-native-web";
import { db, auth } from '../Firebase/config' 
import firebase from "firebase";

class Comentario extends Component  {
     constructor(props){
    super(props);
    this.state = {
        comentario: "",
        post: []
       
}}

componentDidMount(){
    db.collection('posts')
    .doc(this.props.route.params.id)
    .onSnapshot(
        docs =>{
            
            this.setState({
                post: docs.data()
            })
            }
    )
}

comentario(){   
    db.collection('posts')
    .doc(this.props.route.params.id)
    .update(

           {comentarios: firebase.firestore.FieldValue.arrayUnion({ comentario: this.state.comentario, email: auth.currentUser.email}),
           }
            
       )
       .then((res)=>{
        console.log(res);
       })
       .catch(err => console.log(err)
       )

   }
 
    render () {
        console.log(this.state);
        console.log(this.props);
        
        return (
    
        <View style={styles.contenedor}>
            
            <Text style={styles.titulo}>Recetas deliciosas</Text>
            <Text style={styles.subtitulo}>Deja tu comentario!</Text>
            <Text style= {styles.mensaje}> Post: {this.state.post.mensaje} </Text>
           
            <FlatList style={styles.texto}
            data={ this.state.post.comentarios }
            keyExtractor={ (item, index) => index.toString() }
            renderItem={ ({item}) => <View style={styles.fondo}>   <Text> {item.comentario} </Text>   <Text > {item.email} </Text>  </View>}
            />
            
                <TextInput style= {styles.input}
                keyboardType='default'
                placeholder='Comentario' 
                onChangeText={ text => this.setState({comentario:text}) }
                 value={this.state.comentario}/>
               
                <Pressable style= {styles.boton} onPress={() => this.comentario()}>
                <Text style= {styles.textoBoton}> Comentar </Text> 
                <Text style= {styles.textoBoton}>  </Text>
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
    fondo: {
        backgroundColor: 'rgba(212, 217, 217, 0.53)',
        width: 300,
        borderRadius: 4,
        padding: 10,
        marginBottom: 20,

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
    },
    mensaje: {
       fontSize: 15,
       fontWeight: 'bold',
       padding: 10
    }
   
})
 export default Comentario