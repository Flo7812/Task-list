import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, Pressable, TextInput  } from 'react-native';
import {TaskContext, TaskContextType} from '../context/taskContext';

const NewTask = () => {

    const [newTask, setnewTask] = useState('');
    const taskContext = useContext(TaskContext);

    if (!taskContext) {
        return null;
    }

    const { setTask } = taskContext;

    const pushTask = (newTask:string): void => {
        setTask( newTask)
        setnewTask('');
    }
    

    return (
        <View style={styles.card}>
            <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row'}}>
                    <TextInput style={styles.textInput} placeholder="New Task" value={newTask} onChangeText={(value)=>{setnewTask( value)}} />
                </View>
            </View>
            <Pressable style={styles.button} onPress={()=> pushTask(newTask)}>
                    <Text style={styles.textButton} >Ajouter</Text>
            </Pressable>
        </View>
    );
};

export default NewTask;

const styles = StyleSheet.create({
    card:{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        width: '80%',
        padding: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
    },
    textButton: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold', 
        textAlign: 'center',
        justifyContent: 'center',
    }
});