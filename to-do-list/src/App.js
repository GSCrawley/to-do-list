import React from 'react'
import Footer from '../src/components/Footer'
import AddTodo from '../src/containers/AddTodo'
import VisibleTodoList from '../src/containers/VisibleTodoList'


const App = () => (
 
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App