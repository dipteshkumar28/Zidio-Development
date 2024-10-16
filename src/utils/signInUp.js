import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { checkvaliddata } from "./validate";

const SignInUp = () => {
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

  const [isSignIn, setSignIn] = useState(true);
  // const [errormessage, seterrormessage] = useState();

  // const email = useRef(null);
  // const password = useRef(null);
  // const name = useRef(null);

  const toggleSignInform = () => {
    setSignIn(!isSignIn);
  };

  // const handleclick = () => {
  //   //  console.log(email.current.value);
  //   //  console.log(password.current.value);
  //   const message = checkvaliddata(
  //     email.current.value,
  //     password.current.value,
  //     name.current.value
  //   );
  //   console.log(message);
  //   seterrormessage(message);

  //   //Creating user
  //   if (message) return;

  //   //SIGN IN/ SIGN UP

  //   if (!isSignIn) {
  //     //sign up logic
  //     createUserWithEmailAndPassword(
  //       auth,
  //       email.current.value,
  //       password.current.value
  //     )
  //       .then((userCredential) => {
  //         // Signed up
  //         const user = userCredential.user;
  //         console.log(user);
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         seterrormessage(errorCode + "-" + errorMessage);
  //       })
  //   } else {
  //     //sign in logic
  //     signInWithEmailAndPassword(
  //       auth,
  //       email.current.value,
  //       password.current.value
  //     )
  //       .then((userCredential) => {
  //         // Signed in
  //         const user = userCredential.user;
  //         console.log(user);
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         seterrormessage(errorCode + "-" + errorMessage);
  //       })
  //   }
  // }

  return (
    <div className="bg-gradient-to-b from-purple-400 to to-blue-200 w-screen h-screen">
      <div
        className={` flex sticky top-0 z-50 w-full transition-all duration-300 
          
          `}
      >
        <img
          alt=""
          className="w-64 m-10 mx-32"
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

      <form className="h-[670px] w-[500px] text-white px-14 absolute p-12 bg-black my-12 mx-auto right-0 left-0 rounded-3xl shadow-xl bg-opacity-80">
        <h1 className="text-white text-3xl font-bold py-2 text-center">
          {isSignIn ? "Sign In/Login for Start Learning" : "Sign Up for Start Learing"}
        </h1>
       
        {!isSignIn && (
          <input
            type="text"
            placeholder="Phone Number"
            className="p-4 my-10  mx-5 bg-slate-200 w-[350px] rounded-lg "
          />
        )}

        {!isSignIn && (
          <input
            type="text"
            placeholder="Phone Number"
            className="p-4 mx-5 bg-slate-200 w-[350px] rounded-lg "
          />
        )}


        <input
          type="text"
          placeholder="Email Address"
          className="p-4  my-10 mx-5 bg-slate-200 w-[350px] rounded-lg"
        />

        <input
          type="text"
          placeholder="Password"
          className="p-4  mx-5  bg-slate-200 w-[350px] rounded-lg"
        />

        <button
          className=" h-11 p-3 my-10 mx-32 bg-purple-500 text-white w-[130px] rounded-lg font-bold  hover:shadow-[0_0_10px_3px_rgba(255,255,255,0.8)] transition duration-600 ease-in-out"
          
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <div className="flex ">
          <p className="py-2 text-gray-400 text-sm mx-5 ">
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
