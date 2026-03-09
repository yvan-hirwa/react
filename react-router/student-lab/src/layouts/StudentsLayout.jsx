import { Outlet, NavLink } from "react-router-dom";

function StudentsLayout() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center space-y-10">
      <div className="w-full h-full flex flex-col justify-center items-center space-y-3">
        <h1 className="text-xl font-semibold">Students Section</h1>
        <p className="text-md text-indigo-500">
          <NavLink
            to="."
            className={({ isActive }) => (isActive ? "text-indigo-900" : "")}
            end
          >
            Students List{" "}
          </NavLink>
          /
          <NavLink
            to="new"
            className={({ isActive }) => (isActive ? "text-indigo-900" : "")}
          >
            {" "}
            New Student
          </NavLink>
        </p>
      </div>

      <Outlet />
    </div>
  );
}

export default StudentsLayout;
