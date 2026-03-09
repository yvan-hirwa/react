export default function PageStatus({ path }) {
  return (
    <h1 className="w-screen flex justify-center items-center mb-10">
      {path === "/"
        ? "Welcome Home"
        : path === "/students"
          ? "Viewing all student"
          : path === "/students/new"
            ? "Creating a new student"
            : path.startsWith("/students")
              ? "Viewing student profile"
              : ""}
    </h1>
  );
}
