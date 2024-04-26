import React from 'react';
import {Text, View, FlatList} from 'react-native';


export function List(){
const friends=[
{name: 'Friend1', age: 20},
{name: 'Friend2', age: 20},
{name: 'Friend3', age: 20},
{name: 'Friend4', age: 20},
{name: 'Friend5', age: 20},
{name: 'Friend6', age: 20},
{name: 'Friend7', age: 20},
{name: 'Friend8', age: 20},
{name: 'Friend9', age: 20}
]
return(
    <View>
    <Text style={{fontSize: 30 , color: 'red'}}>This is List </Text>
    <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(f)=>f.name}
    data={friends}
    renderItem={({item})=>{
    return <Text style={{fontSize: 25 , color: 'blue', marginHorizontal: 30}}>{item.name} - Age: {item.age}</Text>
    }}
    />
    </View>

)}