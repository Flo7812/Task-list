import { Stack } from "expo-router";
import React, {useState} from "react";
import {TaskContext, TaskContextType} from "./context/taskContext";

export default function RootLayout() {
  const [arrayTask, setArrayTask] = useState<{id: string, name: string}[]>([]);

  const setTask = (newTask: string) => {
    setArrayTask(arrayTask => [...arrayTask, { id: Date.now().toString(), name: newTask }]);
  };

  const deleteTask = (taskId: string) => {
    console.log("deleteTask", taskId);
    console.log("arrayTask", arrayTask);
    
    
    setArrayTask(arrayTask => arrayTask.filter(task => task.id !== taskId));
  };
  const taskContextValue: TaskContextType = { arrayTask, setTask, deleteTask }
  
  return (
      <TaskContext.Provider value={taskContextValue}>
        <Stack
        screenOptions={{
          title: "Task Manager",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }
        }
        >
          <Stack.Screen name="index" />
        </Stack>
      </TaskContext.Provider>

  );
}
