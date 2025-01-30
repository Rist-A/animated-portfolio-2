import { motion } from "framer-motion";
import mail from "../assets/Mail/mail.png";
import telegram from "../assets/tg/telegram.png";
import linkedin from "../assets/ld/linkedin.png";
import x from "../assets/x/x.png";
import github from "../assets/git/github.png";
import instagram from "../assets/insta/instagram.png";


export default function Connect() {


  return (
    <div section id="contact" className="border-b border-neutral-900 pb-20">
      <motion.h1
        className="my-10 text-center text-4xl"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        Connect with Me
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.div
          className="my-8 flex justify-center space-x-6"
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <a
            href="https://www.instagram.com/amesra_4/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-125 hover:shadow-lg"
          >
            <img
              className="w-10 h-10 rounded-full bg-white p-1"
              src={instagram}
              alt="Instagram"
            />
          </a>
          <a
            href="https://github.com/Arsema212"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-125 hover:shadow-lg"
          >
            <img
              className="w-10 h-10 rounded-full bg-white p-1"
              src={github}
              alt="GitHub"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/arsema-mengistu-a81809309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-125 hover:shadow-lg"
          >
            <img
              className="w-10 h-10 rounded-full bg-white p-1"
              src={linkedin}
              alt="LinkedIn"
            />
          </a>
          <a
            href="mailto:ristwubrist@gmail.com"
            className="transition transform hover:scale-125 hover:shadow-lg"
          >
            <img
              className="w-10 h-10 rounded-full bg-white p-1"
              src={mail}
              alt="Email"
            />
          </a>
          <a
            href="https://t.me/Arsema2124"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-125 hover:shadow-lg"
          >
            <img
              className="w-10 h-10 rounded-full bg-white p-1"
              src={telegram}
              alt="Telegram"
            />
          </a>
          <a
            href="https://x.com/AmesraMeng60449"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-125 hover:shadow-lg"
          >
            <img
              className="w-10 h-10 rounded-full bg-white p-1"
              src={x}
              alt="Twitter"
            />
          </a>
        </motion.div>
      </div>
  
    </div>
  );
}
