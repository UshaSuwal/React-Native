import React from "react";
import { ImageDetail } from "../components/ImageDetail";
import { View } from "react-native";


export function ImageScreen(){
    return(
        <View>
        <ImageDetail title={"Forest"} source={require('../assets/forest.jpg')}/>
        <ImageDetail title={"Beach"} source={require('../assets/beach.jpg')}/>
        <ImageDetail title={"Mountain"} source={require('../assets/mountain.jpg')}/>
        </View>
    )
}