import React, {useContext, useState, useEffect} from 'react'
import {TaskListContext} from '../context/TaskListContext'

const TaskForm = () => {
    const { addTask, clearList, editItem, editTask } = useContext(TaskListContext)

    const [title, setTitle] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if(!editItem) {
            addTask(title)
            setTitle("")
        } else {
            editTask(title, editItem.id)
        }
    }

    const handleChange = e => {
        setTitle(e.target.value)
    }

    useEffect(() => {
        if(editItem) {
            setTitle(editItem.title)
            console.log(editItem)
        } else {
            setTitle("")
        }
    }, [editItem])

    return (
        <form onSubmit={handleSubmit} className="w-full p-2 mb-8">
            <input
                onChange={handleChange}
                value={title}
                type="text"
                placeholder="Add text..."
                className="w-full text-gray-500 font-semibold bg-gray-200 focus:outline-none p-2 mb-4 focus:border focus:border-gray-800"
                required
            />
            <div className="w-auto">
                <button className="text-white bg-blue-700 hover:bg-blue-800 py-2 px-4 font-medium text-sm rounded shadow-sm mr-2">
                   {editItem ? 'Edit Task' : 'Add Task'}
                </button>
                <button onClick={clearList} className="text-blue-700 font-bold py-2 px-4 font-medium text-sm">
                    Clear Task
                </button>
            </div>
        </form>
    )
}

export default TaskForm
