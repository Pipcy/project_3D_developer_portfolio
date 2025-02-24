// import React from "react";
// import Tilt from "react-tilt";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { github, video } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
// }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
//       >
//         <div className='relative w-full h-[230px]'>
//           <img
//             src={image}
//             alt='project_image'
//             className='w-full h-full object-cover rounded-2xl'
//           />

//           <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
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
//           </div>
//         </div>

//         <div className='mt-5'>
//           <h3 className='text-white font-bold text-[24px]'>{name}</h3>
//           <p className='mt-2 text-secondary text-[14px]'>{description}</p>
//         </div>

//         <div className='mt-4 flex flex-wrap gap-2'>
//           {tags.map((tag) => (
//             <p
//               key={`${name}-${tag.name}`}
//               className={`text-[14px] ${tag.color}`}
//             >
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

// const Works = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} `}>My work</p>
//         <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
//       </motion.div>

//       <div className='w-full flex'>
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
//         >
//           Following projects showcases my skills and experience through
//           real-world examples of my work. Each project is briefly described with
//           links to code repositories and live demos in it. It reflects my
//           ability to solve complex problems, work with different technologies,
//           and manage projects effectively.
//         </motion.p>
//       </div>

//       <div className='mt-20 flex flex-wrap gap-7'>
//         {projects.map((project, index) => (
//           <ProjectCard key={`project-${index}`} index={index} {...project} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Works, "");

//=====================================================

import React from "react";
import { useRef } from 'react';
//import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, video } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileHover={{ scale: 1.03 }} // Enlarges on hover
      transition={{ type: "spring", stiffness: 100 }} //bouncy effect
      >
     <div className="p-5 rounded-2xl sm:w-[360px] w-full bg-white/10 backdrop-blur-lg shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.2),0_8px_24px_rgba(0,0,0,0.2)]">
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
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl '
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
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
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
      {/* </Tilt> */}
    </motion.div>
  );
};

const Works = () => {
  const scrollContainerRef = useRef(null); 

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
      {/* Background Video */}
      {/* <video 
        autoPlay 
        loop 
        muted 
        className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
      >
        <source src={video} type='video/mp4' />
      </video> */}
      
      {/* Content */}
      <div className='relative z-10'>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Featured Projects.</h2>
        </motion.div>

        <div className='w-full flex'>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Explore some works I've done over the years.
          </motion.p>
        </div>

        {/* Horizontal scrolling container */}
        <div className='mt-20 relative flex overflow-x-hidden overflow-y-hidde gap-7' ref={scrollContainerRef}>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>

        {/* Arrow Buttons at the bottom */}
        <div className="flex justify-between mt-5">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll('left')}
            className='bg-black/40 rounded-full p-3 text-white'>
            &lt;
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll('right')}
            className='bg-black/40 rounded-full p-3 text-white'>
            &gt;
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

export default SectionWrapper(Works, "");
