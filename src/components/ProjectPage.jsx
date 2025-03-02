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


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../constants"; // Ensure projects array is imported

const ProjectPage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const project = projects[currentIndex];

  const handleNextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="flex h-screen w-full">
      {/* Left Fixed Section */}
      <div className="w-1/3 bg-gray-100 p-20 fixed h-full flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold">{project.name}</h2>
          <p className="text-gray-400">{project.date}</p>
          <p className="mt-2">{project.company}</p>
          <p className="text-sm text-gray-300">{project.position}</p>
        </div>
        <div className="flex justify-between">
          <button
            className="bg-gray-500 hover:bg-black text-white py-2 px-4 rounded-lg"
            onClick={handlePrevProject}
          >
            Previous
          </button>
          <button
            className="bg-blue-600 hover:bg-black text-white py-2 px-4 rounded-lg"
            onClick={handleNextProject}
          >
            Next
          </button>
        </div>
      </div>

      {/* Right Scrollable Section */}
      <div className="flex-1 ml-1/3 p-20 overflow-y-auto relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
          onClick={() => navigate("/")}
        >
          x
        </button>

        <div className="ml-auto w-2/3">
          <h1 className="text-3xl font-bold mb-4">Overview</h1>
          <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>

          {/* Project Images */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((img, index) => (
              <img key={index} src={img} alt={`Project ${index + 1}`} className="w-full rounded-lg shadow-md" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;