import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './src/Screens/Register'
import Login from './src/Screens/Login'
import HomeMenu from './src/Components/HomeMenu'
import Comentario from './src/Components/Comentario';


export default function App() {
   const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
           <Stack.Screen name="Register" component={ Register } options={ { headerShown: false } }  />
           <Stack.Screen name="Login" component={ Login }options={ { headerShown: false } }  />
           <Stack.Screen name="HomeMenu" component={ HomeMenu } options={ { headerShown: false } }  />
        </Stack.Navigator>
      </NavigationContainer>
   )
}
