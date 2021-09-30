import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuid } from 'uuid';
import Item from './Components/Item';
import AddItem from './Components/AddItem';



const App = () => {
  const [itemsData, setItemsData] = useState([])


  const renderItems = ({ item }) => (<Item item={item} deleteItem={deleteItem} itemDone={itemDone} />);

  const deleteItem = id => (storeData(itemsData.filter(item => item.id !== id)));

  const itemDone = id => {
    const data = itemsData.map(item => {
      if (item.id === id) {
        item.picked = !item.picked
      }
      return item;
    });
 
    storeData(data)
  }

  const addItem = text => {
    if (!text) {
      return Alert.alert("Error", "Please enter an Item", [{ text: "OK" }]);
    }
    storeData([{ id: uuid(), name: text, createdAt: new Date().toDateString(), picked: false }, ...itemsData])

  }

  useEffect(() => {
    getData().then(items => setItemsData(items));
  },[itemsData]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Shopping List</Text>
      </View>
      <AddItem addItem={addItem} />
      <FlatList data={itemsData.sort(value => (value.picked ? 1 : -1)
      )} renderItem={renderItems} />
  
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#7f58c2'
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  }
});


const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('myItems', jsonValue)
  } catch (e) {
    // saving error
  }
}

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('myItems')
    return jsonValue != null ? JSON.parse(jsonValue) : 'No Items';
  } catch(e) {
    // error reading value
  }
}

