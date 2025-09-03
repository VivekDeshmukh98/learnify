import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center dark:text-slate-100 my-5 px-4 max-w-7xl mx-auto">
  {/* Text Section */}
  <div className="flex-1 my-5">
    <h1 className="text-5xl font-bold">Learn Anytime, Anywhere</h1>
    <p className="text-2xl my-7 px-1 dark:text-slate-300">
      Learnify is your all-in-one platform for mastering skills at your own
      pace. Access expert-led courses, track your progress, and achieve your
      learning goals — wherever you are.
    </p>
    <Link
      to="/products"
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Explore Courses
    </Link>
  </div>

  {/* Image Section */}
  <div className="flex-1 my-5 lg:max-w-xl">
    <img
      className="rounded-lg w-full h-auto"
      src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60"
      alt="Learnify Hero Section"
    />
  </div>
</section>

  );
};




