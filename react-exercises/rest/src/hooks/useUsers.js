import { useState, useEffect } from "react";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setError(null);
    async function fetchUsers() {
      try {
        const userRes = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal },
        );
        if (!userRes.ok) throw new Error("Failed to fetch");

        const userObj = await userRes.json();

        setUsers(userObj);
      } catch (error) {
        if (error.name !== "AbortError") setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();

    return () => controller.abort();
  }, []);

  return { users, loading, error };
}
