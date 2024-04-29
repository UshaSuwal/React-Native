import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native'


export function Home({navigation}){
return(
<View>
    <Button
        onPress={()=> {navigation.navigate("Counter")}}
        title= "Go to Counter"
    />
    <TouchableOpacity style={{marginVertical: 10}} onPress={()=>{navigation.navigate("List")}}>
        <Text style={{color: "white", backgroundColor: "blue"}}>Go to List</Text>
    </TouchableOpacity>

    <Button
        onPress={()=> {navigation.navigate("ImageScreen")}}
        title= "Go to Image Screen"
    />
    <Button  
        onPress={()=> {navigation.navigate("Color")}}
        title= "Go to Color"
    />
    <Button  
        onPress={()=> {navigation.navigate("ColorScreen")}}
        title= "Go to ColorScreen"
    />
    <Button  
        onPress={()=> {navigation.navigate("TextScreen")}}
        title= "Go to TextScreen"
    />

<Button  
        onPress={()=> {navigation.navigate("ProductScreen")}}
        title= "Go to ProductScreen"
    />
    <Button  
        onPress={()=> {navigation.navigate("Todo")}}
        title= "Go to Todo"
    />
</View>
)}