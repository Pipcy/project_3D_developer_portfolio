
//=====================================================

// import React from "react";
// import { useRef, useState } from 'react';
// //import Tilt from "react-tilt";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { github, video } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
// import { projects as projectData } from "../project-utils/projectData";

// import { fadeIn, textVariant } from "../utils/motion";
// import { useNavigate } from "react-router-dom"; //for navigation
// //import GooeyTooltip from "./small-stuff";

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   images,
//   source_code_link,
// }) => {
//   return (
//     <motion.div 
//       variants={fadeIn("up", "spring", index * 0.5, 0.75)}
//       whileHover={{ scale: 1.0 }} // Enlarges on hover, none
//       transition={{ type: "spring", stiffness: 100 }} //bouncy effect
//       >
//      <div className="p-5 rounded-2xl sm:w-[360px] w-full custom-glass dark:bg-black/10">
//       {/* <Tilt // Tilt is moving around the hovering mouse very distractive
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full bg-white/5 backdrop-blur-sm shadow-lg'
//       > */}
//         <div className='relative w-full h-[230px]'>
//           <img
//             src={images[0]}
//             alt='project_image'
//             className='w-full h-full object-cover rounded-2xl '
//           />

//           {/* <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
//             >
//               <img
//                 src={github}
//                 alt='source code'
//                 className='w-1/2 h-1/2 object-contain'
//               />
//             </div>
//           </div> */}
//         </div>

//         <div className='mt-5'>
//           <h3 className='font-bold text-[24px]'>{name}</h3>
//           <p className='mt-2 text-[14px]'>{description}</p>
//         </div>

//         {/*  this is the hastage for software used
//         <div className='mt-4 flex flex-wrap gap-2'>
//           {tags.map((tag) => (
//             <p
//               key={`${name}-${tag.name}`}
//               className={`text-[14px] ${tag.color}`}
//             >
//               #{tag.name}
//             </p>
//           ))}
//         </div> */}
//       </div>
//       {/* </Tilt> */}
//     </motion.div>
//   );
// };

// const Works = () => {
//   const scrollContainerRef = useRef(null); 
//   const navigate = useNavigate();
//   //const [isHovered, setIsHovered] = useState(false);


//   //Function to handle the scroll on button click
//   const scroll = (direction) => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = direction === 'left' ? -300 : 300; // Adjust scroll distance
//       scrollContainerRef.current.scrollBy({
//         left: scrollAmount,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <div className='relative w-full h-full'>
    
//       {/* Content */}
//       <div className='relative z-10'>
//         <motion.div variants={textVariant()}>
//           <p className={`${styles.sectionSubText} `}>My work</p>
//           <h2 className={`${styles.sectionHeadText}`}>Featured Projects.</h2>
//         </motion.div>

//         <div className='w-full flex'>
//           <motion.p
//             variants={fadeIn("", "", 0.1, 1)}
//             className='mt-3 text-[17px] max-w-3xl leading-[30px]' // text-secondary 
//           >
//             Explore some works I've done over the years.
//           </motion.p>
//         </div>

//         {/* Horizontal scrolling container */}
//         <div className='mt-20 relative flex overflow-x-hidden overflow-y-hidden gap-7' ref={scrollContainerRef}>
//           {projects.map((project, index) => (
//             <ProjectCard key={`project-${index}`} index={index} {...project} />
//           ))}
//         </div>
      
//         <div className="flex justify-center items-center p-10">
//           <button onClick={() => navigate("/projects")} className="px-6 py-3 custom-glass dark:bg-black/10 hover:bg-blue-300 rounded-full">
//               Browse All Projects
//           </button>
//         </div>
        



        

//         {/* <div className='mt-20 flex overflow-x-auto gap-7'>
//           {projects.map((project, index) => (
//             <ProjectCard key={`project-${index}`} index={index} {...project} />
//           ))}
//         </div> */}
//       </div>
      
//     </div>
    



//   );
// };

// export default SectionWrapper(Works, "projects"); //inside "" is the thing for the navbar to highlight and link to the section
//=====================================================


import React from "react";
import { useRef, useState } from 'react';
//import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, video } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { projects as projectData } from "../project-utils/projectData";

import { fadeIn, textVariant } from "../utils/motion";
import { useNavigate } from "react-router-dom"; //for navigation
//import GooeyTooltip from "./small-stuff";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  media
}) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileHover={{ scale: 1.0 }} // Enlarges on hover, none
      transition={{ type: "spring", stiffness: 100 }} //bouncy effect
      >
     <div className="p-5 rounded-2xl sm:w-[360px] w-full custom-glass dark:bg-black/10">
      {/* <Tilt // Tilt is moving around the hovering mouse very distractive
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full bg-white/5 backdrop-blur-sm shadow-lg'
      > */}
        <div className='relative w-full h-[230px]'>
          <img
            src={media[0]}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl '
          />

          {/* <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div> */}
        </div>

        <div className='mt-5'>
          <h3 className='font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-[14px]'>{description}</p>
        </div>

        {/*  this is the hastage for software used
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div> */}
      </div>
      {/* </Tilt> */}
    </motion.div>
  );
};

const Works = () => {
  const scrollContainerRef = useRef(null); 
  const navigate = useNavigate();
  //const [isHovered, setIsHovered] = useState(false);


  //Function to handle the scroll on button click
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300; // Adjust scroll distance
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='relative w-full h-full'>
    
      {/* Content */}
      <div className='relative z-10'>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Featured Projects.</h2>
        </motion.div>

        <div className='w-full flex'>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-3 text-[17px] max-w-3xl leading-[30px]' // text-secondary 
          >
            Explore some works I've done over the years.
          </motion.p>
        </div>

        {/* Horizontal scrolling container */}
        <div className='mt-20 relative flex overflow-x-hidden overflow-y-hidden gap-7' ref={scrollContainerRef}>
          {projectData.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      
        <div className="flex justify-center items-center p-10">
          <button onClick={() => navigate("/projects")} className="px-6 py-3 custom-glass dark:bg-black/10 hover:bg-blue-300 rounded-full">
              Browse All Projects
          </button>
        </div>
        



        

        {/* <div className='mt-20 flex overflow-x-auto gap-7'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div> */}
      </div>
      
    </div>
    



  );
};

export default SectionWrapper(Works, "projects"); //inside "" is the thing for the navbar to highlight and link to the section