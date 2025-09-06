import { useEffect } from 'react';
import { useState } from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { Search } from '../Sections/Search';

export const Header = () => {
  const[darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

  const[searchSection,SetSearchSection]=useState(false);


  useEffect(()=>{

localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if(darkMode){
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');
    }
  },[darkMode]);

  
  return (
    <header>
      

<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="stroke-1 mr-4 h-16 sm:h-12" alt="Learnify Logo" />
            <span className="font-serif hover:font-mono self-center text-2xl font-semibold text-gray-700 whitespace-nowrap dark:text-white">Learnify</span>
        </Link>

        <div className="flex items-center space-x-6 rtl:space-x-reverse">

          <div className="relative inline-block">
           <span onClick={()=>setDarkMode(!darkMode)}>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer text-xl text-gray-700 size-6 hover:font-mono dark:text-white  bi-gear-wide-connected">
           <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
          </svg>
            </span>
</div>

<div className="relative inline-block">
            <span onClick={()=>SetSearchSection(!searchSection)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer text-xl text-gray-700 size-6 dark:text-white  bi-gear-wide-connected">
  <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
</svg>
</span>
</div>



<Link to="/cart">
<div className="relative inline-block">
  {/* Cart / Gear Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="cursor-pointer text-xl text-gray-700 size-6 dark:text-white bi-gear-wide-connected"
  >
    <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
  </svg>

  {/* Badge */}
  <span className="text-white text-xs absolute -top-1 -right-2 bg-rose-500 px-1 rounded-full">
    0
  </span>
</div>

</Link>

<div className="relative inline-block">
            <span>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer text-xl text-gray-700 size-6 dark:text-white  bi-gear-wide-connected">
  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
</svg>
</span>

</div>


         
        </div>
    </div>
</nav>


{searchSection && <Search/>}
</header>
  )
}
