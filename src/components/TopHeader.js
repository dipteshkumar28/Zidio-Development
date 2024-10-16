const TopHeader = () => {
  return (
    <div className="w-full md:w-auto h-16 md:h-auto bg-gradient-to-r from-indigo-600 to-purple-800 text-white ">
      <div className="md:flex md:space-x-[600px]">
        <div className="">
          <ul className="md:flex md:p-4 md:my-1 md:mx-20">
            <li className="">
              <i class="fa-solid fa-location-dot"></i>{" "}
              Bengaluru,Karnataka,India-761143
            </li>
            <li className="mx-6">
              <i class="fa-solid fa-envelope"></i> support@zidio.in
            </li>
          </ul>
        </div>
        <div className="md:flex space-x-16 p-3 my-1 ">
          <h1 className="text-lg">
            <i class="fa-solid fa-business-time"></i> 9.00 am - 5.30 pm{" "}
          </h1>
          <ul className="md:flex space-x-5 text-lg">
            <li className=" hover:text-pink-400 cursor-pointer ">
              <a href="https://www.facebook.com/p/Zidio-Development-61556709391417/?_rdr"><i class="fa-brands fa-facebook"></i></a>
            </li>
            <li className=" hover:text-pink-400 cursor-pointer">
              <a href="https://x.com/zidioDev"><i class="fa-brands fa-twitter"></i></a>
            </li>
            <li className=" hover:text-pink-400 cursor-pointer">
              <a href="https://www.linkedin.com/company/zidio-development/posts/?feedView=all"><i class="fa-brands fa-linkedin"></i></a>
            </li>
            <li className=" hover:text-pink-400 cursor-pointer">
              <a href="https://www.youtube.com/channel/UCvxJRddqZowVyN6AXjylnMg"><i class="fa-brands fa-youtube"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
