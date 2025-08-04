import  { useState } from 'react';
import { Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext"; // Make sure path is correct
import clsx from "clsx";
import { themeStyles } from "../utils/ThemeClasses";


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
  const current = themeStyles[theme];


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={clsx("h-[10vh] flex justify-between items-center px-4 md:px-10 sticky  z-1000", current.navbar)}>
      {/* Logo / App Name */}
      <div className={clsx("text-gray-800 text-lg md:text-xl font-medium tracking-tight", current.logo)}>
        <Link to="/" className={clsx("hover:opacity-80 transition text-2xl font-medium", current.logo)}>iShop</Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4">
        {/* Nav Links */}
        <div className={clsx("text-sm md:text-base flex gap-3 md:gap-5", current.navText)}>
          <Link to="/" className={clsx("transition-all duration-500", current.navText)}>Home</Link>
          <Link  to="https://faisalzportfolio.netlify.app/" className={clsx("transition-all duration-500", current.navText)}>Developer</Link>
          <Link to="/contact" className={clsx("transition-all duration-500", current.navText)}>Contact</Link>
          <Link to="/about" className={clsx("transition-all duration-500", current.navText)}>About</Link>
        </div>

        {/* Theme Switcher */}
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as typeof theme)}
          className="ml-4 px-2 py-1 rounded border text-gray-700 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1 z-44"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className={clsx(
            "fixed inset-0 md:hidden z-50 transition-all duration-300",
            theme === "theme1" && "bg-[rgba(255,255,255,0.6)]",
            theme === "theme2" && "bg-[rgba(0,0,0,0.6)]",
            theme === "theme3" && "bg-[rgba(254,240,138,0.2)]"
        )}
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-[10vh] right-0 bg-white shadow-lg border-l border-gray-200 w-64 h-[90vh] z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-6 space-y-6">
          {/* Mobile Nav Links */}
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={clsx("transition text-lg py-2 border-b", current.navSideText)}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/developer" 
              className={clsx("transition text-lg py-2 border-b", current.navSideText)}
              onClick={toggleMenu}
            >
              Developer
            </Link>
            <Link 
              to="/contact" 
              className={clsx("transition text-lg py-2 border-b", current.navSideText)}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link 
              to="/about" 
              className={clsx("transition text-lg py-2 border-b", current.navSideText)}
              onClick={toggleMenu}
            >
              About
            </Link>
          </div>

          {/* Mobile Theme Switcher */}
          <div className="pt-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Theme</label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value as typeof theme)}
              className="w-full px-3 py-2 rounded border text-gray-700 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
            >
              <option value="theme1">Theme 1</option>
              <option value="theme2">Theme 2</option>
              <option value="theme3">Theme 3</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;