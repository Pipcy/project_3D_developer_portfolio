import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
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
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}> About </h2>
      </motion.div>

      {/* <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[17px] max-w-3xl leading-[30px]'
      >
        Hover to learn more.
      </motion.p> */}

      
      <div className="flex flex-col md:grid md:grid-cols-10 gap-4">
        {/* Left side - Larger (7/10) */}
        <div className="md:col-span-6 flex flex-col gap-4">
          <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-lg shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.2),0_8px_24px_rgba(0,0,0,0.2)]">
            Hi there! Welcome. I am an engineer that thrives on creative challenges and teamwork.
          </div>
          <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-lg shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.2),0_8px_24px_rgba(0,0,0,0.2)]">
            Skills
          </div>
        </div>

        {/* Right side - Smaller (3/10) */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-lg shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.2),0_8px_24px_rgba(0,0,0,0.2)] flex items-center gap-4">
            <img src={theme === "dark" ? buWhite : buBlack } alt="University-logo" className="w-26 h-12 rounded-sm object-cover" />
            <div>
              <h3 className="text-lg font-semibold">B.S. Computer Engineering</h3>
              <p className="text-sm">Boston University • 2026</p>
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-lg shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.2),0_8px_24px_rgba(0,0,0,0.2)]">
            Copy email to clipboard
          </div>
          <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-lg shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.2),0_8px_24px_rgba(0,0,0,0.2)]">
            Click to download resume
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
