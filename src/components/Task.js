import React, {useContext} from 'react'
import {TaskListContext} from '../context/TaskListContext'

const Task = ({ task }) => {
    const {removeTask, findItem} = useContext(TaskListContext)
    return (
        <li className="flex justify-between mb-4 group hover:bg-gray-200 p-2 items-center transition ease-in-out duration-1000">
            <span className="block font-semibold">{task.title}</span>
            <div className="text-white">
                <button 
                    onClick={() => findItem(task.id)}
                    className="mr-4 outline-none">
                    <svg className="h-6 w-6 text-gray-500 group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 5H6C4.89543 5 4 5.89543 4 7V18C4 19.1046 4.89543 20 6 20H17C18.1046 20 19 19.1046 19 18V13M17.5858 3.58579C18.3668 2.80474 19.6332 2.80474 20.4142 3.58579C21.1953 4.36683 21.1953 5.63316 20.4142 6.41421L11.8284 15H9L9 12.1716L17.5858 3.58579Z" stroke="#4A5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button 
                    onClick={() => removeTask(task.id)}
                    className="group outline-none">
                    <svg className="h-6 w-6 text-gray-500 group-hover:stroke-red-800" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="#4A5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </li>
    )
}

export default Task
