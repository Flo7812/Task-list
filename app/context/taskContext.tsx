

import React from "react";

export interface TaskContextType {
    arrayTask: { id: string; name: string; }[];
    setTask: (newTask: string) => void;
    deleteTask: (taskIndex: string) => void;
}

type Tasks<T, K extends keyof T> =()=>{
    [P in K]: T[P];
}

type Comment = {
    id: string;
    name: string;
    comment: string;
}

export type TaskContextProps = Tasks<TaskContextType, "arrayTask" | "setTask" | "deleteTask">;
export type TaskCommentProps = Tasks<Comment, "id" | "name" | "comment">;

export const TaskContext = React.createContext<TaskContextType | undefined>(undefined);