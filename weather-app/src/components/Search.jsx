
export default function Search({input, inputHandler, handleSearch}) {
  return (
    <div className="relative w-md h-10">
        <input 
            type="text" 
            className="bg-white/80 w-full h-full rounded-3xl pl-6 font-google font-semibold focus:outline-0 text-gray-700"
            placeholder="Enter City"
            value={input}
            onChange={e => inputHandler(e.target.value)}
        />
        <button
            className="absolute right-0 top-1/2 -translate-y-1/2 mr-0 bg-blue-900/90 hover:bg-blue-900 text-white w-30 h-10 font-google font-semibold rounded-r-3xl cursor-pointer "
            onClick={handleSearch}
        >
            Search
        </button>
    </div>
  )
}
