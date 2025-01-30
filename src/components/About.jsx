import aboutimg from "../assets/about.jpg"
import computerr from "../assets/aboutmepic/computerr.jpg"
import { motion } from "framer-motion"

export default function About() {
    return (
        <div section id="about"className='border-b border-neutral-900 pb-4'>
            <motion.h1
                className='my-20 text-center text-4xl'
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1 }}
            >
                About <span className='text-neutral-500'>Me</span>
            </motion.h1>
            <div className='flex flex-wrap'>
                <motion.div
                    className='w-full lg:w-1/2 lg:p-8'
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <div className='flex items-center justify-center'>
                        <img className="rounded-2xl" src={computerr} alt="" />
                    </div>
                </motion.div>
                <motion.div
                    className="w-full lg:w-1/2"
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">
                        <div className="flex items-center gap-4">
         
          <div>
            <h1 className="text-2xl font-bold">Arsema Mengistu</h1>
            <p className="text-gray-500">| Creative Developer</p>
          </div>
        </div>

        
        <div className="mt-6 text-white-700">
          <p>
            Hello! My name is Arsema, and I am passionate about developing
            innovative tech solutions to address everyday challenges. Currently,
            I specialize in full-stack web development, with a strong focus on
            backend technologies like ASP.NET and Node.js. My journey in the
            tech world began in 2023, and since then, I have been deeply
            committed to mastering my craft. I am driven by a desire to create
            meaningful change and deliver cutting-edge innovations that inspire
            and empower.
          </p>
        </div>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
