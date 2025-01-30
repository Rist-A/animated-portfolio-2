import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Connect from "./components/Connect";
import Experience from "./components/Experience";
import Head from "./components/Head";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import sun from "./assets/sun/sun.png"
import night from "./assets/moon/night.png"
import Testimonial from "./components/Testimonial"
function App() {
  const [scrollPosition, setScrollPosition] = useState(0); // Store scroll position
  const [previousPage, setPreviousPage] = useState(null); // Store previous page
  const [isBgWhite, setIsBgWhite] = useState(false); // Manage background toggle
  const [image, setImage] = useState(false);
  const toggleBackground = () => {
    setIsBgWhite((prev) => !prev); // Toggle the background state
    setImage((prev) => !prev);
  };

  return (
 
      <BrowserRouter>
        <Navbar 
          isBgWhite={isBgWhite} 
          toggleBackground={toggleBackground} 
          setScrollPosition={setScrollPosition} 
          setPreviousPage={setPreviousPage} 
        />
        <div className="overflow-x-hidden text-[#808080] antialiased selection:bg-cyan-300 selection:text-cyan-900">
          <div className="fixed top-0 -z-10 h-full w-full">
            <div
              className={`absolute top-0 z-[-2] h-screen w-screen ${
                isBgWhite
                  ? "bg-white text-black text-neutral-900"
                  : "bg-neutral-950  bg-neutral-900 text-neutral-400 text-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
              }`}
            ></div>
          </div>
          <div className="container mx-auto px-8">
            <Routes>
              <Route path="/" element={<Home scrollPosition={scrollPosition} />} />
              <Route path="/about" element={<About />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Connect" element={<Connect />} />
            </Routes>
          </div>
          <button
            onClick={toggleBackground}
            className="fixed bottom-8 right-8 p-4 bg-[#FF6452] text-white rounded-full shadow-lg"
          >
            <img
              src={image ? night : sun}
              alt="Toggle Image"
              className="w-4 h-4"
            />
          </button>
        </div>
      </BrowserRouter>

  );
}

function Home({ scrollPosition }) {
  React.useEffect(() => {
    window.scrollTo(0, scrollPosition); // Restore scroll position
  }, [scrollPosition]);

  return (
    <>
      <Head />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Testimonial/>
      <Contact />
      <Connect />
    </>
  );
}

export default App;
