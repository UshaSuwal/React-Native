import React from "react";
import { useState } from "react";
import {View } from "react-native";
import { ColorBox } from "./ColorBox";


const value=15
export function ColorScreen(){
    
    const [red,setRed]=useState(0)
    const [green,setGreen]=useState(0)
    const [blue,setBlue]=useState(0)

    const setColor=(color, increment)=>{
        switch(color){
            case('red'):
                red + increment > 255 || red + increment < 0 ? null :setRed(red+increment);
                return;
            case('green'):
                green + increment > 255 || green+ increment < 0 ? null :setGreen(green+increment);
                return;
            case('blue'):
                blue + increment > 255 || blue+ increment < 0 ? null :setBlue(blue+increment);
                return;
            default:
                return;
        }
    }
    return(
        <View>
            <ColorBox color={'Red'} onIncrease={()=>{setColor('red',value)}} onDecrease={()=>{setColor('red', -1*value)}}/>
            <ColorBox color={'Green'} onIncrease={()=>{setColor('green',value)}} onDecrease={()=>{setColor('green', -1*value)}}/>
            <ColorBox color={'Blue'} onIncrease={()=>{setColor('blue',value)}} onDecrease={()=>{setColor('blue', -1*value)}}/>

            <View style={{width:100, height:100, backgroundColor:`rgb(${red},${green},${blue})`}}/> 
        </View>
    )
}

