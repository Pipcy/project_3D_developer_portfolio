import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { buBlack,buRed, buWhite } from "../assets";

import { useTheme } from "../Theme/ThemeContext"; // Import ThemeContext

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const { theme } = useTheme(); 
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Quick Glance</p>
        <h2 className={styles.sectionHeadText}> About </h2>
      </motion.div>

      {/* <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[17px] max-w-3xl leading-[30px]'
      >
        Hover to learn more.
      </motion.p> */}

      
      <div className="pl-8 flex flex-col [@media(min-width:1000px)]:flex-row gap-4 items-stretch">
        {/* Left side - Fixed width (440px) */}
        <div className="md:min-w-[440px] flex flex-col gap-4 h-full">
          <div className="p-5 rounded-2xl flex items-center gap-4 custom-glass dark:bg-black/10">
            <img src={theme === "dark" ? buWhite : buBlack } alt="University-logo" className="w-26 h-12 rounded-sm object-cover" />
            <div>
              <h3 className="text-lg font-semibold">B.S. Computer Engineering</h3>
              <p className="text-sm">Boston University • Expected May 2026</p>
            </div>
          </div>
          <a 
            className="p-5 rounded-2xl custom-glass dark:bg-black/10"
            onClick={() => navigator.clipboard.writeText('ppp@bu.edu')}
          >
            Copy email to clipboard
          </a>
          <a 
            href="/resume_11_2_24.pdf"
            download 
            className="p-5 rounded-2xl custom-glass dark:bg-black/10"
          >
            Click to download resume
          </a>
        </div>

        {/* Right side - Flexible width */}
        <div className="md:flex-grow flex flex-col gap-4 h-full">
          <div className="break-words p-5 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-2xl shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.2),0_8px_24px_rgba(0,0,0,0.2)]">
            <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
            {['language', 'framework', 'software'].map((category) => (
              <div key={category}>
                <h3 className="text-md mt-4 pb-1">{category.charAt(0).toUpperCase() + category.slice(1)}s</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.filter(item => item.tag === category).map((item) => (
                    <div key={item.name} className="flex items-center gap-2 p-2 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-md shadow-md hover:scale-105 transition-transform duration-200">
                      <img src={item.icon} alt={item.name} className="w-6 h-6" />
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
       

        
      
      {/* <div className='mt-20 flex flex-wrap gap-10'>

        Languages: Python, C++, C#, Go, Java, Swift.
        Tools: Git, Linux, Unreal Engine, Unity, Maya, Figma, CUDA, Flask, Docker, Verilog, Onshape.
        Libraries/API: OpenCV, Pytorch, Tensorflow, Arduino, Raspberry Pi, ChatGPT API, Azure TTS API, OpenAI Whisper .
      </div> */}
      
      {/* // the card thingy
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> 
      */}
    </>
  );
};

export default SectionWrapper(About, "about");
