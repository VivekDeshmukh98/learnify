import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {

  const navigate=useNavigate();
  const email= useRef();
  const password= useRef();
  async function handlelogin(event) {
    event.preventDefault();
    const authDetail={
      email: email.current.value,
      password: password.current.value
    }
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(authDetail)
};

const response= await fetch("http://localhost:8000/login",requestOptions);

const data=await response.json();
  data.accessToken ?  navigate("/products") :toast.error(data);
  console.log(data);

  if(data.accessToken){
    sessionStorage.setItem("token",JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    
}
  }


  return (
    <main className="flex justify-center items-start min-h-screen text-gray-900 dark:text-slate-200 px-4 pt-20">
      <section className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <p className="text-2xl text-center font-semibold dark:text-slate-100 mb-8 underline underline-offset-8">
          Login
        </p>
        <form onSubmit={handlelogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
            ref={email}
              type="email"
              id="email"
              placeholder="shubham@example.com"
              required
              autoComplete="off"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                         rounded-lg focus:ring-blue-500 focus:border-blue-500 
                         block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                         dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                         dark:focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
            ref={password}
              type="password"
              id="password"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                         rounded-lg focus:ring-blue-500 focus:border-blue-500 
                         block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                         dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                         dark:focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 
                       focus:ring-4 focus:outline-none focus:ring-blue-300 
                       font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                       dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Log In
          </button>
        </form>

        {/* <button className="mt-4 w-full cursor-pointer text-white bg-blue-700 hover:bg-blue-800 
                            focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
                            rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 
                            dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Login As Guest
          </button> */}
      </section>
    </main>
  );
}
