// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { logo, logo2, menu, close } from "../assets";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`${
//         styles.paddingX
//       } w-full flex items-center py-5 fixed top-0 z-20 ${
//         scrolled ? "bg-primary" : "bg-transparent"
//       }`}
//     >
//       <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
//         <Link
//           to='/'
//           className='flex items-center gap-2'
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={logo2} alt='logo' className='w-9 h-9 object-contain' />
//           {/* <p className='text-white text-[18px] font-bold cursor-pointer flex '>
//             Pippi &nbsp;
//             <span className='sm:block hidden'> | Portfolio</span>
//           </p> */}
//         </Link>

//         <ul className='list-none hidden sm:flex flex-row gap-10'>
//           {navLinks.map((nav) => (
//             <li
//               key={nav.id}
//               className={`${
//                 active === nav.title ? "text-white" : "text-secondary"
//               } hover:text-white text-[18px] font-medium cursor-pointer`}
//               onClick={() => setActive(nav.title)}
//             >
//               <a href={`#${nav.id}`}>{nav.title}</a>
//             </li>
//           ))}
//         </ul>

//         <div className='sm:hidden flex flex-1 justify-end items-center'>
//           <img
//             src={toggle ? close : menu}
//             alt='menu'
//             className='w-[28px] h-[28px] object-contain'
//             onClick={() => setToggle(!toggle)}
//           />

//           <div
//             className={`${
//               !toggle ? "hidden" : "flex"
//             } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//           >
//             <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
//               {navLinks.map((nav) => (
//                 <li
//                   key={nav.id}
//                   className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                     active === nav.title ? "text-white" : "text-secondary"
//                   }`}
//                   onClick={() => {
//                     setToggle(!toggle);
//                     setActive(nav.title);
//                   }}
//                 >
//                   <a href={`#${nav.id}`}>{nav.title}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

//-----

//=======================================================

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { navLinks } from "../constants"; // Ensure this has the correct sections and IDs
// import { logo2, linkedin, github } from "../assets";
// // import ThemeToggle from "../Theme";
// import { Sun, Moon } from "lucide-react";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [scrolled, setScrolled] = useState(false);

//   // Handle scroll behavior for sticky navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setScrolled(scrollTop > 100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Set up Intersection Observer to detect when sections are in view
//   useEffect(() => {
//     const sections = navLinks.map((nav) => document.getElementById(nav.id));
//     const observerOptions = {
//       rootMargin: "0px 0px -20% 0px",
//       threshold: 0.5,
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActive(entry.target.id);
//         }
//       });
//     }, observerOptions);

//     sections.forEach((section) => {
//       if (section) observer.observe(section);
//     });

//     return () => {
//       sections.forEach((section) => {
//         if (section) observer.unobserve(section);
//       });
//     };
//   }, []);

//   return (   
//     <>
//     {/*Theme Toggle Button*/}
//     <div className="fixed top-5 right-5 z-50">
//       <button
//         onClick={() => {
//       document.documentElement.classList.toggle('dark');
//         }}
//         className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600 transition duration-300"
//       >
//         Toggle
//       </button>
//     </div>

//       <nav
//         className={`fixed -left-20 top-0 h-full w-60 flex flex-col items-center py-5 z-20 transition-all duration-300 ${
//           scrolled ? "shadow-lg" : ""
//         }`}
//       >
//         <div className="flex flex-col items-center w-full flex-1">
//           <Link
//             to="/"
//             className="flex items-center gap-2 mb-10"
//             onClick={() => {
//               setActive("");
//               window.scrollTo(0, 0);
//             }}
//           >
//             <img src={logo2} alt="logo" className="w-12 h-12 object-contain" />
//           </Link>

//           <ul className="list-none flex flex-col gap-10 w-full text-center flex-grow">
//             {navLinks.map((nav) => (
//               <li
//                 key={nav.id}
//                 className={`relative flex justify-center items-center h-20 w-full ${
//                   active === nav.id ? "text-white" : "text-secondary"
//                 } hover:text-white text-lg font-medium cursor-pointer transition duration-200`}
//                 onClick={() => {
//                   setActive(nav.id);
//                   const section = document.getElementById(nav.id);
//                   if (section) {
//                     section.scrollIntoView({ behavior: "smooth" });
//                   }
//                 }}
//               >
//                 <Link
//                   to={`#${nav.id}`}
//                   className="transform -rotate-90 block w-full text-center h-full flex items-center justify-center"
//                 >
//                   {nav.title}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Social Buttons */}
//         <div className="flex flex-col gap-4 mb-5">
//           <a
//             href="https://www.linkedin.com/in/pippi-pi/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-12 h-12 flex justify-center items-center bg-gray-800 rounded-full hover:bg-blue-600 transition duration-300"
//           >
//             <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
//           </a>
//           <a
//             href="https://github.com/Pipcy"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-12 h-12 flex justify-center items-center bg-gray-800 rounded-full hover:bg-gray-600 transition duration-300"
//           >
//             <img src={github} alt="GitHub" className="w-6 h-6" />
//           </a>
//         </div>
//         {/* <div className="bg-white/20 backdrop-blur-md p-4 rounded-lg shadow-lg">
//           Matte Glass Effect
//         </div> */}

        
//       </nav>
//     </>
//   );
// };

// export default Navbar;

//======

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants"; // Ensure this has the correct sections and IDs
import { logo2, logo3, linkedin, github } from "../assets";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

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

  // Toggle dark mode
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (   
    <>
      {/* Theme Toggle Button */}
      <div className="fixed top-10 right-10 z-50">
        <button
          onClick={toggleTheme}
          className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600 transition duration-300 flex items-center justify-center w-10 h-10"
        >
          {darkMode ? <Sun size={30} /> : <Moon size={30} />}
        </button>
      </div>

      <nav
        className={`fixed -left-20 top-0 h-full w-60 flex flex-col items-center py-5 z-20 transition-all duration-300 ${
          scrolled ? "{/*shadow-lg*/}" : ""
        }`}
      >
        <div className="flex flex-col items-center w-full flex-1">
          <Link
            to="/"
            className="flex items-center gap-2 mb-10"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo3} alt="logo" className="w-12 h-12 object-contain" />
          </Link>

          <ul className="list-none flex flex-col gap-10 w-full text-center flex-grow">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`relative flex justify-center items-center h-20 w-full ${
                  active === nav.id ? "text-white" : "text-secondary"
                } hover:text-white text-lg font-medium cursor-pointer transition duration-200`}
                onClick={() => {
                  setActive(nav.id);
                  const section = document.getElementById(nav.id);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <Link
                  to={`#${nav.id}`}
                  className="transform -rotate-90 block text-center inline-flex items-center justify-center"
                >
                  {/* {nav.title} */}
                  <span className="px-2 py-2 inline-block">{nav.title}</span>
                </Link>



              </li>
            ))}
          </ul>
         
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col gap-4 mb-5">
          <a
            href="https://www.linkedin.com/in/pippi-pi/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex justify-center items-center bg-gray-800 rounded-full hover:bg-blue-600 transition duration-300"
          >
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/Pipcy"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex justify-center items-center bg-gray-800 rounded-full hover:bg-gray-600 transition duration-300"
          >
            <img src={github} alt="GitHub" className="w-6 h-6" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;