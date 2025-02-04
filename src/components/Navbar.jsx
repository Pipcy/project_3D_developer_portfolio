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

// --------
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { logo2, menu, close } from "../assets";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setScrolled(scrollTop > 100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed -left-20 top-0 h-full w-60 flex flex-col items-center py-5 z-20 transition-all duration-300 ${
//         scrolled ? "shadow-lg" : ""
//       }`}
//     >
//       <div className='flex flex-col items-center w-full'>
//         <Link
//           to='/'
//           className='flex items-center gap-2 mb-10'
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={logo2} alt='logo' className='w-12 h-12 object-contain' />
//         </Link>

//         <ul className='list-none flex flex-col gap-10 w-full text-center'>
//           {navLinks.map((nav) => (
//             <li
//               key={nav.id}
//               className={`relative flex justify-center items-center h-20 w-full ${
//                 active === nav.title ? "text-white" : "text-secondary"
//               } hover:text-white text-lg font-medium cursor-pointer transition duration-200`}
//               onClick={() => setActive(nav.title)}
//             >
//               <a
//                 to={`#${nav.id}`} 
//                 className='transform -rotate-90 block w-full text-center h-full flex items-center justify-center'
//               >
//                 {nav.title}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo2, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed -left-20 top-0 h-full w-60 flex flex-col items-center py-5 z-20 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className='flex flex-col items-center w-full'>
        <Link
          to='/'
          className='flex items-center gap-2 mb-10'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo2} alt='logo' className='w-12 h-12 object-contain' />
        </Link>

        <ul className='list-none flex flex-col gap-10 w-full text-center'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative flex justify-center items-center h-20 w-full ${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-lg font-medium cursor-pointer transition duration-200`}
              onClick={() => {
                setActive(nav.title);
                const section = document.getElementById(nav.id);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Link 
                to={`#${nav.id}`} 
                className='transform -rotate-90 block w-full text-center h-full flex items-center justify-center'
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;