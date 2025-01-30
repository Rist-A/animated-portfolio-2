import { motion } from "framer-motion";


export default function Testimonial() {
  return (
    <div  className="border-b border-neutral-900 pb-4">
      <motion.h1
        className="my-20 text-center text-4xl"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        Testimonials
      </motion.h1>
      <div className="flex flex-col items-center lg:flex-row lg:space-x-6">
        {/* Card 1 */}
        <motion.div
          className="mb-8 flex w-full max-w-4xl flex-col items-start rounded-lg border border-neutral-800  p-6 shadow-lg lg:flex-row lg:items-center lg:justify-between lg:p-8 mx-auto hover:brightness-110 focus-within:brightness-110 transition duration-300"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="w-full lg:w-1/4"
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
           
        
          </motion.div>
          <motion.div
            className="w-full max-w-xl lg:w-3/4"
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
         
            <h6 className="mb-2 font-semibold">Lemlem Hagos</h6>
            <p className="mb-4 ">
              "Arsema has demonstrated remarkable dedication and a strong aptitude for learning programming languages, particularly C++ and Java. Their problem-solving skills, logical thinking, and ability to grasp complex concepts quickly have set them apart in my classes at Addis Ababa University. Arsema's passion for coding and continuous improvement make them a promising programmer with a bright future ahead. "
            </p>
           
            <span className="mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 font-medium text-coral-red">
            Instructor
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 font-medium text-coral-red">
              Addis Ababa University
            </span>
          </motion.div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="mb-8 flex w-full max-w-4xl flex-col items-start rounded-lg border border-neutral-800 p-6 shadow-lg lg:flex-row lg:items-center lg:justify-between lg:p-8 mx-auto hover:brightness-110 focus-within:brightness-110 transition duration-300"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="w-full lg:w-1/4"
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
          
          </motion.div>
          <motion.div
            className="w-full max-w-xl lg:w-3/4"
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
          
            <h6 className="mb-2 font-semibold">Getachew kassahun</h6>
            <p className="mb-4 ">
              "It has been a pleasure teaching Arsema during their time at high school. Wubrist consistently demonstrated a strong understanding of the subjects they studied, with a particular interest in technology and problem-solving. They stand out as an exceptional student who not only excels in their academic work but also contributes positively to class discussions and group activities."
            </p>
        
            <span className="mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 font-medium text-coral-red">
               Director
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 font-medium text-coral-red">
              Kids Garden School
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 