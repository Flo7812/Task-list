import React, {useState, useContext, useEffect} from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import NewTask from "./components/newTask";
import TaskCard from "./components/taskCard";
import {TaskContext, TaskContextType} from "./context/taskContext";


export default function Index() {

  const [date, setDate] = useState<string>("");

  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    return null;
  }
  const { arrayTask } = taskContext;

  function dateToday() {
    const dateDay = new Date().toDateString();
    setDate(dateDay);
  }

  useEffect(() => {
    dateToday();
  },[]);



  return (
    <View style={styles.container}>
      <Text>{date}</Text>
      <NewTask />
      <FlatList
        data={arrayTask}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => <TaskCard  taskNum={index + 1} taskId={item.id} taskContent={item.name} />}
      />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
}); 
