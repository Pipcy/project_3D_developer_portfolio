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

import React from 'react';

function LoadingPage({ onEnter }) {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-900 text-white'>
      <h1 className='text-4xl mb-4'>PIPPI PI (Sound On)</h1>
      <button 
        className='bg-white px-6 py-2 rounded-lg text-black hover:bg-blue-700 transition'
        onClick={onEnter}
      >
        Enter
      </button>
    </div>
  );
}

export default LoadingPage;