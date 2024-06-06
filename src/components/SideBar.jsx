import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const SideBar = ({ isOpen, toggleSideBar }) => {
  const handleLinkClick = () => {
    toggleSideBar();
  };

  return (
    <>
      {isOpen && (
        <div className="absolute z-[6] bg-[#222831] text-white w-full h-[50%] flex flex-col items-center justify-center gap-9">
          <button className="absolute top-1 right-1" onClick={handleLinkClick}>
            <RxCross2 size={35} />
          </button>
          <Link to={"/"} onClick={handleLinkClick}>
            Home
          </Link>
          <Link to={"/about"} onClick={handleLinkClick}>
            About
          </Link>
          <Link to={"/projects"} onClick={handleLinkClick}>
            Projects
          </Link>
          <Link to={"/experience"} onClick={handleLinkClick}>
            Experience
          </Link>
        </div>
      )}
    </>
  );
};

export default SideBar;
