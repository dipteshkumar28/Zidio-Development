import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Teamprofiles from "./teamprofile";
import JobList from "../Joblistbackend/joblist";



const About = () => {
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

  const achievementsData = [
    {
      title: "Best Startup Award 2023",
      description:
        "Zidio received the Best Startup Award for innovation in digital solutions.",
      imageUrl:
        "https://fiaglobal.com/wp-content/uploads/2023/12/ET-startup-2023.jpg",
      reportUrl: "/path-to-report/startup-award.pdf",
    },
    {
      title: "ISO Certification 2022",
      description: "Achieved ISO certification for quality management systems.",
      imageUrl:
        "https://www.shutterstock.com/image-vector/certified-company-certificate-iso-90012015-260nw-2461204389.jpg",
      reportUrl: "/path-to-report/iso-certification.pdf",
    },
    {
      title: "Tech Excellence 2021",
      description:
        "Recognized for excellence in delivering high-tech solutions.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREVKDo1WYu9_U93Q7uERSkEtz0KqkUdrX1GA&s",
      reportUrl: "/path-to-report/tech-excellence.pdf",
    },
    {
      title: "First Project Delivery",
      description:
        "Successfully completed and delivered our first large-scale project, meeting all client expectations ahead of schedule.",
      date: "2020-03-15",
      imageUrl:
        "https://img.freepik.com/free-vector/business-project-delivery-concept-project-development-presentation-idea-project-planning-promotion-management-marketing-flat-vector-illustration_613284-3094.jpg",
      reportUrl: "https://zidio.com/first-project",
    },
    {
      title: "Best Innovation Award",
      description:
        "Awarded the 'Best Innovation in Development' for our unique approach to solving client challenges with cutting-edge solutions.",
      imageUrl:
        "https://www.corporatevision-news.com/wp-content/uploads/2020/03/Technology-Innovator-Awards-2020-Logo-No-Year-01-768x666-removebg-preview-2-1.png",
      reportUrl: "https://zidio.com/best-innovation",
    },
    {
      title: "Partnership with Global Tech",
      description:
        "Established a key strategic partnership with Global Tech, opening new opportunities in the tech and innovation sectors.",
      imageUrl:
        "https://png.pngtree.com/thumb_back/fw800/background/20240418/pngtree-partnership-of-companies-collaboration-business-technology-internet-concept-image_15659993.jpg",
      reportUrl: "https://zidio.com/global-tech",
    },
  ];
  useEffect(() => {
    document.title = "About Us";
  }, []);
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
            hasScrolled ? "bg-gray-800 text-white " : "bg-transparent"
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
              <button
                className="border w-32 px-1 font-bold bg-fuchsia-400 rounded-md hover:text-black hover:bg-slate-100 transition-background duration-700 ease-out hover:border border-black"
                onClick={clickcontact}
              >
                <Link to="/contact">Get A Quote</Link>
              </button>
            </ul>
          </header>
        </div>
        <div className="flex">
          <img
            alt="aboutimg"
            className="mx-[50px] w-[700px] my-20"
            src="https://smiledoctors.com/wp-content/uploads/SE_guyBanner2-1024x818-1-700x559.png"
          />
          <div className="mx-[25px] p-6 my-12 shadow-lg bg-purple-300 rounded-lg">
            <div>
              <h1 className="text-[68px] my-[100px] text-slate-100 font-bold">
                About Us
                <p className="mx-[2px] text-[16px] my-[-10px] text-slate-500">
                  (Who we are and What we do ?)
                </p>
              </h1>
            </div>
            <div className="w-[766px]">
              <p className="my-[-80px]">
                Welcome to Zidio Development Pvt. Ltd. We are a trailblazing
                software development company where innovation meets expertise.
                Our team of skilled developers and creative thinkers specializes
                in turning complex ideas into user-friendly digital solutions.
                From custom software to cutting-edge mobile apps, we're
                dedicated to engineering excellence and pushing the boundaries
                of technology. At Zidio, we believe in the power of
                collaboration, continuous learning, and adapting to the
                ever-evolving digital landscape. We're not just developers;
                we're visionaries committed to delivering impactful software
                solutions that drive success for businesses globally. Stay
                connected with us for insights into our groundbreaking projects,
                tech trends, career opportunities, and our journey in shaping
                the future of technology.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-5xl font-bold text-center mb-16">
          Achievements Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((achievement, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:bg-yellow-50"
            >
              <img
                src={achievement.imageUrl}
                alt={achievement.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 mb-4">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
   <div>
    
    <div><Teamprofiles/></div>
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
                <Link to="/about">Subscribe</Link>
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
                  <li className="hover:text-white transition ease-in duration-300 " onClick={clickservices}>
                    <i class="fa-solid fa-arrow-right"></i> <Link to="/services">Services</Link>
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

export default About;
