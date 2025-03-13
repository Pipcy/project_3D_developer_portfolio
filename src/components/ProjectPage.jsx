// import { useNavigate } from "react-router-dom";
// import { proj1_img1 } from "../assets";
// import { projects }  from "../constants";

// const ProjectPage = () => {
//   const navigate = useNavigate();

//   const project = {
//     name: "Sample Project",
//     date: "March 2025",
//     company: "Tech Corp",
//     position: "Lead Developer",
//     description: "This is a sample project description showcasing the project details and images.This is a sample project description showcasing the project details and images.This is a sample project description showcasing the project details and images.This is a sample project description showcasing the project details and images.This is a sample project description showcasing the project details and images.",
//     images: [
//         proj1_img1,
//     ]
//   };

//   return (
//     <div className="flex h-screen w-full">
//       {/* Left Fixed Section */}
//       <div className="w-1/3 bg-gray-100 p-20 fixed h-full flex flex-col justify-between">
//         <div>
//           <h2 className="text-xl font-bold">{project.name}</h2>
//           <p className="text-gray-400">{project.date}</p>
//           <p className="mt-2">{project.company}</p>
//           <p className="text-sm text-gray-300">{project.position}</p>
//         </div>
//         <button className="bg-blue-600 hover:bg-black py-2 px-4 rounded-lg mt-4" onClick={() => alert('Next Project Clicked!')}>
//           Next Project
//         </button>
//       </div>

//       {/* Right Scrollable Section */}
//       <div className="flex-1 ml-1/3 p-20 overflow-y-auto relative">
//         {/* Close Button */}
//         <button className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl" onClick={() => alert('Returning Home!')}>x</button>
        
//         <div className="ml-auto w-2/3">
//           <h1 className="text-3xl font-bold mb-4">Overview</h1>
//           <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>
          
//           {/* Project Images */}
//           <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//             {project.images.map((img, index) => (
//               <img key={index} src={img} alt={`Project ${index + 1}`} className="w-full rounded-lg shadow-md" />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectPage;

import { motion } from "framer-motion";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../project-utils"; // Ensure projects array is imported
import Footer from "./Footer";
import { X } from "lucide-react";

const ProjectPage = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get project ID from URL
  // const [currentIndex, setCurrentIndex] = useState(0);

  // Find the correct project by ID
  //const project = projects.find((p) => p.id === id);

  const { slug } = useParams();
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    return <div className="text-center text-red-500">Project not found</div>;
  }

  const project = projects[currentIndex];

  // Get prev/next projects using circular indexing
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  
  // If project is not found, redirect or show an error
  if (!project) {
    return <div className="text-center text-red-500">Project not found</div>;
  }


  // const handleNextProject = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  // };

  // const handlePrevProject = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  // };
  const Banner = () => (
    <div
      style={{
        width: "100%",
        height: "500px",
        backgroundImage: `url(${project.banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );

  return (
    <div className="w-full h-screen relative">
    {/* Banner at the top */}
    <Banner />

    {/* Left Panel - Overlays on the left side of the banner */}
    <div
      className="w-1/3 p-20 text-white fixed top-10 left-10 h-full flex flex-col justify-between z-10"
    >
      <div>
      <p className="text-gray-300">{project.date}</p>
        <h2 className="text-5xl font-bold">{project.name}</h2>
        <p className="mt-2">{project.company}</p>
        <p className="text-sm text-gray-300">{project.position}</p>
      </div>

      

    </div>

    {/* Right Scrollable Section */}
    <div className="flex-1 ml-1/3 p-20 overflow-y-auto relative flex flex-col justify-between">
      {/* Close Button */}
      <motion.button
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-black shadow-md transition-all"
        onClick={() => navigate("/projects")}
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
      >
        <X className="w-6 h-6" />
      </motion.button>

      <div className="ml-auto w-2/3">
        <h1 className="text-3xl font-bold mb-4">Overview</h1>
        <p className="text-lg text-gray-700 leading-relaxed">{project.overview}</p>
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <p className="text-lg text-gray-700 leading-relaxed">{project.about}</p>
        <h1 className="text-3xl font-bold mb-4">Outcome</h1>
        <p className="text-lg text-gray-700 leading-relaxed">{project.outcome}</p>

        {/* Project Images */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-1 gap-4">
          {project.media.map((img, index) => (
            <img key={index} src={img} alt={`Project ${index + 1}`} className="w-full rounded-lg shadow-md" />
          ))}
        </div>
      </div>
      
      {/* Previous & Next Buttons */}
      <div className="absolute bottom-5 right-1/2 transform translate-x-1/2 flex space-x-4">
        <button
          onClick={() => navigate(`/projects/${prevProject.slug}`)}
          className="px-4 py-2 rounded-full w-40 hover:bg-blue-300 custom-glass dark:bg-black/10 "
        >
          Previous Project
        </button>
        <button
          onClick={() => navigate(`/projects/${nextProject.slug}`)}
          className="px-4 py-2 rounded-full w-40 hover:bg-blue-300 custom-glass dark:bg-black/10 "
        >
          Next Project
        </button>
      </div>
      
    </div>
    <Footer/>
  </div>
    
  );
};

export default ProjectPage;