import React from 'react'
import TaskList from './TaskList'
import TaskListContextProvider from '../context/TaskListContext'
import TaskForm from './TaskForm'
import '../assets/main.css'

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="bg-gray-300 h-screen flex flex-col justify-center items-center font-openSans">
        <div className="w-1/3 mx-auto bg-white p-8 shadow text-gray-700 leading-snug">
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </TaskListContextProvider>
  )
}

export default App;
