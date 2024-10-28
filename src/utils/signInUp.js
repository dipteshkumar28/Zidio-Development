import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignInUp = () => {
  const [errorMessagename, setErrorMessagename] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phonenumbererror, setphonenumbererror] = useState("");

  const [phonenumber, setphonenumber] = useState("");
  const validatenumber = (phonenumber) => {
    const phoneregex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return phoneregex.test(phonenumber);
  };

  const [Password, setpassword] = useState("");
  const validatepassword = (Password) => {
    const passregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    return passregex.test(Password);
  };

  const [email, setEmail] = useState("");
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [name, setname] = useState("");
  const validatename = (name) => {
    const nameregex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm;
    return nameregex.test(name);
  };

  const handleSubmitform = (e) => {
    e.preventDefault();

    // Validate email field

    if (
      validateEmail(email) &&
      validatepassword(Password) &&
      validatename(name) &&
      validatenumber(phonenumber)
    ) {
      setErrorMessage(""); // Clear any previous error
      setPasswordError("");
      window.location.reload(); // Reload the page
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address!!!");
    }
    if (!validatepassword(Password)) {
      setPasswordError("Please enter a valid password!!!");
    }
    if (!validatename(name)) {
      setErrorMessagename("Please enter valid name!!!");
    }
    if (!validatenumber(phonenumber)) {
      setphonenumbererror("Please enter a valid phone number!!!");
    }

    if (!email) {
      setErrorMessage("Please fill out this field!!!");
    }
    if (!Password) {
      setPasswordError("Please fill out this field!!!");
    }
    if (!name) {
      setErrorMessagename("Please fill out this field!!!");
    }
    if (!phonenumber) {
      setphonenumbererror("Please fill out this field!!!");
    }
  };
  useEffect(() => {
    document.title = "SignIn/Up";
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

  const [isSignIn, setSignIn] = useState(true);

  const toggleSignInform = () => {
    setSignIn(!isSignIn);
  };

  return (
    <div className="bg-gradient-to-b from-purple-400 to to-blue-200 w-screen h-[900px]">
      <div
        className={` flex sticky top-0 z-50 w-full transition-all duration-300 
          
          `}
      >
        <img
          alt=""
          className="w-60 h-16  m-10 mx-32"
          src="https://zidio.in/assets/images/home-2/zidio.png"
        />
        <header>
          <ul className="flex mx-[240px] space-x-24 my-11">
            <li
              className="p-1 px-3 my-3 text-xl hover:bg-slate-200 transition-background duration-700ease-out hover:rounded-md cursor-pointer flex sticky top-0 z-50  transition-all duration-300"
              onClick={clickhome}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className="p-1 px-3 my-3 text-xl hover:bg-slate-200 transition-background duration-700ease-out hover:rounded-md cursor-pointer flex sticky top-0 z-50  transition-all duration-300 
                
                "
              onClick={clickabout}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className="p-1 px-3 my-3 text-xl hover:bg-slate-200 transition-background duration-700ease-out hover:rounded-md cursor-pointer flex sticky top-0 z-50  transition-all duration-300 
                  
                "
              onClick={clickservices}
            >
              <Link to="/services">Services</Link>
            </li>
            <li
              className="p-1 px-3 my-3 text-xl hover:bg-slate-200 transition-background duration-700ease-out hover:rounded-md cursor-pointer flex sticky top-0 z-50  transition-all duration-300
               
                "
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

      <form className="h-[690px] w-[500px] text-white px-14 absolute p-12 bg-black my-6 mx-auto right-0 left-0 rounded-3xl shadow-xl bg-opacity-80">
        <h1 className="text-white text-3xl font-bold py-2 text-center mb-6">
          {isSignIn
            ? "Sign In/Login for Start Learning"
            : "Sign Up for Start Learing"}
        </h1>
        <div className="">
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className={`p-4 my-10 mx-5 bg-slate-200 w-[350px] rounded-lg text-black mb-4 ${
                errorMessagename ? "border border-red-500" : "border-gray-300"
              }`}
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
            />
          )}
          {!isSignIn && (
            <p className="text-red-500 text-sm mb-3 my-[-13px] mx-6 ">
              {errorMessagename}
            </p>
          )}
          {!isSignIn && (
            <input
              type="text"
              placeholder="Phone Number"
              className={`p-4 mx-5 bg-slate-200 w-[350px] rounded-lg text-black   ${
                phonenumbererror ? "border border-red-500" : "border-gray-300"
              }`}
              value={phonenumber}
              onChange={(e) => setphonenumber(e.target.value)}
              required
            />
          )}
          {!isSignIn && (
            <p className="text-red-500 text-sm mx-6 my-1 ">
              {phonenumbererror}
            </p>
          )}

          <input
            type="text"
            placeholder="Email Address"
            className={`p-4 my-3 mx-5 text-black bg-slate-200 w-[350px] rounded-lg mb-6 ${
              errorMessage ? "border border-red-500" : "border-gray-300"
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errorMessage && (
            <p className="text-red-500 text-sm mb-5 my-[-14px] mx-6 ">
              {errorMessage}
            </p>
          )}

          <input
            type="text"
            placeholder="Password"
            className={`p-4 mx-5  bg-slate-200 text-black w-[350px] rounded-lg my-[-9px] ${
              passwordError ? "border border-red-500" : "border-gray-300"
            }`}
            value={Password}
            onChange={(e) => setpassword(e.target.value)}
            required
          />
          {passwordError && (
            <p className="text-red-500 text-sm  my-4 mx-6 ">{passwordError}</p>
          )}

          <button
            className=" h-11 p-3 my-6 mx-32 bg-purple-500 text-white w-[130px] rounded-lg font-bold  hover:shadow-[0_0_10px_3px_rgba(255,255,255,0.8)] transition duration-600 ease-in-out"
            type="submit"
            onClick={handleSubmitform}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </div>
        <div className="flex ">
          <p className="py-2 text-gray-400 text-sm mx-5 my-[-3px]">
            {isSignIn ? "New to Zidio Development?" : "Already a User?"}
            <span
              onClick={toggleSignInform}
              className="py-5 text-white text-md cursor-pointer hover:underline"
            >
              &nbsp;{isSignIn ? "Sign Up Now" : "Sign In Now"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignInUp;
