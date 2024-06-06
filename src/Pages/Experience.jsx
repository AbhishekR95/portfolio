import React from "react";
import { TbSchool } from "react-icons/tb";
import { MdOutlineWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <>
      <div className="experience bg-[#e2e2e2] w-full h-[90vh] xl:h-[92vh] md:pt-[90px] md:mr-[13%]">
        <VerticalTimeline
          lineColor="#1f1f1f"
          className="sm:mt-[7%] md:mt-[-1%]"
        >
          <VerticalTimelineElement
            className=""
            date="2019 - 2020"
            iconStyle={{ background: "#1f1f1f", color: "#fff" }}
            icon={<TbSchool />}
          >
            <h1 className="text-xl">
              Eastern Institute of Technology, Auckland
            </h1>
            <p>
              I completed the Postgraduate Diploma in Information Technology
              (PGDipIT) at the Eastern Institute of Technology in Auckland, New
              Zealand, from 2019 to 2020. This one-year Level 8 program equipped
              me with specialized knowledge and skills in the IT field,
              enhancing my qualifications for a successful career in technology.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className=""
            date="2021 - 2022"
            iconStyle={{ background: "#1f1f1f", color: "#fff" }}
            icon={<MdOutlineWork />}
          >
            <h1 className="text-xl">Concentrix, Auckland</h1>
            <p>
              My experience in the contact center equipped me with the ability
              to handle diverse situations effectively and maintain a positive
              customer experience.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className=""
            date="2022 - Present"
            iconStyle={{ background: "#1f1f1f", color: "#fff" }}
            icon={<MdOutlineWork />}
          >
            <h1 className="text-xl">Teletrac Navman, Auckland</h1>
            <p>
              In my current dynamic role, I serve as a Service Desk Tier 1
              Technical Support professional within a company that specializes
              in cloud-based solutions.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
