import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import { IoLogoGithub } from "react-icons/io";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = projectList[id];
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[95vh] gap-4 pt-[5%]">
        <h1 className="text-xl">{project.name}</h1>
        <img
          className="sm:w-[80%] lg:w-[60%] xl:w-[55%] 2xl:w-[35%] rounded-[10%] shadow-lg"
          src={project.image}
          alt=""
        />
        <p>
          <b>Skills: </b>
          {project.skills}
        </p>
        <div className="sm:w-[90%] lg:w-[80%] xl:w-[50%] sm:text-[15px] sm:text-center">
          {project.description}
        </div>
        <div className="hover:opacity-[0.6] cursor-pointer">
          <a
            href={`https://abhishekr95.github.io/${project.ref}`}
            target="_blank"
          >
            <IoLogoGithub size={35} />
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectDisplay;
