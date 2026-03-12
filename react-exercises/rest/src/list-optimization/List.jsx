export default function List({ filteredItems }) {
  return (
    <div className="w-full h-125 flex justify-center items-center ">
      {filteredItems.length < 1 ? (
        "Empty List"
      ) : (
        <ul className="w-xl h-125 text-black">
          {filteredItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
