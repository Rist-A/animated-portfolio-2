import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aboutimg from "../assets/about.jpg";
import computerr from "../assets/aboutmepic/computerr.jpg";
import hrental from "../assets/houseproject1/hrental.png";
import houseproject from "../assets/housrproject2/houseproject .png";
import gitgif from "../assets/gitgif/gitgif.gif"
import { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

export default function Project1() {

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
      <div className="border-b  pb-4">
        <motion.h1
          className="my-20 text-center text-4xl"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          Neo <span className="text-neutral-500">Homes</span>
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
                    src={hrental}
                    alt="Slide 2"
                    style={{ maxWidth: "500px", height: "300px" }}
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    className="w-full h-auto"
                    src={houseproject}
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
                      Apartment Rental and Sales System
                    </h1>
                    <p className="text-gray-500">
                      |ASP.NET Core , C# , JWT Authentication,
                    </p>
                  </div>
                </div>

                {/* Profile Content */}
                <div className="mt-6 text-white-700">
                  <p>
                    The House Rental and Sales System is a sophisticated yet
                    user-friendly platform designed to simplify property
                    management for brokers, landlords, and tenants. Built using
                    ASP.NET Core with a robust Web API, this system offers a
                    seamless experience for listing, renting, and buying
                    properties.
                    </p>
                    <ul className="list-none pl-6 list-inside">
                        <li>Property Listings</li>
                        <li>Advanced Search Filters</li>
                        <li>User Management</li>
                        <li>Transaction Support</li>
                        <li>Responsive Interface</li>
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
