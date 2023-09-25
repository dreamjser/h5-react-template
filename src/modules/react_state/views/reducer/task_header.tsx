import React, { useState } from 'react'

type addProps = {
  onAdd: (name: string) => void
}

export default function TaskList({ onAdd }: addProps) {
  const [taskName, setTaskName] = useState('')

  function addTask() {
    if (!taskName) {
      return
    }

    onAdd(taskName)
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
