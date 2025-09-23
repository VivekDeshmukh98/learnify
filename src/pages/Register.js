import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import {useTitle} from "../../src/hooks/useTitle"

export const Register = () => {
  useTitle('Register');

  const navigate = useNavigate();


  async function handleRegister(event) {
    event.preventDefault();
    const authDetail = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    const data = await register(authDetail);
    data.accessToken ? navigate("/products") : toast.error(data);
  }

  return (
    <main className="flex justify-center items-start min-h-screen  text-gray-900 dark:text-slate-200 px-4 pt-20">
      <section className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <p className="text-2xl text-center font-semibold dark:text-slate-200 mb-8 underline underline-offset-8">
          Register
        </p>

        <form onSubmit={handleRegister} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-200"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Shubham Sarda"
              required
              autoComplete="off"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                         rounded-lg focus:ring-blue-500 focus:border-blue-500 
                         block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                         dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                         dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-200"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              placeholder="shubham@example.com"
              required
              autoComplete="off"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                         rounded-lg focus:ring-blue-500 focus:border-blue-500 
                         block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                         dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                         dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-200"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              required
              minLength="7"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                         rounded-lg focus:ring-blue-500 focus:border-blue-500 
                         block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                         dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                         dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 
                       focus:ring-4 focus:outline-none focus:ring-blue-300 
                       font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                       dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </button>
        </form>
      </section>
    </main>
  );
};
