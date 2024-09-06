import React, { createContext, useEffect, useState } from "react";
import { ICreateTask, ITask } from "../interface/task.interface";

interface ChildrenProps  {
    children: React.ReactNode
}

export interface ITaskContext {
    tasks: ITask[] | undefined;
    createTask: (formData: ICreateTask) => void;
    deleteTask: (id: string) => void;
}


export const TaskContext = createContext<ITaskContext | undefined>(undefined)

export const TaskProvider: React.FC<ChildrenProps> = ({children}) => {
    
    const [tasks, setTasks] = useState(undefined)

    async function getTasks() {
        await fetch('http://localhost:3000/tasks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(result => setTasks(result))
        .catch(error => {
            console.error('error', error)
        })
    }
    useEffect(() => {
        getTasks()
    }, [])
    

    const createTask = async (formData: ICreateTask) => {
        await fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .catch(error => {
            console.error('error', error);
        })
        getTasks()
    }

    const deleteTask = async (id: string) => {
            await fetch(`${'http://localhost:3000/tasks'}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if(response.ok){
                getTasks()
            }
        })
        .catch(error => {
            console.error('Error', error);
            
        })
    }


    return (
        <TaskContext.Provider
            value={{
                tasks,
                createTask,
                deleteTask
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}