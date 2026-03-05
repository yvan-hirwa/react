import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-full h-[70vh] flex flex-col justify-center items-center space-y-5">
      <h1 className="text-4xl font-bold">404 Not Found</h1>
      <Link
        to="/"
        className="text-md font-semibold w-28 h-12 bg-gray-300 rounded-lg flex justify-center items-center"
      >
        Back Home
      </Link>
    </div>
  );
}
