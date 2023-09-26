import React, { useState } from 'react'
import { useTasksDispatchContext, initList } from './task_context'

let length = initList.length

export default function TaskList() {
  const [taskName, setTaskName] = useState('')
  const dispatch = useTasksDispatchContext()

  function addTask() {
    if (!taskName) {
      return
    }

    dispatch({
      type: 'add',
      id: length++,
      name: taskName,
    })
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setTaskName(e.target.value)
        }}
        placeholder="输入任务"
      />
      <button onClick={addTask}>添加</button>
    </div>
  )
}
