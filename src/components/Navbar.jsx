import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for the hamburger menu
import backimg from "../assets/backimg/backimg.png";

export default function Navbar({ isBgWhite }) {
  const [activeNav, setActiveNav] = useState("Home");
  const [showAll, setShowAll] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = ["Home", "Work", "About", "Skill", "Contact"];

  const routes = {
    Home: () => navigate("/"),
    Work: () => navigate("/projects"),
    About: () => navigate("/about"),
    Skill: () => navigate("/experience"),
    Contact: () => navigate("/contact"),
  };

  useEffect(() => {
    if (showAll) {
      window.scrollTo(0, 0);
    }
  }, [showAll]);

  const handleNavClick = (item) => {
    if (item === "Home") {
      setShowAll(true);
      setActiveNav("Home");
      navigate("/");
    } else {
      setActiveNav(item);
      setShowAll(false);
      routes[item]?.();
    }
    setIsMenuOpen(false);
  };

  const handleBack = () => {
    setShowAll(true);
    setActiveNav("Home");
    navigate("/");
  };

  return (
    <>
      <div className={`flex justify-between items-center py-4 shadow-md px-4 ${isBgWhite ? "bg-white text-black" : "bg-neutral-950 text-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"}`}>
        {/* Left Section */}
        <div className="text-[28px] font-montserrat">
          <a href="#" onClick={() => handleNavClick("Home")}>
            Home
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden ">
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

      {/* Back button */}
      {!showAll && activeNav !== "Home" && (
        <div className="fixed mt-[90px] top-5 left-4">
          <button
            onClick={handleBack}
            className="px-4 py-2 rounded-md shadow-md hover:bg-orange-600 transition duration-200"
          >
            <img src={backimg} alt="Back" />
          </button>
        </div>
      )}
    </>
  );
}
