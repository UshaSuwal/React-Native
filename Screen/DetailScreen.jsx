import React from 'react';
import { FlatList, Text, View, Image, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem } from '../reduxtoolkit/Slice';

export function DetailScreen() {
  const addedItem = useSelector(state => state);
  console.log("Not removed",addedItem)
  const dispatch=useDispatch();
    const removeItem=item=>{
        dispatch(removeCartItem(item))
        console.log("After removed",addedItem)
    }


  
  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 10 }}>
      <Image
        source={{ uri: item.thumbnail }}
        style={{ width: 200, height: 200, marginRight: 10 }}
      />
      <View>
        <Text style={{ fontWeight: 'bold', color:"black" }}>{item.title}</Text>
        <Text style={{ color:"black"}}>{item.description}</Text>
        <Text style={{ color:"black"}}>Price: ${item.price}</Text>
        <Text style={{ color:"black"}}>Quantity: {item.quantity}</Text>
        <Button title='Remove' onPress={()=>{removeItem(item)}}/>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ color: 'black' }}>Total: {addedItem.cart.length}</Text>
      <FlatList
        data={addedItem.cart}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      
    </View>
  );
}
