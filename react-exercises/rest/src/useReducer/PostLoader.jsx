import { useReducer } from "react";

export default function PostLoader() {
  function reducer(state, action) {
    switch (action.type) {
      case "FETCH_START":
        return { ...state, loading: true, error: null };
      case "FETCH_SUCCESS":
        return { posts: action.payload, loading: false, error: null };
      case "FETCH_ERROR":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    loading: false,
    error: null,
  });

  const loadPosts = async () => {
    dispatch({ type: "FETCH_START" });
    try {
      const post = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!post.ok) throw new Error("Posts didn't fetch");
      const data = await post.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };

  return (
    <div>
      <button onClick={loadPosts} disabled={state.loading}>
        Load Posts
      </button>

      <div>
        {state.loading ? (
          <p>Loading...</p>
        ) : state.error ? (
          <p>{state.error}</p>
        ) : (
          <ul>
            {state.posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
