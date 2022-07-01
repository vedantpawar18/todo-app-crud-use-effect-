import React, { useEffect, useState } from 'react'
import TodoList from './TodoList';

const Todo = () => {
    const [data, setData] =useState ([]);
    const [page, setPage] = useState (1);
    const [loading, setLoading] = useState(false);

    const getTodos = async (p=1) => {
        try {
            setLoading(true);
            let data= await fetch (`https://jsonplaceholder.typicode.com/todos?_page=${p}&_limit=10`)
            data = await data.json();
            console.log(data);
            setData(data);
            setLoading(false);
        }
        catch (err){
            setLoading(false);
            console.log(err)
        }
    }

    useEffect ( () => {
        getTodos(page);
    }, [page]);

    const handleDelete = (id) =>{
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
    };

    const handleToggle = (id) => {
        const updatedData = data.map((item) =>
          item.id === id
            ? {
                ...item,
                status: !item.status
              }
            : item
        );
        setData(updatedData);
      };

  return (
    <div>
        <h1>Todo App</h1>
        <button onClick={getTodos}>Fetch</button>
        <div>
            {loading && <h3>Loading...</h3>}
        </div>
        <div>
            {
                data.map(todo =>
                    <TodoList key={todo.id} id={todo.id} title={todo.title} status={todo.status} handleDelete={handleDelete} handleToggle={handleToggle}/> 
                    )
            }
           
        </div>

        <div>
            <button disabled={page===1} onClick={() => setPage(page-1)}>Prev</button>
            <span style={{padding:"1rem"}}>{page}</span>
            <button onClick={() => setPage(page+1)}>Next</button>
        </div>
    </div>
  )
}

export default Todo