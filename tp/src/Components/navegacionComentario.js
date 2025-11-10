

import Home from '../Screens/Home';
import Profile from '../Screens/Profile'
import NuevoPost from '../Screens/NuevoPost';
import {FontAwesome6} from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ComentarioScreen from '../Screens/Comentario';

  const Stack = createNativeStackNavigator();


function navegacionComentario(){
    return (
        <Stack.Navigator>
           <Stack.Screen name="Home" component={ Home } options={ { headerShown: false ,   }} />
           <Stack.Screen name="Comentarios" component={ ComentarioScreen } options={ { headerShown: false,  } } />
           
            
        </Stack.Navigator>
       
  )}

  export default navegacionComentario