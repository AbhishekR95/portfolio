import React, { useEffect } from "react";
import profile from "../assets/profile.png";
import resume from "../assets/resume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "../components/Contact";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const openResume = () => {
    window.open(resume);
  };
  return (
    <>
      <div className=" bg-[#1f1f1f] sm:flex md:flex items-center justify-around w-full p-[100px]">
        <div
          data-aos="zoom-in"
          className="sm:flex sm:text-[10px] md:text-[20px] flex flex-col gap-8 items-center"
        >
          <div className="text-white mt-[10px]">
            Hi, I am&nbsp;
            <span className="text-[25px] font-semibold sm:text-[15px] md:text-[20px] ">
              Abhishek Pawar
            </span>
          </div>
          <div className="">
            <img
              data-aos="fade-in"
              className="sm:rounded-[50%] md:rounded-[50%] object-cover overflow-hidden sm:h-[100px] sm:w-[100px] md:h-[200px]  md:w-[200px] xl:h-[250px]  xl:w-[250px]"
              src={profile}
              alt=""
            />
          </div>

          <div className="sm:text-[15px] md:text-[20px]  flex items-center text-white">
            I am an aspiring and passionate&nbsp;
            <span className="sm:text-[15px] md:text-[20px] text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-[20px] font-semibold ">
              {" "}
              Front End Developer
            </span>
          </div>
          <div className="flex bg-[#d0caca] rounded-[10px] items-center sm:p-[15px] md:p-[10px] text-black hover:bg-[#ffffff] cursor-pointer">
            <button onClick={openResume}>My Resume</button>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="bg-[#ebf0eb] sm:flex items-center  justify-around gap-[50px] sm:h-[300px]  md:h-[600px]">
        <div data-aos="fade-in">
          <h1 className="sm:text-[40px] md:text-[60px] font-semibold mt-[5px]">
            SKILLS
          </h1>
        </div>
        <div className=" text-center sm:flex sm:flex-col sm:w-[30%] md:w-[55%] sm:items-center sm:justify-center">
          <ol className="list">
            <li className="item sm:flex sm:flex-col items-center gap-10">
              <h2 className="sm:text-[20px] md:text-[40px] font-semibold">
                Front-End
              </h2>
              <span className="sm:text-[15px] md:text-[20px]">
                HTML, CSS, Javascript, React, and more...
              </span>
            </li>
          </ol>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Home;
