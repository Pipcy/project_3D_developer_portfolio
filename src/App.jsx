// import { useState } from "react";
// import { BrowserRouter } from "react-router-dom";

// import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, VideoCanvas } from "./components";

// const App = () => {
//   const [entered, setEntered] = useState(false);  // State to track if the user has clicked "Enter"

//   return (
//     <BrowserRouter>
//       <div className='relative z-0'>
//         {/* Conditionally render loading page or the actual content */}
//         {!entered ? (
//           <LoadingPage onEnter={() => setEntered(true)} />
//         ) : (
//           <div className='relative z-0 {/*bg-[#ffffff]*/}'>
//             <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
//               <Navbar />
//               <Hero />
              
//             </div>
//             {/* <About /> */}
//             <Works />
//             <Experience />
//             {/* <Tech /> */}
//             {/* <Feedbacks /> */}
//             <div className='relative z-0'>
//               <Contact />
//             </div>
//             <StarsCanvas />
//             {/* <VideoCanvas /> */}
//         </div>
//         )}
//       </div>
//     </BrowserRouter>
//   );
// }

// function LoadingPage({ onEnter }) {
//   return (
//     <div className='flex flex-col items-center justify-center h-screen bg-gray-900 text-white'>
//       <h1 className='text-4xl mb-4'>PIPPI PI (Sound On) </h1>
//       <button 
//         className='bg-white px-6 py-2 rounded-lg text-black hover:bg-blue-700 transition'
//         onClick={onEnter}
//       >
//         Enter
//       </button>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, VideoCanvas, FloatingBlocksCanvas } from "./components";
import LoadingPage from './components/LoadingPage'; // Import the LoadingPage component
import ContactPage from './components/ContactPage'; // Import the ContactPage component

const App = () => {
  const [entered, setEntered] = useState(false);  // State to track if the user has clicked "Enter"

  return (
    <BrowserRouter>
      <div className='relative z-0'>
        {/* Conditionally render loading page or the actual content */}
        {!entered ? (
          <LoadingPage onEnter={() => setEntered(true)} />
        ) : (
          <>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <div className='relative z-0 {/*bg-[#ffffff]*/}'>
                <div className="absolute inset-0 bg-black/15 backdrop-blur-md z-0"></div> {/*matte black background*/}
                <div className='{/*bg-hero-pattern*/} bg-cover bg-no-repeat bg-center'>
                  <Hero />
                </div>
                
                <Works />
                <Experience />
                <About />
                {/* <Tech /> */}
                {/* <Feedbacks /> */}
                <div className='relative z-0'>
                  <Contact />
                </div>
                <StarsCanvas />
                <FloatingBlocksCanvas />
                
                {/* <VideoCanvas /> */}
              </div>
            }/>

            <Route path="/contact" element={<ContactPage />}/>

          </Routes>
        </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;