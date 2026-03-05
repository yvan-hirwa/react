import { Outlet, Link } from "react-router-dom";

function StudentsLayout() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center space-y-10">
      <div className="w-full h-full flex flex-col justify-center items-center space-y-3">
        <h1 className="text-xl font-semibold">Students Section</h1>
        <p className="text-md text-indigo-500">
          <Link to=".">Students List </Link>/<Link to="new"> New Student</Link>
        </p>
      </div>

      <Outlet />
    </div>
  );
}

export default StudentsLayout;
