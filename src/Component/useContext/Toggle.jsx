import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export default function Toggle({ children }) {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage to persist user preference
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : false;
  });

  const handleToggle = () => {
    setIsDark((prev) => !prev);
  };

  // Update body classes and save preference
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("bg-gray-900", "text-white");
      document.body.classList.remove("bg-gray-50", "text-black");
    } else {
      document.body.classList.add("bg-gray-50", "text-black");
      document.body.classList.remove("bg-gray-900", "text-white");
    }

    // Persist theme choice
    localStorage.setItem("theme", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, handleToggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
