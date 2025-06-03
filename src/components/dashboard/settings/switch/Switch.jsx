import React, { useEffect, useState } from "react";
import "./Switch.css";

export default function Switch() {
  
  const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {

    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const switchTheme = (e) => {
    setIsDark(e.target.checked);
  };

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          type="checkbox"
          onChange={switchTheme}
          checked={isDark}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}