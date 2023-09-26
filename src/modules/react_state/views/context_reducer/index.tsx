import React from 'react'
import { TaskProvider } from './task_context'
import TaskHeader from './task_header'
import TaskList from './task_list'

const View = () => {
  return (
    <TaskProvider>
      <TaskHeader />
      <TaskList />
    </TaskProvider>
  )
}

export default View
