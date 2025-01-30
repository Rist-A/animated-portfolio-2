import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";

export default function Projects() {
  const [counters, setCounters] = useState(
    PROJECTS.map((project) => project.counter)
  );
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeProject, setActiveProject] = useState(null); 

  const handleToggleRate = (index) => {
    setCounters((prevCounters) => {
      const updatedCounters = [...prevCounters];
      updatedCounters[index] = updatedCounters[index] === 0 ? 1 : 0; 
      return updatedCounters;
    });
  };

  const handleProjectClick = (index) => {
    setActiveProject(index);
  };

  const handleCloseOverlay = () => {
    setActiveProject(null); 
  };

  return (
    <div section id="projects" className="relative border-b border-neutral-900 pb-4">
      <motion.h1
        className="my-20 text-center text-4xl"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className={`mb-8 flex flex-wrap lg:justify-center ${
              hoveredIndex === index
                ? "z-10 scale-105 brightness-110"
                : "grayscale"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleProjectClick(index)} // Set active project
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-full lg:w-1/4"
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded cursor-pointer"
              />
            </motion.div>
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <h6 className="mb-2 font-semibold cursor-pointer">
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="mr-2 rounded  px-2 py-1 text-sm font-medium text-coral-red"
                >
                  {tech}
                </span>
              ))}
              <div className="flex items-center space-x-4 mt-4">
                {/* GitHub Icon */}
                <a
                  href={project.gitlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:brightness-110 transition-transform transform hover:scale-110"
                >
                  <img
                    src={project.giticon}
                    alt="GitHub"
                    className="w-6 h-6 bg-white"
                  />
                </a>

                {/* Rating Icon with Counter */}
                <div
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleToggleRate(index);
                  }}
                  className="flex items-center cursor-pointer hover:brightness-110 transition-transform transform hover:scale-110"
                >
                  <img
                    src={project.rateicon}
                    alt="Rate"
                    className="w-6 h-6 mr-1"
                  />
                  <span className="text-sm font-medium text-neutral-400">
                    {counters[index]}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Overlay for active project */}
      {activeProject !== null && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-black p-6 rounded shadow-lg max-w-3xl w-full">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-xl font-bold text-red-500"
              onClick={handleCloseOverlay}
            >
              &times;
            </button>
            {/* Render the active project */}
            {activeProject === 0 && <Project1 />}
            {activeProject === 1 && <Project2 />}
            {activeProject === 2 && <Project3 />}
          </div>
        </div>
      )}
    </div>
  );
}
