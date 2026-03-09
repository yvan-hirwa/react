import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="h-16 w-screen flex justify-center items-center space-x-3 text-indigo-500 mb-10">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-indigo-900" : "")}
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/students"
        className={({ isActive }) => (isActive ? "text-indigo-900" : "")}
      >
        Students
      </NavLink>
    </div>
  );
}
