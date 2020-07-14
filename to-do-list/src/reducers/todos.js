import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from '../actions'

const todos = (state = [], action) => {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state, 
          {
            id: action.id,
            text: action.text,
            completed: false
            
          }
        ]
      
      case TOGGLE_TODO:
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ) 
        
      case DELETE_TODO:
        const { index } = action.payload
        return [...state.slice(0, index), ...state.slice(index + 1)]
      
      case EDIT_TODO:
        return state.map((item, index) => {
          if (index !== action.payload.index) {
            return item
          }
          return { ...item, ...action.payload }
        })

      default:
        return state
      
    }
  }
  export default todos
  