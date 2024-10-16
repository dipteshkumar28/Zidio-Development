import React from "react";
import { useEffect, useState } from "react";
import Loading from "./loading";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [errorMessagename, setErrorMessagename] = useState("");
  const [errorMessage,setErrorMessage]=useState("");

  const [email, setEmail] = useState("");
  // const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [name, setname] = useState("");
  const validatename = (name) => {
    const nameregex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm;
    return nameregex.test(name);
  };

  const handlename = (e) => {
    e.preventDefault();
    if (validatename(name)) {
      setErrorMessagename("");
      window.location.reload();
    }
   if(!validatename(name)) {
      setErrorMessagename("Please enter a valid name!!!");
    }
    if(!name){
          setErrorMessagename("Please fill out this field!!!");
    }

    // if (validateEmail(email)) {
    //   console.log("Valid Email Submitted:", email);
    //   setErrorMessagename(""); // Clear any previous error
    //   window.location.reload(); // Reload the page
    // }
    // if (!email) {
    //   setErrorMessagename("Please fill out this field!!!");
    // } if(!validateEmail(email)){
    //   setErrorMessagename("Please enter a valid email address.");
    // }
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
    } if(!email) {
      setErrorMessage("Please fill out this field!!!");
    }
  };

  const [verified, setverified] = useState(false);

  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleRecaptchaChange = (token, value) => {
    setRecaptchaToken(token);
    setverified(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!recaptchaToken) {
      alert("Please verify that you are a human!");
      return;
    }

    // Submit form or send the token to your backend for verification
    console.log("Form submitted, reCAPTCHA token:", recaptchaToken);

    // Reset reCAPTCHA after submission (if needed)
    setRecaptchaToken(null);
  };

  // const handleReload = () => {
  //   document.title = "Contact";
  //   window.location.reload();  // Reloads the current page
  // };

  const clickabout = () => {
    document.title = "About Us";
    window.location.reload();
  };
  useEffect(() => {
    document.title = "Services";
  }, []);
  const clickservices = () => {
    window.location.reload();
  };

  useEffect(() => {
    document.title = "Contact"; // Set the title of the page to "Contact"
  }, []);

  const clickcontact = () => {
    window.location.reload(); // Force the page to reload when the button is clicked
  };

  const clickhome = () => {
    document.title = "Home";
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
  const [loading, setloading] = useState(false);
  // const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false); // Set loading to false after 2 seconds
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);
  // Allows programmatic navigation

  return loading ? (
    Loading
  ) : (
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
            src="https://www.binding-minds.com/wp-content/uploads/2022/08/img-1.png"
            className="mx-[50px] w-[700px] my-3"
          />
          <div className="mx-10 shadow-lg bg-purple-300 p-6 my-12 rounded-lg">
            <div>
              <h1 className="text-[68px] my-[30px] text-slate-100 font-bold">
                Contact Us
                <p className="mx-[10px] text-[16px] my-[-10px] text-slate-500">
                  (We'd Love to Hear from You)
                </p>
              </h1>
            </div>
            <div className="w-[766px] mx-3">
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
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute h-32 w-screen text-center bg-[url('https://t3.ftcdn.net/jpg/06/15/77/58/360_F_615775811_nfUlhIPooFOe505kTlog9eGMaQXd7VXv.jpg')] ">
        <ul className="my-6">
          <h1 className="font-bold text-4xl">How can we help?</h1>
          <h2 className="font-mono font-bold text-2xl">Send us a message!!</h2>
        </ul>
      </div>
      <div>
        <div className="flex bg-white h-[700px] w-screen ">
          <form className="my-44 p-8 px-80 mx-[-35px]" onSubmit={handleSubmit}>
            <div className="flex space-x-1 " onSubmit={handlename}>
              <ul>
                <h1 className="font-bold">Full Name</h1>
                <input
                  id="name"
                  type="text"
                  className="bg-slate-100 h-8 w-56 rounded-md"
                  onChange={(e) => setname(e.target.value)}
                  required
                />
                {errorMessagename && (
                  <p className="text-red-500 text-sm mb-2">{errorMessagename}</p>
                )}
              </ul>
              <ul>
                <h1 className="font-bold">Last Name</h1>
                <input
                  type="text"
                  className="bg-slate-100 h-8 w-56 rounded-md"
                  onChange={(e) => setname(e.target.value)}
                  required
                />
                <p className="text-red-500 text-sm mb-2  ">{errorMessagename}</p>
              </ul>
            </div>
            <ul>
              <h1 className="font-bold">Email</h1>
              <input
                id="email"
                type="email"
                className="bg-slate-100 w-full h-8 rounded-md"
                onChange={(e) => setEmail(e.target.value)}
                required
              /> 
              {errorMessagename && (
                <p className="text-red-500 text-sm mb-2">{errorMessagename}</p>
              )}
            </ul>
            <ul>
              <h1 className="font-bold">Message</h1>
              <input
                className="bg-slate-100 w-full md:h-20 rounded-md p-2 "
                placeholder="Start Typing....."
              />
            </ul>
            <ReCAPTCHA
              sitekey="6LfO3F4qAAAAAGpXIR_VV_OkIYIYa359MAlI_kvW"
              onChange={handleRecaptchaChange}
              className="my-4 cursor-pointer"
            />
            <button
              className="bg-orange-500 text-white p-3 w-full my-5 font-bold hover:bg-orange-600 rounded-md cursor-pointer"
              onClick={handlename}
            >
              Send Message
            </button>
          </form>

          <div className="flex my-48  p-4 mx-[-200px] ">
            <div className="relative w-[630px] h-[440px]">
              <iframe
                src="https://maps.google.com/maps?q=Zidio%20Development&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                frameBorder="0"
                scrolling="no"
                className="absolute top-0 left-0 w-full h-full rounded-lg border border-black shadow-md"
                allowFullScreen
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
        <footer className="bg-gradient-to-b from-purple-400 to to-blue-200 w-full h-[620px]">
          <div className="md:flex">
            <div className="p-7 w-[450px] m-28 my-5 shadow-lg  ">
              <div className="flex bg-red-600 w-96 space-x-10 p-4 rounded-sm mx-1 ">
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
                  className="absolute inset-y-4 mx-52 text-xl flex items-center justify-center text-white bg-red-500 hover:bg-red-600 rounded-3xl p-4 px-5 py-5 h-9 font-thin "
                  type="submit"
                  onClick={handleSubmitemail}
                >
                  Subscribe
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
                    <li className="hover:text-white transition ease-in duration-300 ">
                      <i class="fa-solid fa-arrow-right"></i> Our Team
                    </li>
                    <li
                      className="hover:text-white transition ease-in duration-300 "
                      onClick={clickcontact}
                    >
                      <i class="fa-solid fa-arrow-right"></i>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li className="hover:text-white transition ease-in duration-300 ">
                      <i class="fa-solid fa-arrow-right"></i> Careers
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
    </div>
  );
};
export default Contact;
