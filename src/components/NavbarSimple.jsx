// a navbar with just logo, theme toggle, and social buttons
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants"; // Ensure this has the correct sections and IDs
import { logoPurple, piLogoBlack, piLogoWhite, linkedin, linkedinBlack,linkedinWhite, github, githubWhite, githubBlack,sunBlack,sunWhite } from "../assets";
import { Sun, Moon, Paperclip, FileDown, PauseOctagon } from "lucide-react";
import { useTheme } from "../Theme/ThemeContext";

const NavbarSimple = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  // const [darkMode, setDarkMode] = useState( //
  //   document.documentElement.classList.contains("dark")//
  // );//
  const [hovered, setHovered] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Handle scroll behavior for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set up Intersection Observer to detect when sections are in view
  useEffect(() => {
    const sections = navLinks.map((nav) => document.getElementById(nav.id));
    const observerOptions = {
      rootMargin: "0px 0px -20% 0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  //Toggle dark mode
  // const toggleTheme = () => {
  //   document.documentElement.classList.toggle("dark");
  //   setDarkMode(!darkMode);
  // };

  return (   
    <>
      {/* Theme Toggle Button */}
      <div className="fixed top-10 right-10 z-50">
        <button
          onClick={toggleTheme}
          className="text-white p-2 rounded-full transition duration-300 flex items-center justify-center w-10 h-10 hover:bg-purple-300" //bg-gray-800 hover:bg-gray-600 shadow-md bg-gray-500
        >
          {theme === "dark" ? <Moon size={40} /> : <Sun size={40} color="black" />}
        </button>
      </div>

      <nav
        className={`fixed -left-20 top-5 h-full w-60 flex flex-col items-center py-5 z-20 transition-all duration-300 ${
          scrolled ? "{/*shadow-lg*/}" : ""
        }`}
      >
        
        <div className="flex flex-col items-center w-full flex-1">
          {/* logo */}
          <Link
            to="/"
            className="flex items-center gap-2 mb-10"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            
            <img 
              src={hovered? logoPurple : (theme === "dark" ? piLogoWhite : piLogoBlack)} 
              alt="logo" 
              className="w-10 h-10 object-contain" 
            />

          </Link>         
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col gap-4 mb-5">
          <a
            href="https://www.linkedin.com/in/pippi-pi/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-purple-300 transition duration-300" //bg-gray-800
          >
            <img src={theme === "dark" ? linkedinWhite : linkedinBlack } alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/Pipcy"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-purple-300 transition duration-300" //bg-gray-800
          >
            <img src={theme === "dark" ?  githubWhite : githubBlack} alt="GitHub" className="w-6 h-6" />
          </a>
          <a
            href="/resume_11_2_24.pdf" // Replace with the actual path to your resume file
            download="Resume_Pippi_Pi.pdf"
            className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-purple-300 transition duration-300" //bg-gray-800
          >
            {theme === "dark" ? <FileDown size={30} /> : <FileDown size={30} /> }
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavbarSimple;