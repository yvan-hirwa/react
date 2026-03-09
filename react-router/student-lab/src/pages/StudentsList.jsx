import { NavLink } from "react-router-dom";

function StudentsList() {
  return (
    <div className="h-full w-xl flex flex-col justify-center items-start space-y-3">
      <NavLink to="1">Student 1</NavLink>
      <NavLink to="2">Student 2</NavLink>
      <NavLink to="3">Student 3</NavLink>
      <NavLink to="4">Student 4</NavLink>
      <NavLink to="5">Student 5</NavLink>
    </div>
  );
}

export default StudentsList;
