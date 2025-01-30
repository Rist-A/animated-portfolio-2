import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import arsemapic from "../assets/arsemapic/arsemapic.jpg"

const Box = styled(motion.div)`
  position: relative;
  width: 65vw;
  height: 55vh;
  display: flex;
  background: linear-gradient(
      to right,
      ${(props) => props.theme.body} 50%,
      ${(props) => props.theme.text} 50%
    )
      bottom,
    linear-gradient(
      to right,
      ${(props) => props.theme.body} 50%,
      ${(props) => props.theme.text} 50%)
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center; /* Align content in the center */

  .pic {
    position: relative;  /* Change from absolute to relative */
    width: 80%;  /* Set a fixed width to keep it within the box */
    height: auto;  /* Keep the aspect ratio */
    border-radius: 50%; /* Keep it circular */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Optional: Add shadow to the image */
  }
`;


const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-weight: 300;
  }

  .typewriter {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid ${(props) => props.theme.body};
    animation: typing 4s steps(40, end), blink 0.9s step-end infinite alternate; 
    font-family: "Courier New", Courier, monospace;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 15ch; /* Adjust to match the length of "Hi, my name is" */
    }
  }

  @keyframes blink {
    from {
      border-color: transparent;
    }
    to {
      border-color: ${(props) => props.theme.body};
    }
  }
`;

export default function Head() {
  return (
    <div className="flex flex-col items-center pb-10 mt-20">
      <div className="p-6 md:p-10 lg:p-16 bg-coral-red-100 border border-gray-300 shadow-lg rounded-xl mx-auto my-10 max-w-screen-lg">
        <Box
          className="flex flex-col sm:flex-row h-auto"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ type: "spring", duration: 2, delay: 1 }}
        >
          <SubBox className="w-full sm:w-1/2 text-center">
            <Text className="w-full text-center">
              <p className="typewriter text-sm font-mono">Hi, my name is</p>
              <h1
                className="text-8xl sm:text-4xl relative z-10 text-[#FF6452] max-sm:text-[50px]"
                style={{ fontFamily: "Montserrat" }}
              >
                Arsema Mengistu.
              </h1>
              <h1
                className="text-4xl sm:block hidden"
                style={{ fontFamily: "Montserrat" }}
              >
                I am a fullstack developer
              </h1>

              <p className="ml-4 text-[15px] lg:text-sm italic hidden lg:block">
                <q>
                  Walking the path of innovation, I aim to leave my footprints
                  in technology, creating solutions that inspire and empower the
                  future.
                </q>
              </p>
            </Text>
          </SubBox>

          <SubBox className="w-full sm:w-1/2 flex justify-center mt-6 sm:mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <img
                className="pic rounded-full shadow-lg w-40 h-40 sm:w-48 sm:h-48"
                src={arsemapic}
                alt="Profile Pic"
              />
            </motion.div>
          </SubBox>
        </Box>
      </div>
    </div>
  );
}

