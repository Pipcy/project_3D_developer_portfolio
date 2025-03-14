import React from "react";

import { motion } from "framer-motion";
import { MailPlus, FileUser } from "lucide-react";

import { styles } from "../styles";
import { services, technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { buBlack, buRed, buWhite } from "../assets";
import { useTheme } from "../Theme/ThemeContext"; // Import ThemeContext

const About = () => {
  const { theme } = useTheme(); 
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Quick Glance</p>
        <h2 className={styles.sectionHeadText}> About </h2>
      </motion.div>

      <div className="flex flex-col [@media(min-width:1000px)]:flex-row gap-4 items-stretch">
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
            href="/resume_11_2_24.pdf"
            download 
            className="p-5 rounded-2xl flex items-center gap-2 hover:scale-105 transition-transform duration-200 custom-glass dark:bg-black/10"
          >
            <FileUser size={20} /> All Suit Up - Download resume
          </a>
          <a 
            className="p-5 rounded-2xl flex items-center gap-2 hover:scale-105 transition-transform duration-200 custom-glass dark:bg-black/10"
            onClick={() => navigator.clipboard.writeText('ppp@bu.edu')}
          >
            <MailPlus size={20} /> Say Hi - Copy email to clipboard
          </a>
        </div>

        {/* Right side - Flexible width */}
        <div className="md:flex-grow flex flex-col gap-4 h-full">
          <div className="break-words p-5 rounded-2xl custom-glass dark:bg-black/10 ">
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
    </>
  );
};

export default SectionWrapper(About, "about");
