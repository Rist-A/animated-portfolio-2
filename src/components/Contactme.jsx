import React from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import uppdatedpic from "../assets/pp/uppdatedpic.png"
const Contactme = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    emailjs
      .sendForm(
        "service_gnbot9", //  EmailJS service ID
        "template_ueti4fg", //  EmailJS template ID
        form,
        "t_WRSM-HmIiK_F_1e" //  EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
          form.reset();
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send the message. Please try again.");
        }

      );
  };
  

  return (
    <div className=" font-sans text-White  flex flex-col items-center justify-center p-4">
      {/* Title Section with Motion */}
      <motion.div
        className="text-center mb-12"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-xl font-bold leading-tight">Let's Work Together</h1>
      </motion.div>

      {/* Main Content */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-between gap-8">
        {/* Form Section with Motion */}
        <motion.div
          className="flex-1"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                What's your name?
              </label>
              <input
                id="name"
                name="user_name" // EmailJS field mapping
                type="text"
                placeholder="Wubrist Alemu"
                className="w-full text-black p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                What's your email?
              </label>
              <input
                id="email"
                name="user_email" // EmailJS field mapping
                type="email"
                placeholder="ristwubrist@gmail.com"
                className="w-full text-black p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message" // EmailJS field mapping
                placeholder="Hello,..."
                rows="4"
                className="w-full text-black p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                maxLength={500}
                required
              />
            </div>
            <div className="text-center mt-8">
              <motion.button
                type="submit"
                className="bg-coral-red hover:bg-[#FF6452] text-white py-4 px-12 rounded-full text-lg font-semibold transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Send it!
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Profile Section with Motion */}
        <motion.div
          className="flex-1 text-gray-400"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="flex flex-col items-center lg:items-start">
            <motion.img
              src={uppdatedpic}
              alt="Profile"
              className="w-24 h-24 rounded-full mb-6"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ duration: 0.5 }}
            />
            <div className="text-center lg:text-left">
              <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
              <p className="mb-2">ristwubrist@gmail.com</p>
              <p className="mb-2">+251-904601880</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contactme;
