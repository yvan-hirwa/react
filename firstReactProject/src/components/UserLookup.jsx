import React, { useState, useEffect } from "react";

function UserLookUp() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("idle");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  useEffect(() => {
    const q = query.trim();

    // 1) Empty -> reset to idle
    if (!q) {
      setStatus("idle");
      setUser(null);
      setError(null);
      return;
    }

    // 2) Strict validation: digits only
    if (!/^\d+$/.test(q)) {
      setStatus("error");
      setError("Input must be a number between 1 and 10");
      setUser(null);
      return;
    }

    const id = Number(q);
    if (id < 1 || id > 10) {
      setStatus("error");
      setError("Input must be a number between 1 and 10");
      setUser(null);
      return;
    }

    // 3) Fetch with cancellation
    const controller = new AbortController();

    setStatus("loading");
    setUser(null);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setStatus("success");
      })
      .catch((err) => {
        // Ignore abort errors (they happen when query changes)
        if (err.name === "AbortError") return;
        setError(err.message);
        setStatus("error");
      });

    // cleanup runs before next effect + on unmount
    return () => controller.abort();
  }, [query]);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter user id (1-10)"
          value={query}
          onChange={handleChange}
        />
      </div>

      <div>
        {status === "idle"
          ? "Type an id to search"
          : status === "loading"
          ? "Loading ..."
          : status === "error"
          ? error
          : status === "success"
          ? user && (
              <div>
                <p>{user.name}</p>
                <p>{user.email}</p>
              </div>
            )
          : null}
      </div>
    </div>
  );
}

export default UserLookUp;
