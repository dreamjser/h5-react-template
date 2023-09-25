import { taskType } from './task_type'

function tasksReducer(list: Array<taskType>, action: any) {
  switch (action.type) {
    case 'add': {
      list.push({
        id: action.id,
        name: action.name,
      })
      break
    }
    case 'delete': {
      return list.filter((t) => t.id !== action.id)
    }
    default: {
      return list
    }
  }
}

export default tasksReducer
