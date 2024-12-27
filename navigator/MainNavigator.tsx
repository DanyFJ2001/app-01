import { createStackNavigator } from '@react-navigation/stack'; 
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { NavigationContainer } from '@react-navigation/native'; 
import Welcome from '../screens/Welcome';
import Pagina1Screen from '../screens/Pagina1Screen';
import Pagina2Screen from '../screens/Pagina2Screen';
import Pagina3Screen from '../screens/Pagina3Screen';

import Pagina5Screen from '../screens/Pagina6Screen';
import Pagina4Screen from '../screens/Pagina4Screen';
import Pagina6Screen from '../screens/Pagina6Screen';
import Pagina7Screen from '../screens/Pagina7Screen';
import Pagina5 from '../screens/Pagina5.Screen';


 
const Stack = createStackNavigator(); 
 
function MyStack() { 
    return ( 
        <Stack.Navigator> 
            <Stack.Screen name="Welcome" component={Welcome} /> 
            <Stack.Screen name="Drawer" component={MyDrawer} /> 
        </Stack.Navigator> 
    ); 
} 
 
const Drawer = createDrawerNavigator(); 
 
function MyDrawer() { 
    return ( 
        <Drawer.Navigator> 
            <Drawer.Screen name="Pagina1" component={Pagina1Screen}/> 
            <Drawer.Screen name="Pagina2" component={Pagina2Screen}/> 
            <Drawer.Screen name="Pagina3" component={Pagina3Screen}/> 
            <Drawer.Screen name="Pagina4" component={Pagina4Screen}/> 
            <Drawer.Screen name="Pagina5" component={Pagina5}/> 
            <Drawer.Screen name="Pagina6" component={Pagina6Screen}/> 
            <Drawer.Screen name="Pagina7" component={Pagina7Screen}/> 
        </Drawer.Navigator> 
    ); 
} 
 
export default function MyNavigator() { 
    return ( 
        <NavigationContainer> 
            <MyStack/> 
        </NavigationContainer> 
    ); 
}