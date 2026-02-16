
function TodoItem({todo, handleList}) {
  return (
    <div className="flex justify-evenly items- w-full h-10 border-b border-gray-100" onClick={handleList}>
        <div className="w-37.5 flex justify-start items-center">
            <input type="checkbox" name={todo.name} id="" className="w-6 h-6 cursor-pointer accent-green-500 border-0" />
        </div>

        <div className={"w-75 flex justify-start items-center"}>
            {todo.name}
        </div>
        <div className="w-37.5 flex justify-end items-center">
            <button type="delete" >delete</button>
        </div> 
    </div>
  )
}

export default TodoItem