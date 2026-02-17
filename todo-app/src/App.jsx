import { useState } from "react"
import Title from "./components/Title"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import ConfirmBox from "./components/ConfirmBox"

function App() {

  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])
  const [todoToDelete, setTodoToDelete] = useState('')
  const [isConfirmOpen, setIsConfirmOpen ] = useState(false)

  const handleTodo = e => setTodo(e.target.value)

  function handleSubmit(){
    if(!todo.trim())return
    if(!todoList.some(item => (item.name === todo))){
      setTodoList(prev => [...prev, {name: todo, complete: false}])
      setTodo('')
    } 
  }
  function handleCheck(e){
    const {name, checked} = e.target

    if(checked){
      setTodoList(prev => prev.map(item => item.name===name? {name: name, complete:true} : item))
    }
    else{
      setTodoList(prev => prev.map(item => item.name===name? {name: name, complete:false} : item))
    }
    
  }

  function handleDelete(e){
    const {name} = e.target

    setTodoToDelete(name)
    setIsConfirmOpen(true)
  }
  function confirm(){
    const newTodos = todoList.filter(item => item.name !== todoToDelete)
    setTodoList(newTodos)
    setTodoToDelete('')
    setIsConfirmOpen(false)
  }
  function discard(){
    setTodoToDelete('')
    setIsConfirmOpen(false)
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-[90vh] gap-5">
      <Title />
      <TodoInput todo={todo} handleTodo = {handleTodo} submit = {handleSubmit}/>
      <TodoList list = {todoList} handleCheck = {handleCheck} handleDelete ={handleDelete}/>
      {isConfirmOpen ? <ConfirmBox confirm = {confirm} discard = {discard} todo = {todoToDelete}/> : ''}
    </div>
  )
}

export default App
