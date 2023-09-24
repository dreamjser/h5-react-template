import React, { useState } from 'react'
import { taskType } from './task_type'

type addProps = {
  list: Array<taskType>
  onAdd: (item: taskType) => void
}

export default function TaskList({ list, onAdd }: addProps) {
  const [taskName, setTaskName] = useState('')

  function addTask() {
    if (!taskName) {
      return
    }

    onAdd({
      id: list.length,
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
