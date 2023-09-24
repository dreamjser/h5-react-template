import { taskType } from './task_type'

function tasksReducer(draft: Array<taskType>, action: any) {
  switch (action.type) {
    case 'add': {
      draft.push({
        id: action.id,
        name: action.name,
      })
      break
    }
    case 'delete': {
      return draft.filter((t) => t.id !== action.id)
    }
    default: {
      return []
    }
  }
}

export default tasksReducer
