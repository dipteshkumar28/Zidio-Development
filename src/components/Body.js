import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ClientReviews from "../utils/clientreviews";
import Teamprofiles from "./teamprofile";

const Body = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const [email, setEmail] = useState("");
  // const [error, setError] = useState("");

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
    window.location.reload();
  };

  const clickservices = () => {
    window.location.reload();
  };

  useEffect(() => {
    document.title = "Home"; // Set the title of the page to "Contact"
  }, []);

  const clickcontact = () => {
    window.location.reload(); // Force the page to reload when the button is clicked
  };
 

  const clickhome = () => {
    document.title = "Home";
    window.location.reload();
  };
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(selected === index ? null : index);
  };
  const timelineData = [
    {
      date: "2020-01-15",
      title: "Company Founded",
      description:
        "Zidio was founded with the mission to revolutionize digital solutions.",
      projectDelivery: null,
      milestone: true,
    },
    {
      date: "2021-06-01",
      title: "First Major Project Delivered",
      description:
        "Successfully delivered the Alpha project for a major client.",
      projectDelivery: "Alpha Project",
      milestone: true,
    },
    {
      date: "2022-09-10",
      title: "Awarded Best Tech Startup",
      description:
        "Zidio received the Best Tech Startup award for innovative solutions.",
      projectDelivery: null,
      milestone: true,
    },
    // Add more data points as needed
  ];

  const handleclick = () => {
    document.title = "Contact";
  };
  return (
    <div>
      <div className="py-36 h-[700px] bg-[url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] ">
        <h1 className="text-2xl p-32 py-10 drop-shadow-sm">
          Software Development & Consultancy
        </h1>
        <h1 className="text-purple-500 font-bold text-7xl mx-28 drop-shadow-xl">
          BUSINESS INNOVATION <br />
          THROUGH TECHNOLOGY
        </h1>
        <br />
        <p className="text-slate-400 mx-32 text-xl drop-shadow-md">
          Leading Business Evolution with Tailored and Innovative Software
          Solutions
          <br />
          for Sustainable Growth
        </p>
        <button
          className="text-white p-4 px-8 font-bold m-10 mx-32 bg-purple-500 rounded-md border border-black hover:text-black hover:bg-slate-100 transition-background duration-500 linear"
          onClick={handleclick}
        >
          <Link to="/contact">
            Let's Talk <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </button>
        <img
          alt=""
          className="w-[460px] mx-[1100px] my-[-570px]"
          src="https://images.squarespace-cdn.com/content/v1/6062f043b5a2bf4639b6947f/1621596495244-KS5KO0G7BJC9S6AO5531/sykee_guy.png?format=1500w"
        />
      </div>
      <div className="">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold text-center mb-12">
            Zidio's History Timeline
          </h2>
          <div className="relative border-l-4 border-blue-600 ">
            {timelineData.map((event, index) => (
              <div key={index} className="mb-8 ml-6">
                <div className="absolute w-6 h-6 bg-blue-600 rounded-full -left-3.5 top-1 border-4 border-white"></div>
                <div className="md:p-4 bg-slate-100 rounded-lg shadow-lg">
                  <time className="block text-black border border-black md:w-32 md:m-1 rounded-md text-center md:p-1 bg-violet-300 font-bold text-sm">
                    {new Date(event.date).toDateString()}
                  </time>
                  <div
                    className="md:p-4 bg-purple-400 rounded-lg shadow-lg my-3 "
                    onClick={() => handleClick(index)}
                  >
                    <h3 className="p-4 bg-white rounded-lg shadow-lg hover:bg-blue-100 transition-colors duration-300 font-bold">
                      {event.title}
                    </h3>
                    {selected === index && (
                      <p className="mt-2 text-gray-700">{event.description}</p>
                    )}
                  </div>

                  {event.projectDelivery && (
                    <p className="mt-2 text-blue-600 font-semibold">
                      Project Delivered: {event.projectDelivery}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <ClientReviews />
      </div>
      <footer className="bg-gradient-to-b from-purple-400 to to-blue-200 w-full h-[620px]">
        <div className="md:flex">
          <div className="p-7 w-[450px] m-28 my-5 shadow-lg  ">
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
                <Link to="/">Subscribe</Link>
              </button>
            </div>
          </div>

          <div className="p-4 my-20 md:flex space-x-14">
            <div>
              <h1 className="text-3xl my-[-50px] tracking-widest">
                Our Services
              </h1>
              <div className="absolute md:flex p-6 py-6  text-lg bg-purple-400 shadow-lg my-20 rounded-lg mx-1 text-left">
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
              <div className="absolute w-52 md:flex p-4 py-9 text-lg bg-purple-400 shadow-lg my-20 rounded-lg mx-5 text-left">
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
                    <i class="fa-solid fa-arrow-right"></i> Services
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

export default Body;
