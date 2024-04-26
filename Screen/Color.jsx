import React, { useState } from "react";
import {View, FlatList, Text, Button } from "react-native";
export function Color(){
    const [color, setColor]=useState([])
    return(
        <View>
            <Button title="Add a color" onPress={()=>{
                setColor([...color,randomRgb()])
            }}/>

            <FlatList
                keyExtractor={item=>item}
                data={color}
                renderItem={({item})=>{
                    return <View style={{width: 100, height:100, backgroundColor: item}}/>
                }}
            />
        </View>
    )
}

function randomRgb(){
    const red=Math.floor(Math.random()*256)
    const green=Math.floor(Math.random()*256)
    const blue=Math.floor(Math.random()*256)
    return `rgb(${red},${green},${blue})`
}