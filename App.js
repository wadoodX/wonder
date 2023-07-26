import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Communities from "./src/screens/Communities"
import Partners from "./src/screens/Partners"
import Home from "./src/screens/Home"
import AiBot from "./src/screens/AiBot"

const Tab = createBottomTabNavigator()
const App = () => {
  return (
      <NavigationContainer>  
      <Tab.Navigator>
      <Tab.Screen name={'Communities'} component={Communities}/>
      <Tab.Screen name={'AiBot'} component={AiBot}/>
      <Tab.Screen name={'Home'} component={Home}/>
      <Tab.Screen name={'Partners'} component={Partners}/>
      </Tab.Navigator>
      </NavigationContainer>
    
  );
}
export default App
