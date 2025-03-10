// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function GooeyTooltip() {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="relative flex items-center justify-center h-screen">
//       {/* Button */}
//       <motion.button
//         className="px-6 py-3 text-white bg-blue-600 rounded-full relative z-10"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         Hover Me
//       </motion.button>

//       {/* Gooey Tooltip */}
//       {isHovered && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5, y: 10 }}
//           animate={{ opacity: 1, scale: 1, y: -10 }}
//           exit={{ opacity: 0, scale: 0.5, y: 10 }}
//           transition={{ type: "spring", stiffness: 200, damping: 15 }}
//           className="absolute bottom-16 px-4 py-2 text-sm text-white bg-blue-400 rounded-full"
//           style={{
//             filter: "url(#gooey)",
//           }}
//         >
//           I'm a Gooey Tooltip!
//         </motion.div>
//       )}

//       {/* SVG Filter for Gooey Effect */}
//       <svg className="absolute">
//         <defs>
//           <filter id="gooey">
//             <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
//             <feColorMatrix
//               in="blur"
//               mode="matrix"
//               values="1 0 0 0 0  
//                       0 1 0 0 0  
//                       0 0 1 0 0  
//                       0 0 0 20 -10"
//               result="gooey"
//             />
//             <feBlend in="SourceGraphic" in2="gooey" />
//           </filter>
//         </defs>
//       </svg>
//     </div>
//   );
// }