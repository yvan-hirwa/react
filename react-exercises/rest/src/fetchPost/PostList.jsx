export default function PostList({ posts, refresh }) {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="w-screen h-screen flex flex-col justify-center items-center space-y-6 p-4">
        <button
          className="w-40 h-10 bg-indigo-500 text-sm font-semibold text-white rounded-xl cursor-pointer"
          onClick={refresh}
        >
          Refresh
        </button>
        <ul className="w-[80vw] h-[80vh]">
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
