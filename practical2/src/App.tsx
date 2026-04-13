// Practical session
// Context API: User Management

import { useState } from "react";
import { useUser } from "./context/useUser";

// Build a simple global user state.

// ---

// Requirements
// Create UserContext
// Store:
// list of users (at least 3)
// Provide:
// users
// addUser()

// ---

// In your component:
// Display users
// Add a new user

// ---

// Goal of the Exercise
// Global state
// Context API basics

function App() {
  const { users, addUser } = useUser();
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addUser(input)}>AddUser</button>

      <div>
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
