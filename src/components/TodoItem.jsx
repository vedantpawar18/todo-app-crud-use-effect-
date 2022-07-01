import React from 'react'

const TodoItem = ({title, id, status, handleDelete, handleToggle}) => {
  return (
    <div>
        <div style={{display:"flex", gap:"1rem", margin:"0.5rem", border:"1px solid tomato"}}>
                    <div>{id}</div>
                    <div>{title}</div>
                    <div>{status ? "Done": "Not DOne"}</div>
                    <button onClick={() =>handleDelete(id)}>Delete</button>
                    <button onClick={() =>handleToggle(id)}>Toggle</button>
                </div>
    </div>
  )
}

export default TodoItem