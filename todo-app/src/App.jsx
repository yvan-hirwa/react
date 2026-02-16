import { useState } from "react"
import Title from "./components/Title"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleTodo = e => setTodo(e.target.value)

  function handleSubmit(){
    if(!todo.trim())return
    if(!todoList.some(item => item.name === todo)){
      setTodoList(prev => [...prev, {name: todo, complete: false}])
      setTodo('')
    } 
  }
  function handleList(e){
    const {type, name, checked} = e.target
    if(type ==='checkbox' && checked){
      const item = todoList.find(todo => todo.name === name)
      
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-[90vh] gap-5">
      <Title />
      <TodoInput todo={todo} handleTodo = {handleTodo} submit = {handleSubmit}/>
      <TodoList list = {todoList} handleList = {handleList}/>
    </div>
  )
}

export default App
