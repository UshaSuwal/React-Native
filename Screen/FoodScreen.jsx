import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import useSearch from '../hooks/useSearch';

export function FoodScreen() {
  const [results, searchApi, errorMessage] = useSearch();
  const [term, setTerm] = useState('');

  return (
    <View>
      <SearchBar
        term={term}
        onNewChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text style={{ color: "black" }}>We have found {results.length} results</Text>
      <View>
        {results.map(product => (
          <Text key={product.id} style={{color:"black"}}>{product.brand}</Text>
        ))}
      </View>
    </View>
  );
}
