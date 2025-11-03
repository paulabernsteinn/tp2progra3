import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import { View } from 'react-native-web';

function Profile(props){
    return(
        <View>
            <Text style={styles.titulo}>Mi perfil</Text>
            <Pressable onPress={ ()=> props.navigation.navigate('Login')}>
                <Text style={styles.textoceleste}>Desloguearse</Text>
            </Pressable>
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