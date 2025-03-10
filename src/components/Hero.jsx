// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { ComputersCanvas, KnittedTorus, VideoCanvas } from "./canvas";
// import { Video } from "lucide-react";

// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 flex justify-center items-center  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         {/* a dot line on the side of the name}
//         {/* <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
//           <div className='w-1 sm:h-80 h-40 violet-gradient' />
//         </div> */}

//         <div>
//           <h1 className={`${styles.heroHeadText}`}>
//             PIPPI PI {/* <span className='text-[#915EFF]'>Pippi</span> */}
//           </h1>
//           <p className={`${styles.heroSubText} mt-2`}>
//             Computer Engineer, <br className='sm:block hidden' />
//             Prototyper, Game Designer, <br className='sm:block hidden' />
//             Artist
//           </p>
//         </div>
//       </div>

//       {/* <ComputersCanvas /> */}
//       {/* <VideoCanvas /> */}

//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-black dark:border-white flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-black dark:bg-white  mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { motion } from "framer-motion";
import { styles } from "../styles";
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center mx-auto px-4">
      <Spline
          scene="https://prod.spline.design/td8516Kk1UlT7fVz/scene.splinecode" 
          style={{
            width: '100%',
            height: '500px', // Adjust the height based on your layout
          }}
        />
      
      <div className="max-w-7xl">
        
        {/* Name & Title Section */}
        <h2 className="text-purple-400 text-lg font-semibold uppercase tracking-wide">
          Prototyper,
        </h2>
        <h1 className="text-5xl font-extrabold uppercase mt-2">
          Computer Engineer
        </h1>
        <p className="text-gray-400 text-sm mt-1">// Robotics & Machine Learning</p>

        <h1 className="text-[145px] font-bold ">
          PIPPI PI
        </h1>

        <h3 className="mt-4 text-xl">
          <span className="text-green-400 font-bold uppercase">Artist</span>,
          <span className="text-pink-400 font-bold uppercase"> Designer</span>,
          <span className="text-yellow-400 font-bold uppercase"> & Developer.</span>
        </h3>
        <p className="text-gray-400 text-sm mt-1">// Game Design</p>

        {/* Location */}
        <p className="mt-4">
          United States <span className="text-red-500">📍</span>
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 justify-center">
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full shadow-md">
            Connect w/ me
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full shadow-md">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;