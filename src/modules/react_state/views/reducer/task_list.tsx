import React from 'react'
import { taskType } from './task_type'

type ListProps = {
  list: Array<taskType>
  onSelected: (id: number) => void
  onDeleted: (id: number) => void
}

export default function TaskList({ list, onSelected, onDeleted }: ListProps) {
  return (
    <ul>
      {list.map((item: taskType) => {
        return (
          <li key={item.id}>
            <input
              type="checkbox"
              onChange={() => {
                onSelected(item.id)
              }}
            />
            {item.name}
            <button
              onClick={() => {
                onDeleted(item.id)
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
