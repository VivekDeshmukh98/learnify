import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../services/authService";
import { useTitle } from "../../src/hooks/useTitle";

export const Login = () => {
  useTitle("Login");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    const authDetail = {
      email: formData.get("email")?.trim(),
      password: formData.get("password"),
    };

    try {
      const data = await login(authDetail);
      if (data?.accessToken) {
        toast.success("Logged in Successfully", { position: "top-center" });
        navigate("/products");
      } else {
        toast.error(data?.message || "Login failed", { position: "top-center" });
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong", { position: "top-center" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex justify-center items-start min-h-screen text-gray-900 dark:text-slate-200 px-4 pt-20">
      <section className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-8 underline underline-offset-8">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-gray-300">
              Your Email
            </label>
            <input
              type="email"
              placeholder="test@mail.com"
              id="email"
              name="email"
              required
              autoComplete="off"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                         rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium dark:text-gray-300">
              Your Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="test1234"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                         rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white bg-blue-700 hover:bg-blue-800 
                       focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 
                       text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 
                       ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
      </section>
    </main>
  );
};
