
function TodoInput({todo, handleTodo, submit}) {

    function handleKey(e){
        if(e.key ==='Enter'){
            submit()
        }
    }
  return (
    <div className="relative w-2xl">
        <input
            type="text"
            placeholder="Add Todo ..."
            className="w-full border-gray-200 p-4 pr-16 rounded-4xl shadow-md font-mont font-bold text-gray-400 focus:outline-0"
            value={todo}
            onChange={handleTodo}
            onKeyDown={handleKey}
        />

        <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded-3xl font-mont font-bold cursor-pointer"
            onClick={submit}
        >
            Add
        </button>
    </div>

  )
}

export default TodoInput