import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({title, id, status, handleDelete,  handleToggle}) => {
  return (
    <div>
      <TodoItem  id={id} title={title} status={status} handleToggle={handleToggle} handleDelete={handleDelete}/>
    </div>
  )
}

export default TodoList