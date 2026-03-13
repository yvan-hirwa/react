import { useUsers } from "../hooks/useUsers";

function Question4() {
  const { users, loading, error } = useUsers();

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {loading ? (
        <div className="font-bold text-gray-500">Loading ...</div>
      ) : error ? (
        <div className="font-bold text-gray-500">{error}</div>
      ) : users.length < 1 ? (
        <div className="font-bold text-gray-500">No users</div>
      ) : (
        <ul className="font-bold text-gray-500 w-xl h-full flex flex-col justify-center items-start space-y-2">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex justify-evenly items-start w-full"
            >
              <div>Name: {user.name}</div> <div>Email: {user.email}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Question4;
