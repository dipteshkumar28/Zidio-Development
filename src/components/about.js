import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const About = () => {



  const achievementsData = [
    {
      title: 'Best Startup Award 2023',
      description: 'Zidio received the Best Startup Award for innovation in digital solutions.',
      imageUrl: '/path-to-image/startup-award.png',
      reportUrl: '/path-to-report/startup-award.pdf',
    },
    {
      title: 'ISO Certification 2022',
      description: 'Achieved ISO certification for quality management systems.',
      imageUrl: '/path-to-image/iso-certification.png',
      reportUrl: '/path-to-report/iso-certification.pdf',
    },
    {
      title: 'Tech Excellence 2021',
      description: 'Recognized for excellence in delivering high-tech solutions.',
      imageUrl: '/path-to-image/tech-excellence.png',
      reportUrl: '/path-to-report/tech-excellence.pdf',
    },
    // Add more achievements as needed
  ];
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
            <div >
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
      <h2 className="text-4xl font-bold text-center mb-12">Achievements Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievementsData.map((achievement, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src={achievement.imageUrl}
              alt={achievement.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <p className="text-gray-600 mb-4">{achievement.description}</p>
              {achievement.reportUrl && (
                <a
                  href={achievement.reportUrl}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Detailed Report
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default About;
