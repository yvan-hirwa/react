import { useState, useEffect, useCallback } from "react";
import PostList from "./PostList";

function Question3() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = useCallback(async (controller) => {
    try {
      setLoading(true);
      setError(null);
      const postRes = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        { signal: controller?.signal },
      );

      if (!postRes.ok) throw new Error("Posts are not fetched");

      const postObj = await postRes.json();

      setPosts(postObj);
    } catch (error) {
      if (error.name !== "AbortError") setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    fetchPosts(controller);

    return () => {
      controller.abort();
    };
  }, [fetchPosts]);

  const refreshHandler = () => {
    fetchPosts();
  };

  return (
    <div className="w-screen h-screen">
      {loading ? (
        <div className="h-full w-full flex justify-center items-center text-md text-black font-semibold">
          Loading ...
        </div>
      ) : error ? (
        <div className="h-full w-full flex justify-center items-center text-md text-black font-semibold">
          {error}
        </div>
      ) : (
        <PostList posts={posts} refresh={refreshHandler} />
      )}
    </div>
  );
}

export default Question3;
