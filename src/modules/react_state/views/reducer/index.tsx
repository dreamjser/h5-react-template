import React from 'react'
import { useImmerReducer } from 'use-immer'
import tasksReducer from './task_reducer'
import TaskHeader from './task_header'
import TaskList from './task_list'

const initList = [
  {
    id: 0,
    name: '7点起床',
  },
  {
    id: 1,
    name: '8点吃早饭',
  },
  {
    id: 2,
    name: '9点上班',
  },
]

const View = () => {
  const [taskList] = useImmerReducer(tasksReducer, initList)

  const addTask = () => {}

  const onDelete = () => {}

  const onSelect = () => {}

  return (
    <>
      <TaskHeader list={taskList} onAdd={addTask} />
      <TaskList list={taskList} onDeleted={onDelete} onSelected={onSelect} />
    </>
  )
}

export default View
