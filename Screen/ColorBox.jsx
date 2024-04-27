import React from "react";
import { Button, Text, View } from "react-native";

export function ColorBox({color, onIncrease, onDecrease}){
    return(
        <View>
            <Text style={{fontSize: 20, color:"blue"}}>{color}</Text>
            <Button title= {`More ${color}`} onPress={()=>onIncrease()} />
            <Button title= {`Less ${color}`} onPress={()=>onDecrease()}/>
        </View>
    )
}