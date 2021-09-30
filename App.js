import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Item from './Components/Item';
import AddItem from './Components/AddItem';
import { v4 as uuid } from 'uuid';


const App = () => {
  const renderItems = ({ item }) => ( <Item item={item} deleteItem={deleteItem} itemDone={itemDone} /> );

  const deleteItem = id => (setFakeData(fakeData.filter(item => item.id !== id)));

  const itemDone = id => {
    const data = fakeData.map(item => {
      if(item.id === id){
        item.picked = !item.picked
       }
       return item;
    });


    setFakeData(data)
 
  }

  const addItem = text => {
    if(!text){

      Alert.alert(
        "Error",
        "Please enter an Item",
        [
         { text: "OK" }
        ]
      );

    }
    else{
      setFakeData(items => ([{id:uuid(), name:text, createdAt:new Date().toDateString()},...items]));
    }
    
  }

  const [fakeData, setFakeData] = useState([{id:uuid(), name:'Item 1', createdAt:new Date().toDateString(), picked:false},{id:uuid(), name:'Item 2',
 createdAt:new Date().toDateString(),picked:true},{id:uuid(), name:'Item 3', createdAt:new Date().toDateString(),picked:false}]);

  return (
    <View style={styles.mainContainer}>
    <View style={styles.header}>
      <Text style={styles.headerText}>My Shopping List</Text>
    </View>
    <AddItem addItem={addItem} />
    <FlatList style={styles.listContainer} data={fakeData} renderItem={renderItems} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  meainContainer:{
    flex:1
  },
  header:{
    justifyContent:'center',
    alignItems: 'center',
    height:50,
    backgroundColor:'lightblue'
  },
  headerText: {
    color:'#fff',
    fontWeight:'bold',
    fontSize:20
  }
})





