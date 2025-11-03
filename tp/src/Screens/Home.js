import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { View } from 'react-native-web';
import DynamicForm from '..//Components/DynamicForm';

function Home(){
    return(
        <View>
            <Text style={styles.titulo}>Home</Text>
            <DynamicForm/>
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
   }
})

export default Home