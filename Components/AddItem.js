import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const AddItem = ({addItem}) => {
    const [text, setText] = useState('');

    const addToList = () => {
        addItem(text);
        setText('');
     
    }

    const onChange = text => setText(text)
    return (
        <View>
            <TextInput placeholder='Add Item' style={styles.input} onChangeText={onChange} value={text}/>
            <TouchableOpacity style={styles.btn} onPress={addToList} >
                <Text style={styles.btnText}> <Icon name='plus' size={20} /> Add Item</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        height:60,
        padding:8,
        fontSize:16
    },
    btn:{
        backgroundColor:'#643fa1',
        padding:9,
    },
    btnText:{
        color:'#fff',
        fontSize:20,
        textAlign:'center'
    }
  })
export default AddItem
