export const Testimonials = () => {
  return (
    <section className="my-10 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl text-center font-semibold dark:text-slate-100 mb-8 underline underline-offset-8">
        What Our Students Say
      </h1>

      <div className="grid gap-6 sm:grid-cols-2">
        
        {/* Testimonial 1 */}
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-lg shadow-sm dark:bg-gray-800">
          <blockquote className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Learning Made Simple
            </h3>
            <p className="mt-3 font-light text-gray-500 dark:text-gray-400">
              Learnify’s structured lessons and hands-on projects made learning effortless. I felt confident in my skills within the first week.
            </p>
          </blockquote>
          <figcaption className="flex items-center space-x-3 mt-4">
            <img
              className="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=50"
              alt="Bonnie Green"
            />
            <div className="font-medium text-left">
              <div className="dark:text-white">Bonnie Green</div>
              <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                Graduate, Full-Stack Web Development
              </div>
            </div>
          </figcaption>
        </figure>

        {/* Testimonial 2 */}
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-lg shadow-sm dark:bg-gray-800">
          <blockquote className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Career-Changing Experience
            </h3>
            <p className="mt-3 font-light text-gray-500 dark:text-gray-400">
              Completing Learnify’s Data Science track helped me land my first data analyst job in just two months.
            </p>
          </blockquote>
          <figcaption className="flex items-center space-x-3 mt-4">
            <img
              className="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1525085475165-c6808cdb005e?auto=format&fit=crop&w=120&q=50"
              alt="Roberta Casas"
            />
            <div className="font-medium text-left">
              <div className="dark:text-white">Roberta Casas</div>
              <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                Graduate, Data Science with Python
              </div>
            </div>
          </figcaption>
        </figure>

        {/* Testimonial 3 */}
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-lg shadow-sm dark:bg-gray-800">
          <blockquote className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Engaging and Practical
            </h3>
            <p className="mt-3 font-light text-gray-500 dark:text-gray-400">
              The instructors kept every session interactive, and the real-world projects truly prepared me for my design career.
            </p>
          </blockquote>
          <figcaption className="flex items-center space-x-3 mt-4">
            <img
              className="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=120&q=60"
              alt="Jese Leos"
            />
            <div className="font-medium text-left">
              <div className="dark:text-white">Jese Leos</div>
              <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                Graduate, UI/UX Design Masterclass
              </div>
            </div>
          </figcaption>
        </figure>

        {/* Testimonial 4 */}
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-lg shadow-sm dark:bg-gray-800">
          <blockquote className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Flexible & Affordable
            </h3>
            <p className="mt-3 font-light text-gray-500 dark:text-gray-400">
              I could learn at my own pace without financial stress. Perfect for working professionals like me.
            </p>
          </blockquote>
          <figcaption className="flex items-center space-x-3 mt-4">
            <img
              className="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=60"
              alt="Joseph McFall"
            />
            <div className="font-medium text-left">
              <div className="dark:text-white">Joseph McFall</div>
              <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                Graduate, Digital Marketing Essentials
              </div>
            </div>
          </figcaption>
        </figure>

      </div>
    </section>
  );
};
