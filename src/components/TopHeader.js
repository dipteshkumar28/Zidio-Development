const TopHeader = () => {
  return (
    <div className="w-full md:w-auto h-12  bg-gradient-to-r from-indigo-700 to-purple-700 text-white ">
      <div className="md:flex justify-between mx-5 ">
        <div className="my-[-5px]">
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
        <div className="md:flex justify-between mx-10 p-3 my- ">
          <h1 className="text-lg mx-12">
            <i class="fa-solid fa-business-time"></i> 9.00 am - 5.30 pm{" "}
          </h1>
          <ul className="md:flex space-x-5 mx-14 text-lg">
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
