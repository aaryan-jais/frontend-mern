import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div
      onClick={() => setDark(!dark)}
      className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300
        ${dark ? "bg-gray-700 justify-end" : "bg-[#5E5E4A] justify-start"} shadow-md`}
    >
      <div
        className={`w-6 h-6 rounded-full bg-white flex items-center justify-center text-sm transition-all duration-300
          ${dark ? "translate-x-0" : "translate-x-0"} shadow-lg`}
      >
        {dark ? "🌙" : "☀️"}
      </div>
    </div>
  );
}
