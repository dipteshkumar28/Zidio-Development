import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Services = () => {
  const clickabout = () => {
    document.title = "About Us";
  };
  const clickservices = () => {
    document.title = "Services";
  };
  const clickcontact = () => {
    document.title = "Contact";
  };

  const clickhome = () => {
    document.title = "Home";
  };

  const [hasScrolled, setHasScrolled] = useState(false);

  // Add an event listener for scroll when the component mounts
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true); // If scrolled more than 50px, change background
      } else {
        setHasScrolled(false); // If not, remove background
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-b from-purple-400 to to-blue-200 w-screen h-screen">
        <div
          className={` flex sticky top-0 z-50 w-full transition-all duration-300 ${
            hasScrolled ? "bg-gray-800 shadow-md text-white " : "bg-transparent"
          }`}
        >
          <img
            alt=""
            className="w-64 m-10 mx-32"
            src="https://zidio.in/assets/images/home-2/zidio.png"
          />
          <header>
            <ul className="flex mx-[240px] space-x-24 my-11">
              <li
                className={`p-1 px-3 my-3 text-xl hover:bg-slate-200 transition-background duration-700ease-out hover:rounded-md cursor-pointer flex sticky top-0 z-50  transition-all duration-300 ${
                  hasScrolled ? "shadow-md hover:text-black " : "bg-transparent"
                }`}
                onClick={clickhome}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={`p-1 px-3 my-3 text-xl hover:bg-slate-200 transition-background duration-700ease-out hover:rounded-md cursor-pointer flex sticky top-0 z-50  transition-all duration-300 ${
                  hasScrolled ? "shadow-md hover:text-black " : "bg-transparent"
                }`}
                onClick={clickabout}
              >
                <Link to="/about">About</Link>
              </li>
              <li
                className={`p-1 px-3 my-3 text-xl hover:bg-slate-200 transition-background duration-700ease-out hover:rounded-md cursor-pointer flex sticky top-0 z-50  transition-all duration-300 ${
                  hasScrolled ? "shadow-md hover:text-black " : "bg-transparent"
                }`}
                onClick={clickservices}
              >
                <Link to="/services">Services</Link>
              </li>
              <li
                className={`p-1 px-3 my-3 text-xl hover:bg-slate-200 transition-background duration-700ease-out hover:rounded-md cursor-pointer flex sticky top-0 z-50  transition-all duration-300 ${
                  hasScrolled ? "shadow-md hover:text-black " : "bg-transparent"
                }`}
                onClick={clickcontact}
              >
                <Link to="/contact">Contact</Link>
              </li>
              <button className="border w-32 px-1 font-bold bg-fuchsia-400 rounded-md hover:text-black hover:bg-slate-100 transition-background duration-700 ease-out hover:border border-black">
                <Link to="/contact">Get A Quote</Link>
              </button>
            </ul>
          </header>
        </div>
        <div className="flex">
          <img
            alt="serviceimg"
            src="https://uploads-ssl.webflow.com/62f8217638a72833f4bda8ad/62f8217738a728bca6bda91c_about-section-image.png"
            className="mx-[50px] w-[700px] my-20"
          />
          <div className="mx-10 shadow-lg bg-purple-300 p-6 my-10 rounded-lg">
            <div>
              <h1 className="text-[68px] my-[30px] text-slate-100 font-bold">
                Our Services
              </h1>
              <p className="mx-[10px] text-[16px] my-[-36px] font-bold text-slate-500">
                (Comprehensive Solutions for Every Need)
              </p>
            </div>
            <div className="w-[766px] mx-3 my-16">
              <p className="text-slate-500">
                At Zidio Development, we specialize in crafting custom websites
                and applications tailored to your business needs. Our services
                include Web development, Cloud Services, IT Management, Software
                Renew, Machine Learning, Digital Marketing, Cyber Security and
                Data Analytic. Partner with us to bring your digital vision to
                life.
              </p>
            </div>
            <div className=" bg-blue-950  w-48 p-3 px-5 m-32 mx-80 rounded-md text-white">
              <ul className="flex space-x-2 text-xl  ">
                <li onClick={clickhome}>
                  <Link to="/">Home</Link>
                </li>
                <li> &gt;</li>
                <li> Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
