import React from 'react'
import { useTasksContext, useTasksDispatchContext } from './task_context'
import { taskType } from '../reducer/task_type'

export default function TaskList() {
  const taskList = useTasksContext()
  const dispatch = useTasksDispatchContext()

  return (
    <ul>
      {taskList.map((item: taskType) => {
        return (
          <li key={item.id}>
            <input type="checkbox" />
            {item.name}
            <button
              onClick={() => {
                dispatch({
                  type: 'delete',
                  id: item.id,
                })
              }}
            >
              删除
            </button>
          </li>
        )
      })}
    </ul>
  )
}
