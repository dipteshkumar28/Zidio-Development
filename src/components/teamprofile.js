import React, { useEffect, useState } from "react";
import axios from "axios";

const Teamprofiles = () => {
  const [teammembers, setteammembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const response = await axios.get("http://localhost:5000/api/teammember");
      setteammembers(response.data);
    };
    fetchMembers();
  }, []);

  return (
    <div className="my-7">
      <div className="flex justify-between">
        <h1 className="text-center text-6xl font-thin mx-20">
          Meet the <span className="font-bold">Team</span>
        </h1>
        <img className="size-20 mx-[85px]" src="https://st5.depositphotos.com/88275656/73308/v/450/depositphotos_733088148-stock-illustration-labor-day-icon-design-template.jpg"/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 md:gap-6 md:p-6 md:my-7">
        {teammembers.map((member) => (
          <div
            key={member._id}
            className="bg-slate-100 shadow-lg  rounded-lg p-4 w-72 transform hover:scale-105 transition-transform duration-700"
          >
            <img
              src={member.Image}
              alt={member.name}
              className="w-full h-64 object-cover rounded-full shadow-lg"
            />
            <label className=" absolute bg-white text-xl px-1 rounded-[5px] my-[-55px] mx-5 overflow-hidden transform hover:scale-150 transition-transform duration-700 ">
              <a href={member.Linkedin}>
                <i className="fa-brands fa-linkedin text-blue-700"></i>
              </a>
            </label>
            <div className="p-4 my-3">
              <h3 className="text-xl font-bold text-center">{member.Name}</h3>
              <p className=" text-center text-purple-400 font-bold text-sm my-1">
                {member.Expertise}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teamprofiles;
