import { useState } from "react";
import { userContext } from "./context";

export default function UserProvider({ children }: React.PropsWithChildren) {
  const [users, setUsers] = useState(["user1", "user2", "user3"]);

  function addUser(user: string) {
    if (user.length > 1) setUsers((prev) => [...prev, user]);
  }

  return (
    <userContext.Provider value={{ users, addUser }}>
      {children}
    </userContext.Provider>
  );
}
