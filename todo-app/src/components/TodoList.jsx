import TodoItem from "./TodoItem"

function TodoList({list, handleList}) {
  return (
    <div className="h-80 w-2xl rounded-2xl shadow-lg font-mont text-md font-semibold text-gray-400 p-6 overflow-auto scrollbar-none">
        {list.length===0 
        ?  <div className="h-full w-full flex justify-center items-center"> 
                <p>You've done it.</p> 
            </div>
        
        : list.map(todo => <TodoItem key={todo.name} todo = {todo} handleList = {handleList}/>)
        }
        {/* <TodoItem /> */}
    </div>
  )
}

export default TodoList