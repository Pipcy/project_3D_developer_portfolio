// import React from 'react';
// import './LoadingPage'; // Make sure to create this CSS file for styling

// const LoadingPage = () => {
//     return (
//         <div className='flex flex-col items-center justify-center h-screen bg-gray-900 text-white'>
//             <h1 className='text-4xl mb-4'>PIPPI PI (Sound On) </h1>
//             <button 
//                 className='bg-white px-6 py-2 rounded-lg text-black hover:bg-blue-700 transition'
//                 onClick={onEnter}
//             >
//                 Enter
//             </button>
//         </div>
//     );
// };

// export default LoadingPage;

// LoadingPage.js

// import React from 'react';

// function LoadingPage({ onEnter }) {
//   return (
//     <div className='flex flex-col items-center justify-center h-screen bg-gray-900 text-white'>
//       <h1 className='text-4xl mb-4'>PIPPI PI (Sound On)</h1>
//       <button 
//         className='bg-white/90 backdrop-blur-lg px-6 py-3 rounded-full text-black text-lg font-medium shadow-md hover:bg-white transition duration-300 ease-in-out active:scale-95'
//         onClick={onEnter}
//       >
//         Explore
//       </button>
//     </div>
//   );
// }

// export default LoadingPage;

import React, { useState, useEffect } from 'react';

function LoadingPage({ onEnter }) {
  const [progress, setProgress] = useState(0);
  const loadingTime = 1000; // 3 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1.5; // Adjust speed of progress fill
      });
    }, loadingTime / 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen primary-dark'>
      <h1 className='text-4xl mb-6 font-semibold tracking-tight'>PIPPI PI</h1>
      <div 
        className='relative w-56 h-12 rounded-full bg-white/20 overflow-hidden shadow-md' 
      >
        <div
          className='absolute top-0 left-0 h-full bg-white transition-all ease-in-out' 
          style={{ width: `${progress}%` }}
        />
        <button
          className={`bg-white/10 backdrop-blur-lg absolute top-0 left-0 w-full h-full text-black font-medium transition duration-300 ease-in-out ${progress < 100 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-gray-300 active:scale-95'}`}
          //bg-white/10 backdrop-blur-lg shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.2),0_8px_24px_rgba(0,0,0,0.2)]
          onClick={progress >= 100 ? onEnter : null}
          disabled={progress < 100}
        >
          {progress < 100 ? `Loading... ${Math.round(progress)}%` : 'Explore 探索!'}
        </button>
      </div>
    </div>
  );
}

export default LoadingPage;