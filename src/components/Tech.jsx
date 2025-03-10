// import React from "react";

// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");
import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import "tailwindcss/tailwind.css";

const Tech = () => {
  return (
    <div className='relative w-full overflow-hidden '>
      <div className='flex space-x-10 animate-marquee'>
        {technologies.concat(technologies).map((technology, index) => (
          <div className='w-20 h-20 flex-shrink-0' key={index}>
            <img src={technology.icon} alt={technology.name} className='w-full h-full object-contain' />
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 30s linear infinite; 
            width: max-content;
          }
        `}
      </style>
    </div>
  );
};

export default SectionWrapper(Tech, "");

