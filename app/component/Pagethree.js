'use client';

import { FaReact, FaHtml5, FaGitAlt, FaCss3 } from "react-icons/fa"
import { SiTailwindcss, SiJavascript, SiNextdotjs, SiTypescript, SiSass } from "react-icons/si"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const Pagethree = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-orange-500" />, level: 95, color: "from-orange-500 to-red-500" },
    { name: "CSS", icon: <FaCss3 className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-orange-500" />, level: 95, color: "from-orange-500 to-red-500" },
    { name: "JavaScript", icon: <SiJavascript className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-yellow-500" />, level: 90, color: "from-yellow-400 to-yellow-600" },
    { name: "React.js", icon: <FaReact className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-blue-500" />, level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "Next.js", icon: <SiNextdotjs className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-white" />, level: 85, color: "from-gray-700 to-gray-900" },
    { name: "Typescript", icon: <SiTypescript className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-green-600" />, level: 80, color: "from-green-500 to-green-700" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-cyan-500" />, level: 95, color: "from-cyan-400 to-blue-500" },
    { name: "Sass & Pug", icon: <SiSass className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-green-500" />, level: 70, color: "from-green-400 to-green-600" },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-orange-600" />, level: 85, color: "from-orange-500 to-red-600" },
  ]

  return (
    <section ref={ref} className="w-full max-w-7xl mx-auto py-12 md:py-20">
      <motion.div
        className="text-left mb-8 sm:mb-10 md:mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-flex items-center gap-1 md:gap-2 bg-secondary/20 py-1.5 px-2.5 md:py-2 md:px-4 rounded-full mb-3 sm:mb-4 md:mb-5 lg:mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="w-1 h-1 md:w-2 md:h-2 bg-secondary rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-medium text-gray-700 dark:text-gray-300">My Skills</span>
        </motion.div>

        <motion.h2
          className="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[61px] font-bold text-gray-900 dark:text-white leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Design, develop, deliver: my <span className="text-secondary">essential gear</span>
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="group relative bg-white dark:bg-gray-800 p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-secondary overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <motion.div
              className={`absolute inset-0 bg-linear-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
                  <motion.div
                    className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-15 xl:h-15 2xl:w-16 2xl:h-16 bg-linear-to-br from-secondary/20 to-primary/20 rounded-md sm:rounded-lg md:rounded-1xl lg:rounded-2xl flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-bold text-gray-900 dark:text-white group-hover:text-secondary transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-gray-500 dark:text-gray-400">Proficiency</p>
                  </div>
                </div>
                <motion.div
                  className="text-right"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: "spring" }}
                >
                  <span className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] font-bold text-secondary">{skill.level}%</span>
                </motion.div>
              </div>

              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 md:h-2 overflow-hidden">
                <motion.div
                  className={`h-full bg-linear-to-r ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pagethree;