import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import JobList from "../Joblistbackend/joblist";
import Teamprofiles from "./teamprofile";

const Services = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSubmitemail = (e) => {
    e.preventDefault();

    // Validate email field

    if (validateEmail(email)) {
      console.log("Valid Email Submitted:", email);
      setErrorMessage(""); // Clear any previous error
      window.location.reload(); // Reload the page
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
    }
    if (!email) {
      setErrorMessage("Please fill out this field!!!");
    }
  };
  const clickabout = () => {
    document.title = "About Us";
  };
  useEffect(() => {
    document.title = "Services"; // Set the title of the page to "Contact"
  }, []);
  const clickservices = () => {
    window.location.reload();
  };
  const clickcontact = () => {
    window.location.reload();
  };

  const clickhome = () => {
    window.location.reload();
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
            hasScrolled ? "bg-gray-800  text-white " : "bg-transparent"
          }`}
        >
          <img
            alt=""
            className="w-60 h-16  m-10 mx-32"
            src="https://zidio.in/assets/images/home-2/zidio.png"
          />
          <header>
            <ul className="flex mx-[240px] space-x-24 my-11">
              <li
                className={`p-1 px-3 my-3 text-xl hover:bg-slate-200 transition-background duration-700ease-out hover:rounded-md cursor-pointer flex sticky top-0 z-50  transition-all duration-300 ${
                  hasScrolled ? " hover:text-black " : "bg-transparent"
                }`}
                onClick={clickhome}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={`p-1 px-3 my-3 text-xl hover:bg-slate-200 transition-background duration-700ease-out hover:rounded-md cursor-pointer flex sticky top-0 z-50  transition-all duration-300 ${
                  hasScrolled ? " hover:text-black " : "bg-transparent"
                }`}
                onClick={clickabout}
              >
                <Link to="/about">About</Link>
              </li>
              <li
                className={`p-1 px-3 my-3 text-xl hover:bg-slate-200 transition-background duration-700ease-out hover:rounded-md cursor-pointer flex sticky top-0 z-50  transition-all duration-300 ${
                  hasScrolled ? " hover:text-black " : "bg-transparent"
                }`}
                onClick={clickservices}
              >
                <Link to="/services">Services</Link>
              </li>
              <li
                className={`p-1 px-3 my-3 text-xl hover:bg-slate-200 transition-background duration-700ease-out hover:rounded-md cursor-pointer flex sticky top-0 z-50  transition-all duration-300 ${
                  hasScrolled ? " hover:text-black " : "bg-transparent"
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
      <div>
        <JobList />
      </div>
      <footer className="bg-gradient-to-b from-purple-400 to to-blue-200 w-full h-[620px]">
        <div className="md:flex">
          <div className="p-7 w-[450px] m-28 my-5 shadow-lg  rounded-md  ">
            <div className="flex bg-red-600 w-96 space-x-10 p-4 rounded-md mx-1 ">
              <i className="fa-solid fa-comments text-red-600 bg-white rounded-xl px-2 text-2xl mx-5 "></i>
              <h1 className="text-white text-2xl text-center font-bold font-mono ">
                Let's Talk
              </h1>
            </div>

            <div className="flex p-3 space-x-7 m-8 mx-20 ">
              <i className="fa-solid fa-phone-volume text-2xl my-3"></i>
              <ul className="text-lg ">
                <h2 className="text-slate-100 font-sans tracking-wide">
                  Call Us
                </h2>
                <h1 className="text-white tracking-wide">+91 8455807965</h1>
              </ul>
            </div>
            <div className="flex p-1 space-x-7 m-8 mx-20 ">
              <i className="fa-solid fa-envelope text-2xl my-3"></i>
              <ul className="text-lg ">
                <h2 className="text-slate-100 font-sans tracking-wider">
                  Business Inquiries
                </h2>
                <h1 className="text-white tracking-wide">support@zidio.in</h1>
              </ul>
            </div>
            <div className="relative p-3 mx-5 " onSubmit={handleSubmitemail}>
              <input
                type="email"
                placeholder="Enter Your E-mail..."
                className={`text-md text-black h-12 rounded-3xl bg-transparent border w-[333px] border-slate-500 p-2 ${
                  errorMessage ? "border-red-500" : "border-gray-300"
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errorMessage && (
                <p className="text-red-500 text-sm mb-2 mx-2 ">
                  {errorMessage}
                </p>
              )}

              <button
                className="absolute inset-y-4 mx-52 text-xl flex items-center justify-center text-white bg-red-600 hover:bg-red-500 rounded-3xl p-4 px-5 py-5 h-9 font-thin "
                type="submit"
                onClick={handleSubmitemail}
              >
                <Link to="/services">Subscribe</Link>
              </button>
            </div>
          </div>

          <div className="p-4 my-20 md:flex space-x-14">
            <div>
              <h1 className="text-3xl my-[-50px] tracking-widest">
                Our Services
              </h1>
              <div className="absolute md:flex p-6 py-7  text-lg bg-purple-400 shadow-lg my-20 rounded-lg mx-1 text-center">
                <ul className="my-3 space-y-2 cursor-pointer">
                  <li
                    className="hover:text-white transition ease-in duration-300 "
                    onClick={clickservices}
                  >
                    <i className="fa-solid fa-arrow-right hover:text-black"></i>{" "}
                    <Link to="/services">Cloud Services</Link>
                  </li>
                  <li
                    className="hover:text-white transition ease-in duration-300 "
                    onClick={clickservices}
                  >
                    <i class="fa-solid fa-arrow-right"></i>{" "}
                    <Link to="/services">IT Management</Link>
                  </li>
                  <li
                    className="hover:text-white transition ease-in duration-300 "
                    onClick={clickservices}
                  >
                    <i class="fa-solid fa-arrow-right"></i>{" "}
                    <Link to="/services">Software Renew</Link>
                  </li>
                  <li
                    className="hover:text-white transition ease-in duration-300 "
                    onClick={clickservices}
                  >
                    <i class="fa-solid fa-arrow-right"></i>{" "}
                    <Link to="/services">Machine Learning</Link>
                  </li>

                  <li
                    className="hover:text-white transition ease-in duration-300 "
                    onClick={clickservices}
                  >
                    <i class="fa-solid fa-arrow-right"></i>{" "}
                    <Link to="/services">Digital Marketing</Link>
                  </li>
                  <li
                    className="hover:text-white transition ease-in duration-300 "
                    onClick={clickservices}
                  >
                    <i class="fa-solid fa-arrow-right"></i>{" "}
                    <Link to="/services">Web Development</Link>
                  </li>
                  <li
                    className="hover:text-white transition ease-in duration-300 "
                    onClick={clickservices}
                  >
                    <i class="fa-solid fa-arrow-right"></i>{" "}
                    <Link to="services">Cyber Security</Link>
                  </li>
                  <li
                    className="hover:text-white transition ease-in duration-300 "
                    onClick={clickservices}
                  >
                    <i class="fa-solid fa-arrow-right"></i>{" "}
                    <Link to="/services">Data Analytic</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h1 className="text-3xl my-[-50px] md:mx-3 tracking-widest">
                Our Company
              </h1>
              <div className="absolute w-52 md:flex p-4 py-9 text-lg bg-purple-400 shadow-lg my-20 rounded-lg mx-5 text-center">
                <ul className="mx-10 space-y-2 cursor-pointer">
                  <li
                    className="hover:text-white transition ease-in duration-300 "
                    onClick={clickabout}
                  >
                    <i class="fa-solid fa-arrow-right"></i>{" "}
                    <Link to="/about">About</Link>
                  </li>
                  <li
                    className="hover:text-white transition ease-in duration-300 "
                    onClick={clickservices}
                  >
                    <i class="fa-solid fa-arrow-right"></i>{" "}
                    <Link to="/services">Services</Link>
                  </li>
                  <li
                    className="hover:text-white transition ease-in duration-300 "
                    onClick={clickcontact}
                  >
                    <i class="fa-solid fa-arrow-right"></i>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" w-[400px] text-right my-[-80px]">
              <img
                alt=""
                className="w-72 m-10 mx-28 "
                src="https://zidio.in/assets/images/home-1/zidio%20(1).png"
              />
              <p className="text-slate-600">
                At Zidio Development, we specialize in innovative software
                solutions. Our team is dedicated to delivering high-quality
                projects, fostering professional growth, and driving
                technological advancement.
              </p>
              <button
                className="bg-red-600 p-5 text-white my-10 hover:bg-white transition ease-out duration-700 hover:border border-black hover:text-black rounded-md "
                onClick={clickabout}
              >
                <Link to="/about">Want to Discover More</Link>
                <i className="fa-solid fa-arrow-right mx-1"></i>
              </button>
            </div>
          </div>
        </div>
        <hr className="w-[1300px] mx-44 my-10 border-t-2 border-slate-400" />

        <div className="md:flex absolute space-x-96 my-[-20px] mx-8 ">
          <h1 className="my-4">
            © 2024 @ Zidio Development. Designed by Team ZIDIO.
          </h1>
          <h1 className="my-4">Terms and Conditions | Privacy Policy</h1>
          <div>
            <ul className="flex space-x-5 text-2xl my-3">
              <li className=" hover:text-pink-500 transition ease-out duration-700 bg-white rounded-3xl p-1 cursor-pointer ">
                <a href="https://www.facebook.com/p/Zidio-Development-61556709391417/?_rdr">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li className=" hover:text-pink-500 transition ease-out duration-700 bg-white rounded-3xl p-1 cursor-pointer">
                <a href="https://x.com/zidioDev">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li className=" hover:text-pink-500 transition ease-out duration-700 bg-white rounded-3xl p-1 cursor-pointer">
                <a href="https://www.linkedin.com/company/zidio-development/posts/?feedView=all">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li className=" hover:text-pink-500 transition ease-out duration-700 bg-white rounded-3xl p-1 cursor-pointer">
                <a href="https://www.youtube.com/channel/UCvxJRddqZowVyN6AXjylnMg">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
