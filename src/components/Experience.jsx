import { SKILLS } from "../constants";
import { motion } from "framer-motion";

export default function Experience() {
    return (
        <div section id="skill" className="border-b border-neutral-900 pb-4">
            <motion.h1
                className="my-20 text-center text-4xl"
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1 }}
            >
                Proficiency Overview
            </motion.h1>
            <div className="flex flex-col items-center">
                {SKILLS.map((skills, index) => (
                    <motion.div
                        key={index}
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
                            <p className="mb-2 text-sm ">
                                {skills.Title}
                            </p>
                        </motion.div>
                        <motion.div
                            className="w-full max-w-xl lg:w-3/4"
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: 100, opacity: 0 }}
                            transition={{ duration: 1.5 }}
                        >
                            <h6 className="mb-2 font-semibold">
                                {skills.Proficiency} -
                                <span className="text-sm text-coral-red">
                                                                                                                                                                                                                                                  {skills.level}
                                </span>
                            </h6>
                            <p className="mb-4 text-neutral-400">
                                {skills.description}
                            </p>
                            {skills.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 font-medium text-coral-red"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
