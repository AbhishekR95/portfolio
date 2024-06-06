import React from "react";
import { projectList } from "../helpers/ProjectList";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useState } from "react";

const ProjectPrac = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? projectList.length - 1 : index - 1;

    setIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = index === projectList.length - 1;
    const newIndex = isLastSlide ? 0 : index + 1;

    setIndex(newIndex);
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[90vh] flex flex-col items-center justify-center cursor-pointer">
        <h1 className="mb-[5%] text-xl">PROJECTS</h1>
        <div className="relative group ">
          <img
            className="sm:h-[30vh] sm:w-[40vh] xl:h-[50vh] xl:w-[60vh] 2xl:h-[55vh] 2xl:w-[70vh] rounded-[40px] shadow-lg hover:opacity-[0.9]"
            src={projectList[`${index}`].image}
            alt=""
            onClick={() => {
              navigate(`/project/` + `${index}`);
            }}
          />
          <div className="hidden group-hover:block absolute top-[50%] text-xl right-[2%] text-white cursor-pointer ">
            <MdKeyboardArrowRight onClick={prevSlide} size={35} />
          </div>
          <div className="hidden group-hover:block absolute top-[50%] text-xl left-[2%] text-white cursor-pointer ">
            <MdKeyboardArrowLeft onClick={nextSlide} size={35} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPrac;
