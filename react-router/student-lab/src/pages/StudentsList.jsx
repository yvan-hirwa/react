import { Link } from "react-router-dom";

function StudentsList() {
  return (
    <div className="h-full w-xl flex flex-col justify-center items-start space-y-3">
      <Link to="1">Student 1</Link>
      <Link to="2">Student 2</Link>
      <Link to="3">Student 3</Link>
      <Link to="4">Student 4</Link>
      <Link to="5">Student 5</Link>
    </div>
  );
}

export default StudentsList;
