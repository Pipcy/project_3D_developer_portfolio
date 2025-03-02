const Footer = () => {
    return (
      <footer className="relative z-0 bg-gray-400/10 backdrop-blur-sm min-h-[150px] py-10 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} PIPPI. CRAFTED BY YOURS TRULY. ALL RIGHTS RESERVED.</p>
        <div className="flex justify-center gap-4 mt-2">
          {/* <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-gray-400">
            Email
          </a> */}
        </div>
      </footer>
    );
  };
  
  export default Footer;