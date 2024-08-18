import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar text-white z-10 ${isSticky ? 'sticky top-0 shadow-md backdrop-blur-sm bg-blue-950 bg-opacity-25' : 'bg-transparent'}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white"
          >
            <svg
              xmlns="https://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-xl dropdown-content text-white rounded-box z-[1] mt-3 w-52 p-2 shadow-lg bg-blue-950 bg-opacity-55 backdrop-blur-sm"
          >
           <li><a href='#skills'>Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href='#education'>Education</a></li>
          <li><a href='#contact'> Contact </a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-white">Hassan's Den</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-xl menu-horizontal px-1 text-white">
          <li><a href='#skills'>Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href='#education'>Education</a></li>
          <li><a href='#contact'> Contact </a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn font-bold bg-transparent text-blue-700 border-blue-950 hover:bg-blue-900 hover:text-white hover:border-blue-900 border-2">
          <a href="https://github.com/Hassanspace" className="">Github Profile</a>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
