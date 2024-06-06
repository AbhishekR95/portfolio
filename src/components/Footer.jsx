import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer bg-[black] text-[#E3E4E6] z-[999999999999] w-full h-[10vh] flex justify-center flex-col items-center">
        <div className="socialMedia flex gap-10 pb-[10px]">
          <a
            href="https://www.facebook.com/abhishekraghunath25/"
            target="_blank"
          >
            <FaFacebook className="cursor-pointer" size={35} />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-r-pawar-9649b5191/"
            target="_blank"
          >
            <FaLinkedin className="cursor-pointer" size={35} />
          </a>
          <a href="https://github.com/AbhishekR95" target="_blank">
            <FaGithub className="cursor-pointer" size={35} />
          </a>
        </div>
        <p>&copy; 2024 abhishekpawar25@gmail.com, All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
