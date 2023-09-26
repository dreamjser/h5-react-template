import React, { createContext, useContext, ReactNode } from 'react'
import { useImmerReducer } from 'use-immer'
import tasksReducer from '../reducer/task_reducer'

const TasksContext = createContext(null as any)
const TasksDispatchContext = createContext(null as any)

export function useTasksContext() {
  return useContext(TasksContext)
}

export function useTasksDispatchContext() {
  return useContext(TasksDispatchContext)
}

export const initList = [
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

type Props = {
  children: ReactNode
}

export function TaskProvider({ children }: Props) {
  const [TaskList, dispatch] = useImmerReducer(tasksReducer, initList)

  return (
    <TasksContext.Provider value={TaskList}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}
