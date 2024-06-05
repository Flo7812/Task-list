import React, {useContext, useState, useRef} from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import {TaskContext} from '../context/taskContext';

type TaskCardProps = {
    taskNum: number;
    taskContent: string;  
    taskId: string;  

};

const TaskCard = ({taskNum, taskId,  taskContent}:TaskCardProps) => {

    const [overLine, setOverLine] = useState<boolean>(false);
        // const dateHour = new Date().toLocaleTimeString();
        const dateRef= useRef(new Date().toLocaleTimeString());
        const dateRef2 = useRef(new Date().toLocaleTimeString());

    const taskContext = useContext(TaskContext);
    if (!taskContext) {
        return null;
    }
    
    const { deleteTask } = taskContext;

    function deleteThisTask(taskId: string): void {
        deleteTask(taskId);
    }
    
    function overLineTask(): void {
        setOverLine(!overLine);
        dateRef2.current = new Date().toLocaleTimeString();
    }
    
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
            width: '96%',
            marginHorizontal: '2%',
            marginBottom: 10,
            minHeight: 110,
            maxHeight: 150,
    
        },
        button: {
            backgroundColor: 'red',
            paddingHorizontal: 5,
            paddingVertical: 5,
            borderRadius: 10,
            elevation: 5,
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 2},
            shadowRadius: 6,
            shadowOpacity: 0.26,
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: 80,
            
        },
        buttonRayer: {
            backgroundColor: overLine ? 'purple':'green',
            paddingHorizontal: 5,
            paddingVertical: 5,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
        },
        rayer:{
            textDecorationLine: 'line-through',
        },
        textButton: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold', 
            textAlign: 'center',
            justifyContent: 'center',
        }
    });
    


    return (
        <>
        
            <View style={styles.card}>
                
                <View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection:'row'}} >
                        <Text>{dateRef.current}</Text>
                        <Text style={{marginLeft:10, textDecorationLine:'underline', fontSize:16, color:'blue'}}>Task n°{taskNum}</Text>
                    </View>
                    <View >
                        <Text style={[{fontSize:24, fontWeight:'bold', color:'purple'}, overLine && styles.rayer]}>{taskContent}</Text>
                        {overLine && <Text style={{color:'red'}}>Done at {dateRef2.current}</Text>}
                    </View>
                </View>
                <View style={{flexDirection: 'column', height:'100%', justifyContent:'space-around', }}>
                    <Pressable style={styles.buttonRayer} onPress={() => overLineTask()}>
                        {overLine ? <Text style={styles.textButton}>UnDone</Text> : <Text style={styles.textButton}>Done</Text>}
                    </Pressable>
                    <Pressable style={styles.button}  onPress={() => deleteThisTask(taskId)}>
                            <Text style={styles.textButton}>Delete</Text>
                    </Pressable>
                </View>
            </View>
        </>
    );
};

export default TaskCard;

