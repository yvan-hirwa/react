import { useState } from "react";

function App() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [passwordTouched, setPasswordTouched] = useState(false);
  // const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="w-lg h-125 border border-gray-200  rounded-xl flex flex-col justify-center items-center space-y-5">
        {loginForm.password.length < 6 && passwordTouched && (
          <div className="border-2 border-red-500/70 bg-red-50 text-red-500/70 h-12 w-60 flex justify-center items-center text-sm rounded-xl ">
            Password is short
          </div>
        )}
        <h1 className="font-bold text-3xl">Login </h1>
        <form className="flex flex-col justify-center items-center space-y-3">
          <input
            type="email"
            className="w-full bg-white border border-gray-500 rounded-xl px-4 py-3 text-black text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition appearance-none"
            placeholder="email@example.com"
            value={loginForm.email}
            onChange={(e) =>
              setLoginForm((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <input
            type={showPassword ? "text" : "password"}
            className="w-full bg-white border border-gray-500 rounded-xl px-4 py-3 text-black text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition appearance-none"
            placeholder="Password"
            value={loginForm.password}
            onChange={(e) =>
              setLoginForm((prev) => ({ ...prev, password: e.target.value }))
            }
            onBlur={() => {
              setPasswordTouched(true);
            }}
          />

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={(e) => setShowPassword(e.target.checked)}
              checked={showPassword}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-black">
              show password
            </span>
          </label>
          <button
            className="w-60 h-12 bg-gray-500 text-white rounded-xl"
            onClick={(e) => {
              e.preventDefault();
              setPasswordTouched(true);
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
