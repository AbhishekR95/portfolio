import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import SideBar from "./SideBar";
import logo from "../assets/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const toggleSideBar = () => {
    setSideBarOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className="navbar">
        <SideBar isOpen={sideBarOpen} toggleSideBar={toggleSideBar} />
        <div className="md:flex items-center  bg-[black] text-[#E3E4E6] fixed top-0 z-[5] w-full">
          <div className="sm:w-12 md:w-20">
            <RouterLink to={"/"}>
              <img data-aos="fade-in" className="" src={logo} alt="" />
            </RouterLink>
          </div>
          <div
            data-aos="fade-in"
            className="hidden lg:flex gap-[90px] lg:ml-[20%] xl:ml-[35%] md:text-[14px]"
          >
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/experience">Experience</RouterLink>
            <RouterLink to="/projects">Projects</RouterLink>
            <ScrollLink
              className="cursor-pointer"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={50}
            >
              Connect with me
            </ScrollLink>
          </div>
          <div className="toggleButton">
            <button
              className="absolute sm:top-0 md:top-5 right-2 lg:hidden"
              onClick={toggleSideBar}
            >
              <RxHamburgerMenu className="text-white" size={35} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
