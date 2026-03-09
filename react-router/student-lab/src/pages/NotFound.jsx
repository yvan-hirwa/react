import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const arr = [1, 2, 3, 4, 5];
    if (!arr.length) return;
    const id = setInterval(() => {
      setData((prev) => [...prev, arr.shift()]);
    }, 1000);

    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    document.title = "404 Not Found";
  }, []);
  return (
    <div className="w-full h-[70vh] flex flex-col justify-center items-center space-y-5">
      <h1 className="text-7xl font-bold">404 Not Found</h1>
      <p>{data}</p>
      <Link
        to="/"
        className="text-md font-semibold w-28 h-12 bg-gray-300 rounded-lg flex justify-center items-center"
      >
        Back Home
      </Link>
    </div>
  );
}
