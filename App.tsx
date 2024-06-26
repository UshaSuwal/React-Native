

import React, { Component } from 'react';

import {Home} from './Screen/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Counter } from './Screen/Counter';
import { List } from './Screen/List';
import { ImageScreen } from './Screen/ImageScreen';
import { Color } from './Screen/Color';
import { ColorScreen } from './Screen/ColorScreen';
import { TextScreen } from './Screen/TextScreen';
import { ProductScreen } from './Screen/ProductScreen';
import { Todo } from './Screen/Todo';
import { Provider } from 'react-redux';
import MyStore from './reduxtoolkit/MyStore';
import { CartScreen} from './Screen/CartScreen';
import { DetailScreen } from './Screen/DetailScreen';



const Stack= createNativeStackNavigator();
function App() {

  return (
    <Provider store={MyStore}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen name="Color" component={Color} />
        <Stack.Screen name="ColorScreen" component={ColorScreen} />
        <Stack.Screen name="TextScreen" component={TextScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="Todo" component={Todo} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  )

}




export default App;
