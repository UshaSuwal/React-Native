import { useState } from "react"
import { Text, TextInput, View } from "react-native"
export function TextScreen(){
    const [name,setName]=useState("")
    return(
        <View>
            <Text style={{color:"black"}}>Enter Name:</Text>
            <TextInput
            style={{borderColor:"black",width:300, color:"black", borderWidth:1}}
            value={name}
            onChangeText={(newValue)=>{setName(newValue)}}
            />
            <Text style={{color:"black"}}>My name is: {name}</Text>
        </View>
    )
}