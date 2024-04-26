import React from "react";
import {View , Image, Text} from 'react-native'
export function ImageDetail({title,source}){
    return(
        <View>
            <Image source={source}/>
            <Text style={{color:"black"}}>{title}</Text>
        </View>

    )
}