import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Body = () => {
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
        <h1 className="text-indigo-500 font-bold text-7xl mx-28 drop-shadow-xl">
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
          className="text-white p-4 px-8 font-bold m-10 mx-32 bg-blue-700 rounded-md hover:text-black hover:border border-black hover:bg-gradient-to-r from-blue-700 to-slate-100 transition-background duration-500 linear"
          onClick={handleclick}
        >
          <Link to="/contact">
            Let's Talk <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </button>
        <img
          alt=""
          className="w-[460px] mx-[1100px] my-[-565px]"
          src="https://images.squarespace-cdn.com/content/v1/6062f043b5a2bf4639b6947f/1621596495244-KS5KO0G7BJC9S6AO5531/sykee_guy.png?format=1500w"
        />
      </div>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12">
          Zidio's History Timeline
        </h2>
        <div className="relative border-l-4 border-blue-600">
          {timelineData.map((event, index) => (
            <div key={index} className="mb-8 ml-6">
              <div className="absolute w-6 h-6 bg-blue-600 rounded-full -left-3 top-1 border-4 border-white"></div>
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <time className="block text-gray-500 border-2 border-black md:w-32 md:m-1 rounded-md text-center md:p-1">
                  {new Date(event.date).toDateString()}
                </time>
                <div
                  className="p-4 bg-white rounded-lg shadow-xl"
                  onClick={() => handleClick(index)}
                >
                  <h3 className="p-4 bg-white rounded-lg shadow-lg hover:bg-blue-100 transition-colors duration-300 font-bold">{event.title}</h3>
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
  );
};

export default Body;
