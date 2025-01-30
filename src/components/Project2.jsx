import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aboutimg from "../assets/about.jpg";
import computerr from "../assets/aboutmepic/computerr.jpg";
import pcdemo1 from "../assets/pcdemo1/pcdemo1.png"
import pcdemo2 from "../assets/pcdemo2/pcdemo2.png"
import gitgif from "../assets/gitgif/gitgif.gif"
import { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

export default function Project2() {
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, 
  };
 
  return (
    <>
      <div className="border-b border-neutral-900 pb-4">
        <motion.h1
          className="my-20 text-center text-4xl"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          Pc <span className="text-neutral-500">Cleaner</span>
        </motion.h1>
        <div className="flex flex-wrap">
          {/* Image Carousel */}
          <motion.div
            className="w-full lg:w-1/2 lg:p-8"
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="flex items-center justify-center">
              <Slider {...settings} className="w-full max-w-md">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    className="w-full h-auto"
                    src={computerr}
                    alt="Slide 1"
                    style={{ maxWidth: "500px", height: "300px" }}
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    className="w-full h-auto"
                    src={pcdemo1}
                    alt="Slide 2"
                    style={{ maxWidth: "500px", height: "300px" }}
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    className="w-full h-auto"
                    src={pcdemo2}
                    alt="Slide 3"
                    style={{ maxWidth: "500px", height: "300px" }}
                  />
                </div>
              </Slider>
            </div>
          </motion.div>

          {/* Description Section */}
          <motion.div
            className="w-full lg:w-1/2"
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="flex justify-center lg:justify-start">
              <p className="my-2 max-w-xl py-6 first-line:indent-2 ">
                <div className="flex items-center gap-4">
                  {/* Name and Title */}
                  <div>
                    <h1 className="text-2xl font-bold">
                     Pc Cleaner Demo
                    </h1>
                    <p className="text-gray-500">
                      |React, Bootstrap
                    </p>
                  </div>
                </div>

                {/* Profile Content */}
                <div className="mt-6 text-white-700">
                <p>
  The PC Cleaner is a comprehensive yet easy-to-use application designed to optimize and maintain your computer's performance. Developed using React and Bootstrap, this tool offers an intuitive interface for cleaning up junk files, managing system resources, and enhancing overall speed.
</p>
<ul className="list-none pl-6 list-inside">
  <li>Junk File Removal</li>
  <li>System Resource Management</li>
  <li>Privacy Protection</li>
  <li>Performance Boost</li>
  <li>Real-time Scanning</li>
</ul>

                </div>
              </p>
            </div>
          </motion.div>
        </div>
        <div className="flex items-center space-x-4 mt-4">
            <p>Get the full code here </p>
                {/* GitHub Icon */}
                <a
                  href="https://github.com/Arsema212/anim-reposit-arsema-mengistu/blob/main/inner.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:brightness-110 transition-transform transform hover:scale-110"
                >
                   
                  <img
                    src={gitgif}
                    alt="GitHub"
                    className="w-6 h-6 bg-white"
                  />
                </a>


              </div>

      </div>
    </>
  );
}
