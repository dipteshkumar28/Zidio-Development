// JobList.js (React component)
import React, { useEffect, useState } from "react";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get("http://localhost:5000/api/jobs");
      setJobs(response.data);
    };
    fetchJobs();
  }, []);

  return (
    <div className="container mx-auto p-4 my-10">
      <div className="flex justify-between ">
        <h1 className="text-4xl font-bold mb-8 my-14 mx-5">Current Job Openings</h1>
        <img className="size-36" src="https://atlas-content-cdn.pixelsquid.com/stock-images/job-openings-hanging-sign-RBlnR6E-600.jpg" />
      </div>
      <div className="grid grid-cols-3 md:gap-6">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white shadow-md p-6 rounded-lg space-x-4 justify-between hover:scale-105 transition-transform duration-700"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <p className="text-gray-500">
                <strong>Requirements:</strong> {job.requirements}
              </p>
              <p className="text-gray-500">
                <strong>Type:</strong> {job.type}
              </p>
            </div>
            <a href={job.applicationLink} className="text-purple-500 underline">
              <button className=" border-2 border-purple-500 rounded-2xl p-1 px-4 my-2 mx-36 font-bold hover:bg-purple-500 hover:text-white hover:transition-background duration-700 ease-out">
                Apply Here
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
