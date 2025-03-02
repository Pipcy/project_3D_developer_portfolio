// src/context/ThemeContext.jsx
// import { createContext, useContext, useEffect, useState } from "react";

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   // Set dark mode as default
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // ✅ Ensure state is initialized correctly
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"; // Now defaults to "light"
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // ✅ Ensure toggleTheme is correctly defined
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};