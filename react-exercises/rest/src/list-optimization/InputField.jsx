export default function InputField({ searchTerm, setSearchTerm }) {
  // const setInput = useCallback((data) => {
  //   setSearchTerm(data);
  // }, []);
  return (
    <div className="w-md h-16 flex justify-between items-center space-x-2">
      <input
        type="text"
        className="w-sm h-10 border border-gray-300 rounded-xl px-6 py-4 text-gray-400 focus:outline-none"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* <button className="bg-indigo-500 flex justify-center items-center w-sm h-10 rounded-xl focus:ouline-none text-white">
        Search
      </button> */}
    </div>
  );
}
