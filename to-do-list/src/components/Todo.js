import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onDelete, onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    <button onClick={onDelete}>x</button>
  </li>
)



Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo