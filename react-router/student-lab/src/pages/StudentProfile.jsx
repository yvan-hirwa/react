import { useParams } from "react-router-dom";

export default function StudentProfile() {
  const { id } = useParams();

  return (
    <div>
      <h1>Student Profile</h1>

      <p>Students ID : {id}</p>
    </div>
  );
}
