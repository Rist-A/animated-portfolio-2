import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";


export default function Navbar({ isBgWhite }) {
  const [activeNav, setActiveNav] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Projects", "Skill", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "Home";
      navItems.forEach((item) => {
        const section = document.getElementById(item.toLowerCase());
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = item;
          }
        }
      });
      setActiveNav(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (item) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const section = document.getElementById(item.toLowerCase());
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <>
      <div className={`flex justify-between items-center py-4 shadow-md px-4 navbar fixed w-full ${isBgWhite ? "bg-white text-black" : "bg-coral-red-100 text-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"}`}>
        {/* Left Section */}
        <div className="text-[28px] font-montserrat">
          <a href="#" onClick={() => handleNavClick("Home")}>Home</a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          {isMenuOpen ? (
            <X size={28} onClick={() => setIsMenuOpen(false)} className="cursor-pointer" />
          ) : (
            <Menu size={28} onClick={() => setIsMenuOpen(true)} className="cursor-pointer" />
          )}
        </div>

        {/* Navigation Items (Desktop) */}
        <div className="hidden lg:flex text-[18px] font-montserrat gap-6">
          {navItems.map((item) => (
            <div
              key={item}
              className={`relative cursor-pointer ${activeNav === item ? "font-bold" : "font-normal"}`}
              onClick={() => handleNavClick(item)}
            >
              <a href="#">{item}</a>
              {activeNav === item && (
                <div className="absolute left-0 right-0 h-[2px] bg-orange-500 bottom-[-2px] transition-all duration-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800 text-[18px] font-montserrat flex flex-col items-center gap-6 py-4">
          {navItems.map((item) => (
            <div
              key={item}
              className={`relative cursor-pointer ${activeNav === item ? "font-bold" : "font-normal"}`}
              onClick={() => handleNavClick(item)}
            >
              <a href="#">{item}</a>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
