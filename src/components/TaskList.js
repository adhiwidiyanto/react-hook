import React, {useContext} from 'react'
import {TaskListContext} from '../context/TaskListContext'
import Task from './Task'

const TaskList = () => {
    const {task} = useContext(TaskListContext)
    return (
        <div>
            {task.length ? (
                <ul>
                    {task.map((task) => {
                        return <Task task={task} key={task.id} />
                    })}
                </ul>
            ) : (
                <div className="w-full text-center text-gray-700 font-semibold"> No Tasks </div>
            )}
            
        </div>
    )
}

export default TaskList