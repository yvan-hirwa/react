import { useContext, useState } from "react";
import { AuthContext } from "./authContext";
import { useLocation, useNavigate } from "react-router-dom";

type FormData = {
  username: string;
  password: string;
};
export default function LoginPage() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });
  const ctx = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogin() {
    if (ctx && formData.username && formData.password) {
      ctx.setIsLoggedin(true);
      navigate(location.state.from || "/", { replace: true });
    }
  }
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[300px] p-6 border rounded shadow">
        <h1 className="text-xl font-bold mb-4">Login</h1>

        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          className="w-full mb-3 p-2 border rounded"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, username: e.target.value }))
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          className="w-full mb-4 p-2 border rounded"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, password: e.target.value }))
          }
        />

        <button
          className="w-full bg-blue-500 text-white py-2 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
