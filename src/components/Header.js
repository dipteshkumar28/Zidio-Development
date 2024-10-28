import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars,FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Zidio Development";
    } else if (location.pathname === "/about") {
      document.title = "About Us";
    } else if (location.pathname === "/contact") {
      document.title = "Contact Us";
    } else if (location.pathname === "/services") {
      document.title = "Services";
    } else if (location.pathname === "/signIn/Up") {
      document.title = "SignInUp";
    }
  }, [location.pathname]);
  const handleClick = () => {
    window.location.reload();
  };
  const clickabout = () => {
    window.location.reload();
  };
  const clickservices = () => {
    window.location.reload();
  };
  const clickcontact = () => {
    window.location.reload();
  };

  const clickhome = () => {
    window.location.reload();
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="flex flex-row justify-between pe-10 bg-gradient-to-b from-purple-400 to to-blue-100 h-[120px]">
        <img
          alt=""
          className="w-56 h-14 m-8 mx-32"
          src="https://zidio.in/assets/images/home-1/zidio%20(1).png"
        />

        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center text-gray-800"
        >
          <FaBars className="w-6 h-6" />
        </button>


        {isOpen && (
        <div className="fixed inset-0 bg-blue-500 bg-opacity-95 flex flex-col items-center justify-center z-50 text-white">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            <FaTimes />
          </button>
          <nav className="flex flex-col space-y-6 text-2xl">
            <Link to="/" onClick={toggleMenu} className="hover:underline">Home</Link>
            <Link to="/about" onClick={toggleMenu} className="hover:underline">About</Link>
            <Link to="/services" onClick={toggleMenu} className="hover:underline">Services</Link>
            <Link to="/contact" onClick={toggleMenu} className="hover:underline">Contact</Link>
          </nav>
        </div>
      )}

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center space-x-14`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-10 text-lg ">
            <li
              className="p-1 px-3 my-3 text-[18px] hover:bg-gradient-to-r from-indigo-300 to-purple-500  hover:rounded-md cursor-pointer "
              onClick={clickhome}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className="p-1 px-3 my-3 text-[18px] hover:bg-gradient-to-r from-indigo-300 to-purple-500 hover:rounded-md cursor-pointer "
              onClick={clickabout}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className="p-1 px-3 my-3 text-[18px] hover:bg-gradient-to-r from-indigo-300 to-purple-500 hover:rounded-md cursor-pointer "
              onClick={clickservices}
            >
              <Link to="/services">Services</Link>
            </li>
            <li
              className="p-1 px-3 my-3 text-[18px] hover:bg-gradient-to-r from-indigo-300 to-purple-500  hover:rounded-md cursor-pointer"
              onClick={clickcontact}
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <button
            className="border border-black w-36 my-1 h-14 px-1 font-bold text-lg bg-purple-400 rounded-md hover:text-black hover:bg-slate-100 transition-background duration-700 ease-out"
            onClick={handleClick}
          >
            <Link to="/signIn/Up">Sign In</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
