import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Go to Gym",
      description: "Go to Gym from 7-9 PM"
    },
    {
      id: 2,
      title: "Read a Book",
      description: "Read 'The Hitchhiker's Guide to the Galaxy'"
    }
  ])

  function addTodo() {
    setTodo([...todo,{
      id: 3,
      title: "Wash Clothes",
      description: "Each and every clothes needed to be washed"
    }])
  }

  return (
    <>
      <div>
        <button onClick={addTodo}>
          Click to add
        </button>
        {todo.map((todo) => (
          <div>
            <h3>{todo.id}</h3>
            <h3>{todo.title}</h3>
            <h3>{todo.description}</h3>
          </div>          
        ))}
      </div> 
    </>
  )
}

export default App
