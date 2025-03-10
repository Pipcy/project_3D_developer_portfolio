import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(0, 0, 0, 0.1)",
        // color: "#fff",
        backdropFilter: "blur(30px)", // Equivalent to backdrop-blur-sm
        WebkitBackdropFilter: "blur(30px)", // Ensures Safari support
        boxShadow:"inset 0 0 0 0.5px rgba(255, 255, 255, 0.2), 0 8px 24px rgba(0, 0, 0, 0.2)",
        borderRadius: "24px", // border-radius: 24px
      }}
      //contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      dateClassName='text-[14px] font-semibold'
      
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className=' object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Internship
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Experiences
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
