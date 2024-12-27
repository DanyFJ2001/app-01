import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Pagina1Screen from "../screens/Pagina1Screen";

import Pagina5 from "../screens/Pagina5.Screen";
import Pagina5Screen from "../screens/Pagina6Screen";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pagina1" component={Pagina1Screen} />
      <Tab.Screen name="Pagina2" component={Pagina5Screen} />
      <Tab.Screen name="Pagina3" component={Pagina5} />
    
    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bottom" component={MyTabs} />
      <Stack.Screen name="VentanaExtra" component={Pagina1Screen} />
    </Stack.Navigator>
  );
}

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
