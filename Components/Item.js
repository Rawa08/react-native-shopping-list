import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const Item = ({item, deleteItem, itemDone}) => {
    return (
        <TouchableOpacity style={styles.listItem} onPress={() => itemDone(item.id)}>
        <View style={styles.listItemView}>
            <Text style={item.picked ? styles.listItemTextDone : styles.listItemText}>
                {item.name}
            </Text>
            <Icon name='remove' size={20} color='firebrick' onPress={() => deleteItem(item.id)} />
        </View>
        <Text style={styles.listItemTextAdded}>
       Added: {item.createdAt}
    </Text>
    </TouchableOpacity>
    )
}

export default Item


const styles = StyleSheet.create({

    listItem: {
      padding:15,
      backgroundColor:'#f8f8f8',
      borderBottomWidth:1,
      borderColor:'#eee'
    },
    listItemView:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText: {
        fontSize:18,
    },
    listItemTextDone:{
        fontSize:18,
        textDecorationLine:'line-through',
        backgroundColor:'green'
    },
    listItemTextAdded: {
      fontSize:10,
  }
  })
  