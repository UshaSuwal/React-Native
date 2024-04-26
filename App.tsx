

import React, { Component } from 'react';

import {Home} from './Screen/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Counter } from './Screen/Counter';
import { List } from './Screen/List';
import { ImageScreen } from './Screen/ImageScreen';
import { Color } from './Screen/Color';



const Stack= createNativeStackNavigator();
function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen name="Color" component={Color} />
      </Stack.Navigator>
  </NavigationContainer>
  )

}




export default App;
