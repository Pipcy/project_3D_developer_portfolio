
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
import { Link, useNavigate } from "react-router-dom"; //for navigation
//import GooeyTooltip from "./small-stuff";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  cover
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
            src={cover}
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
        {/* <div className='mt-20 relative flex overflow-x-hidden overflow-y-hidden gap-7' ref={scrollContainerRef}>
          {projectData.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))} */}

        <div className="w-full grid grid-cols-1 max-w-[400px] overflow-x-hidden md:grid-cols-2 md:max-w-[800px] gap-6 xl:grid-cols-3 xl:max-w-[1100px]">
          {projectData
            .filter(proj => [1, 2, 3].includes(proj.featuredNum)) // Keep only 1, 2, 3
            .sort((a, b) => a.featuredNum - b.featuredNum) // Ensure correct order
            .map((proj) => (
              <Link to={`/projects/${proj.slug}`} key={proj.slug} className="relative block overflow-hidden rounded-lg">
                <motion.div
                  className="relative h-[350px] rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Background Image */}
                  <div
                    className="rounded-3xl absolute inset-0 bg-cover bg-center transition-opacity duration-300"
                    style={{ backgroundImage: `url(${proj.cover})` }}
                  />
                  
                  {/* Project Title (Visible by Default, Hidden on Hover) */}
                  <motion.div
                    className="absolute bottom-4 right-4 text-lg font-bold text-white backdrop-blur-md px-2 py-1 rounded-xl"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* {proj.name} */}
                  </motion.div>

                  {/* Overlay & Tech Stack */}
                  <motion.div
                    className="absolute inset-0 bg-black/50 flex flex-col justify-center rounded-3xl items-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-4"
                  >
                    <h3 className="text-white text-lg font-bold">{proj.name}</h3>
                    <p className="text-white text-sm text-center pt-2">{proj.description}</p>
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                      {proj.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="custom-glass text-white text-xs font-semibold py-1 px-3 rounded-full shadow-md"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </Link>
          ))}
        </div>
      </div> 

        
      
      {/* button */}
        <div className="flex justify-center items-center p-10">
          <button onClick={() => navigate("/projects")} className="px-6 py-3 custom-glass dark:bg-black/10 rounded-full">
              Browse All Projects
          </button>
        </div>

        



        

        {/* <div className='mt-20 flex overflow-x-auto gap-7'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div> */}
      </div>
      

    



  );
};

export default SectionWrapper(Works, "projects"); //inside "" is the thing for the navbar to highlight and link to the section