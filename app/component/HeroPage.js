'use client';

import Image from 'next/image';
import profile_image from './image/profile_image.jpg';

import { motion } from 'framer-motion'

const HeroPage = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main className="w-full max-w-7xl mx-auto md:h-140 lg:h-170 flex items-center mt-32 md:mt-8 lg:mt-24 mb-20 md:mb-0 pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        {/* Left Side - Text Content */}
        <motion.div
          className="text-center lg:text-left space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 },
            },
          }}
        >
          {/* Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            className="inline-flex items-center space-x-2 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-secondary/20 py-1.5 px-3 md:py-2 md:px-4 rounded-full"
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
                ease: 'easeInOut',
              }}
            />
            <span>Available for opportunities</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[61px] font-bold text-gray-900 dark:text-white leading-tight"
          >
            Hi, I&apos;m <span className="text-gradient">Nayeem</span>
            <br />
            <span className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px]">Front-End Developer</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0"
          >
            Fresh graduate passionate about creating beautiful web experiences. Skilled in React, Node.js, and modern web technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start pt-0 lg:pt-4"
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="bg-secondary text-primary text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] font-semibold px-5 py-2 md:px-8 md:py-3 rounded-full shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(174, 255, 114, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Get In Touch
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="bg-transparent text-secondary text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] font-semibold px-5 py-2 md:px-8 md:py-3 rounded-full shadow-lg border-2 border-secondary cursor-pointer"
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(174, 255, 114, 0.1)',
                boxShadow: '0 10px 30px rgba(174, 255, 114, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              View Work
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-linear-to-br from-secondary/40 to-accent/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="relative">
            <motion.div
              className="w-50 h-50 sm:w-60 sm:h-60 md:w-70 md:h-70 lg:w-80 lg:h-80 rounded-full shadow-2xl border-8 border-white dark:border-gray-800 overflow-hidden"
              initial={{ scale: 0, rotate: -180, y: 0 }}
              animate={{
                scale: 1,
                rotate: 0,
                y: [-10, 10, -10],
              }}
              transition={{
                scale: { duration: 1.2, delay: 0.5, type: "spring", stiffness: 100 },
                rotate: { duration: 1.2, delay: 0.5 },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.7
                }
              }}
              whileHover={{
                scale: 1.05,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 },
              }}
            >
              <Image className="w-full h-full object-cover" src={profile_image} alt="loading ..." />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-4 cursor-pointer"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex items-center gap-2 md:gap-3">
                <motion.div
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-linear-to-br from-secondary to-accent rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <span className="text-14 sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px]">🚀</span>
                </motion.div>
                <div>
                  <p className="text-[9px] sm:text-[11px] md:text-[12px] text-gray-500 dark:text-gray-400">Status</p>
                  <motion.p
                    className="text-[10px] sm:text-[12px] md:text-[14px] font-bold text-gray-900 dark:text-white"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Ready to Work
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default HeroPage;


