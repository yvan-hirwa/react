import TodoItem from "./TodoItem"

function TodoList({list, handleCheck, handleDelete}) {
  const activeTodos = list.filter(item => !item.complete)
  const completeTodos = list.filter(item => item.complete)
  const renderList = [...activeTodos, ...completeTodos]

  return (
    <div className="h-80 w-2xl rounded-2xl shadow-lg font-mont text-md font-semibold text-gray-400 p-6 overflow-auto scrollbar-none">
        {list.length===0 
        ?  <div className="h-full w-full flex justify-center items-center"> 
                <p>You've done it.</p> 
            </div>
        
        : renderList.map(todo => <TodoItem key={todo.name} todo = {todo} handleCheck = {handleCheck} handleDelete={handleDelete}/>)
        }
        {/* <TodoItem /> */}
    </div>
  )
}

export default TodoList