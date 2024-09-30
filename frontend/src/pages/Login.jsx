import { LoginUser } from "@/redux/apiCalls/authApiCall";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      return toast.error("email is required");
    }
    if (!password.trim()) {
      return toast.error("password is required");
    }
    dispatch(LoginUser({ email, password }));
  };
  return (
    <form
      className="w-1/2 h-auto my-2 mx-auto bg-white p-8 rounded-lg shadow-md"
      onSubmit={formSubmitHandler}
    >
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
      >
        Login
      </button>
    </form>
  );
};
export default Login;
