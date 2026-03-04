import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="h-16 w-screen flex justify-center items-center space-x-3 text-indigo-500">
      <Link to="/">Home</Link>
      <Link to="/students">Students</Link>
    </div>
  );
}
