import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';
import SearchBar from '../components/SearchBar';
import useSearch from '../hooks/useSearch';
import { useSelector, useDispatch } from 'react-redux';
import { addCartItem } from '../reduxtoolkit/Slice';

export function ProductScreen({navigation}) {
  const [results, searchApi, errorMessage] = useSearch();
  const [term, setTerm] = useState('');
  const [total, setTotal]=useState(0);
  const dispatch = useDispatch();
   

  const addItem = (item) => {
    if (item){
    dispatch(addCartItem(item));
    setTotal(total+1)
    }
  }

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onNewChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text style={{ color: "black", fontSize: 30 }}>Total: {total}</Text>
      <Button title='Cart' style={{color:"black"}} onPress={()=> {navigation.navigate("DetailScreen")}}/>
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      <ScrollView>
        <View style={styles.resultsContainer}>
          {results.map(product => (
            <TouchableOpacity key={product.id} style={styles.productContainer}>
              <Image source={{ uri: product.thumbnail }} style={styles.thumbnail} />
              <Text style={styles.productBrand}>{product.brand}</Text>
              <Text style={styles.productTitle}>{product.title}</Text>
              <Text style={styles.productPrice}>${product.price}</Text>
              <Button title='cart' onPress={() => { addItem(product) }} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  resultsContainer: {
    top: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productContainer: {
    backgroundColor: '#fff',
    width: '48%',
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
  },
  thumbnail: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  productBrand: {
    marginVertical: 5,
    marginHorizontal: 10,
    color: '#333',
    fontSize: 16,
  },
  productTitle: {
    marginHorizontal: 10,
    marginBottom: 5,
    color: '#666',
  },
  productPrice: {
    marginHorizontal: 10,
    marginBottom: 10,
    color: '#009688',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
