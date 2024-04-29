import { Text, View } from "react-native";
import { Header } from "../components/Header"
import { s } from "./Todo.style";


const TODO_LIST = [
    { id: 1, title: "Walk the dog", isCompleted: true },
    { id: 2, title: "Go to the dentist", isCompleted: false },
    { id: 3, title: "Learn React Native", isCompleted: false },
  ];
export function Todo(){

    
    return(
        <>
      
        <View style={s.app}>
          <View style={s.header}>
            <Header />
          </View>
          <View style={s.body}>
            <Text>Body</Text>
          </View>
        </View>
      
      <View style={s.footer}>
        <Text>Footer</Text>
      </View>
    </>
    )
}