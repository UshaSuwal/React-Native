import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text style={{fontSize: 30, color: 'blue'}}>Counter:</Text>
      <Text style={{fontSize: 30, color: 'blue'}}>{counter}</Text>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
    </View>
  );
}
