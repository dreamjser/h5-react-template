import React from 'react'
import { taskType } from './task_type'

type ListProps = {
  list: Array<taskType>
  onSelected: (item: taskType) => void
  onDeleted: (item: taskType) => void
}

export default function TaskList({ list, onSelected, onDeleted }: ListProps) {
  return (
    <>
      {list.map((item: taskType) => {
        return (
          <>
            <input
              type="checkbox"
              onChange={() => {
                onSelected(item)
              }}
            />
            <button
              onClick={() => {
                onDeleted(item)
              }}
            >
              删除
            </button>
          </>
        )
      })}
    </>
  )
}
