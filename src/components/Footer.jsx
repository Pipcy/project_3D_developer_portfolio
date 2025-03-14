

// const Footer = () => {
//   return (
//     <footer className="relative z-0 bg-gray-400/10 backdrop-blur-sm min-h-[150px] max-h-[270px] py-10 text-center overflow-hidden">
//       <p className="text-sm">&copy; {new Date().getFullYear()} PIPPI. ALL RIGHTS RESERVED.</p>
//       <p>CRAFTED BY YOURS TRULY. FROM LITERAL CHICKEN SCRATCH.</p>
//       <h1 className="text-[200px] font-bold relative text-black/20 dark:text-white/20">PIPPI PI</h1>
//     </footer>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <>
    <div className="custom-glass dark:bg-black/10 relative z-0 bg-gray-400/10 backdrop-blur-sm min-h-[150px] max-h-[270px] py-10 px-10 text-center overflow-hidden mx-20 rounded-3xl">
      <p className="text-sm">&copy; {new Date().getFullYear()} PIPPI. ALL RIGHTS RESERVED.</p>
      <p>CRAFTED BY YOURS TRULY. FROM LITERAL CHICKEN SCRATCH.</p>
      <h1 className="text-[200px] font-bold relative text-black/10 dark:text-white/10">PIPPI PI</h1>
    </div>
    <div className="p-3"/>
    </>
  );
};

export default Footer;