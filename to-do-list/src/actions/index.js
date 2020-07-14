export const ADD_TODO = "ADD_TODO"
export const EDIT_TODO = "EDIT_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"

let nextTodoId = 0
export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

export const deleteTodo = (index) => {
  return {
    type: DELETE_TODO,
    payload: { index }
  }
}

export const editTodo = (index, name) => {
  return {
    type: EDIT_TODO,
    payload: { index, name }
  }
}

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id 
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}