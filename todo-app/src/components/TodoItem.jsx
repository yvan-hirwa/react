
function TodoItem({todo, handleCheck, handleDelete}) {
  return (
    <div className="flex justify-evenly items- w-full h-10 border-b border-gray-100">
        <div className="w-37.5 flex justify-start items-center">
            <input type="checkbox" name={todo.name} id="" className="w-6 h-6 cursor-pointer accent-green-500 border-0" onClick={handleCheck} />
        </div>

        <div className={"w-75 flex justify-start items-center"+ (todo.complete ? " line-through":"")}>
            {todo.name}
        </div>
        <div className="w-37.5 flex justify-end items-center">
            <button type="reset" name={todo.name} className="text-red-500 cursor-pointer" onClick={handleDelete}>delete</button>
        </div> 
    </div>
  )
}

export default TodoItem