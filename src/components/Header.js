import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const handleClick = () => {
    document.title = "SignIn/Up";
  };
  const clickabout = () => {
    document.title = "About Us";
  };
  const clickservices = () => {
    document.title = "Services";
  };
  const clickcontact = () => {
    document.title = "Contact";
  };
  
  const clickhome  =()=>{
    document.title="Home"
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="flex bg-gradient-to-b from-purple-300 to to-blue-100 h-[150px]">
        <img
          alt=""
          className="w-60 m-10 mx-32"
          src="https://zidio.in/assets/images/home-1/zidio%20(1).png"
        />

        <ul className="flex mx-[220px] space-x-20 my-11">
          <li className="p-1 px-3 my-3 text-xl hover:bg-gradient-to-r from-indigo-300 to-purple-500  hover:rounded-md cursor-pointer hover:border border-black "onClick={clickhome}>
            <Link>Home</Link>
          </li>
          <li
            className="p-1 px-3 my-3 text-xl hover:bg-gradient-to-r from-indigo-300 to-purple-500 hover:rounded-md cursor-pointer hover:border border-black"
            onClick={clickabout}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className="p-1 px-3 my-3 text-xl hover:bg-gradient-to-r from-indigo-300 to-purple-500 hover:rounded-md cursor-pointer hover:border border-black"
            onClick={clickservices}
          >
            <Link to="/services">Services</Link>
          </li>
          <li
            className="p-1 px-3 my-3 text-xl hover:bg-gradient-to-r from-indigo-300 to-purple-500 hover:rounded-md cursor-pointer hover:border border-black"
            onClick={clickcontact}
          >
            <Link to="/contact">Contact</Link>
          </li>
          <li className="font-bold text-xl my-3 hover:text-purple-500 cursor-pointer">
            <i class="fa-solid fa-magnifying-glass"></i>
          </li>
          <button
            className="border border-black w-32 px-1 font-bold text-lg bg-purple-400 rounded-md hover:text-black hover:bg-slate-100 transition-background duration-700 ease-out"
            onClick={handleClick}
          >
            <Link to="/signIn/Up">Sign In</Link>
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
