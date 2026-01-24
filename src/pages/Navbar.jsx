import { Link } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="dark:bg-gray-900 dark:text-white  bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#5E5E4A]">
          MyStore
        </Link>

        {/* Desktop Menu */}
        <div className="font dark:text-white hidden uppercase md:flex space-x-8 text-gray-700">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <Link to="/login" className="hover:text-blue-600">Login</Link>
          <Link to="/signup" className="hover:text-blue-600">Register</Link>
        </div>

        <ThemeToggle />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="dark:text-white dark:bg-gray-900 md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <Link to="/" className="block hover:text-blue-600">Home</Link>
          <Link to="/products" className="block hover:text-blue-600">Products</Link>
          <Link to="/login" className="block hover:text-blue-600">Login</Link>
          <Link to="/signup" className="block hover:text-blue-600">Register</Link>
          
        </div>
      )}
    </nav>
  );
}
