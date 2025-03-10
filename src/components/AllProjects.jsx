// import { useState, useEffect } from "react";
// import { projects, getProjectsByCategory } from "../project-utils"; // Import from index.js
// import { Link } from "react-router-dom";

// const categories = ["All", "Engineering", "Game", "Other"];

// const AllProjects = () => {
//   useEffect(() => {window.scrollTo(0, 0);}, []); // Scroll to top on load

//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredProjects = selectedCategory === "All"
//     ? projects
//     : getProjectsByCategory(selectedCategory);

//   return (
//     <div className="flex flex-col items-center p-10 ">
      

//       {/* Category Tabs */}
//       <div className="fixed top-0 bg-white/10 dark:bg-black/10 backdrop-blur-md z-50 flex p-3 space-x-2 rounded-full  w-fit mt-10 shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.2),0_8px_24px_rgba(0,0,0,0.2)]">
//         {categories.map(category => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`py-2 px-4 shadow-md rounded-full transform transition duration-300 hover:scale-105 active:scale-95 ${
//               selectedCategory === category ? "bg-gray-300 dark:bg-gray-700" : "bg-white dark:bg-black"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       <h1 className="text-[120px] font-bold mb-4 pt-[100px]">Projects.</h1>

//       {/* Projects List */}
//       <div className="w-full grid grid-cols-1 max-w-[400px] md:grid-cols-2 md:max-w-[800px] gap-4 xl:grid-cols-3 xl:max-w-[1200px] ">
       
//         {filteredProjects.map(proj => (
//         <Link 
//             to={proj.link} 
//             key={proj.id} 
//             className="col-span relative block overflow-hidden p-4 h-[350px] rounded-lg custom-glass dark:bg-black/10"
//         >
//             {/* Background Image */}
//             <div
//               className="absolute inset-0 bg-cover bg-center"
//               style={{ backgroundImage: `url(${proj.media[0]})` }}
//             />
            
//             <div className="absolute bottom-4 right-4 text-lg font-bold backdrop-blur-md">
//               {proj.name}
//             </div>

            
            
//         </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllProjects;


import { useState, useEffect } from "react";
import { projects, getProjectsByCategory } from "../project-utils";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = ["All", "Engineering", "Game", "Other"];

const AllProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All" ? projects : getProjectsByCategory(selectedCategory);

  return (
    <div className="flex flex-col items-center p-10 ">
      {/* Category Tabs */}
      <div className="fixed top-0 bg-white/10 dark:bg-black/10 backdrop-blur-md z-50 flex p-3 space-x-2 rounded-full w-fit mt-10 shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.2),0_8px_24px_rgba(0,0,0,0.2)]">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`py-2 px-4 shadow-md rounded-full transform transition duration-300 hover:scale-105 active:scale-95 ${
              selectedCategory === category ? "bg-black/20 dark:bg-white/20" : "bg-white/10 dark:bg-black/10"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <h1 className="text-[120px] font-bold mb-4 pt-[100px]">Projects.</h1>
      <h3 className="mb-4 ">Learn more about me through my work.</h3>

      {/* Projects List */}
      <div className="w-full grid grid-cols-1 max-w-[400px] md:grid-cols-2 md:max-w-[800px] gap-4 xl:grid-cols-3 xl:max-w-[1200px]">
        {filteredProjects.map((proj) => (
          <Link to={`/projects/${proj.slug}`} key={proj.slug} className="relative block overflow-hidden rounded-lg">
            <motion.div
              className="relative h-[350px] rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
                style={{ backgroundImage: `url(${proj.media[0]})` }}
              />

              {/* Project Title (Visible by Default, Hidden on Hover) */}
              <motion.div
                className="absolute bottom-4 right-4 text-lg font-bold text-white backdrop-blur-md px-2 py-1 rounded"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {proj.name}
              </motion.div>

              {/* Overlay & Tech Stack */}
              <motion.div
                className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-4"
              >
                <h3 className="text-white text-lg font-bold">{proj.name}</h3>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {proj.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-xs font-semibold py-1 px-3 rounded-full shadow-md"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
