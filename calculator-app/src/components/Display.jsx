

function Display({display}) {
  return (
    <input 
        type="text" 
        className="text-right p-2 w-full h-[30%] focus:outline-0 decoration-0 caret-transparent text-4xl font-bold text-gray-700 bg-gray-50 rounded-t-2xl"
        value={display}
        autoFocus
    />
  )
}

export default Display