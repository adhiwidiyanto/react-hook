import React, { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const TaskListContext = createContext()

const TaskListContextProvider = props => {

    const initialState = JSON.parse(localStorage.getItem('task')) || []

    const [task, setTask] = useState(initialState)

    const [editItem, setEditItem] = useState(null)

    useEffect(() => {
        localStorage.setItem('task',JSON.stringify((task)),[task])
    })

    const addTask = (title) => {
        setTask([...task, {title, id:uuidv4()}])
    }

    const removeTask = id => {
        setTask(task.filter(task=>task.id !== id))
    }

    const clearList = () => {
        setTask([])
    }

    const findItem = id => {
        const item = task.find(task => task.id === id)
        setEditItem(item)
    }

    const editTask = (title, id) => {
        const newTask = task.map(task => (task.id === id ? {title,id} : task))

        setTask(newTask)
        setEditItem(null)
    }

    return(
        <TaskListContext.Provider value={{task, addTask, removeTask, clearList, findItem, editTask, editItem}}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider