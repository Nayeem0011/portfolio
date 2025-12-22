'use client';

import { FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const Pagetwo = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="w-full max-w-7xl mx-auto py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Image */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute inset-0 bg-linear-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Decorative circles */}
          <motion.div
            className="absolute top-0 sm:top-10 left-0 sm:left-10 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 border-2 border-secondary rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-0 sm:bottom-10 right-0 sm:right-10 w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 border-2 border-secondary rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/2 left-0 w-2 h-2 md:w-3 md:h-3 bg-secondary rounded-full"
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

          {/* Main Image Circle */}
          <motion.div
            className="relative z-10"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-50 h-50 sm:w-60 sm:h-60 md:w-70 md:h-70 lg:w-80 lg:h-80 rounded-full border-8 border-primary overflow-hidden shadow-2xl"
              animate={{
                borderColor: ["#0D2426", "#AEFF72", "#0D2426"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* <img 
                src="https://i.postimg.cc/L4gsjZTL/photo.png" 
                alt="Shukur" 
                className="w-full h-full object-cover"
              /> */}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center gap-1 md:gap-2 bg-secondary/20 py-1.5 px-2.5 md:py-2 md:px-4 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
            <span className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-medium text-gray-700 dark:text-gray-300">About Me</span>
          </motion.div>

          <motion.h2
            className="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[61px] font-bold text-gray-900 dark:text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Who is <span className="text-secondary">Nayeem</span>?
          </motion.h2>

          <motion.p
            className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-semibold text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            &quot;I help businesses grow by crafting creative, high-performance websites that turn ideas into results.&quot;
          </motion.p>

          <motion.p
            className="text-gray-600 text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] dark:text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Hi, I’m Nayeem, a Front-End Developer passionate about crafting modern, visually compelling interfaces. I focus on creativity, precision, and performance to bring ideas to life on the web.
          </motion.p>

          <motion.div
            className="space-y-2 sm:space-y-3 md:space-y-4 pt-3 md:pt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.div
              className="flex items-center gap-2 sm:gap-3 md:gap-4"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-secondary/20 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaEnvelope className="text-secondary text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]" />
              </motion.div>
              <div>
                <p className="text-[10px] sm:text-[12px] md:text-[14px] text-gray-500 dark:text-gray-400 -mb-2 sm:-mb-1.5 md:mb-0">Email Us At</p>
                <a href="mailto:sknayeemislam384@gmail.com" className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-semibold text-gray-900 dark:text-white hover:text-secondary transition-colors">
                  sknayeemislam384@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 sm:gap-3 md:gap-4"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-secondary/20 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaPhone className="text-secondary text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]" />
              </motion.div>
              <div>
                <p className="text-[10px] sm:text-[12px] md:text-[14px] text-gray-500 dark:text-gray-400 -mb-1.5 sm:-mb-1 md:mb-0">Phone Number</p>
                <a href="tel:+8801852705818" className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-semibold text-gray-900 dark:text-white hover:text-secondary transition-colors">
                  +880 1852 705 818
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 pt-5 md:pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.p
                className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px] font-bold text-secondary"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
              >
                01+
              </motion.p>
              <p className="text-gray-600 text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] dark:text-gray-400 font-medium md:mt-2">Years Experience</p>
            </motion.div>

            <motion.a
              className="text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex cursor-pointer items-center gap-1 md:gap-2 bg-secondary text-primary font-semibold sm:py-2.5 py-2 px-4 sm:px-5 md:py-3 md:px-6 rounded-full shadow-lg"
              href="https://drive.google.com/file/d/14caD1rlRM_QEF0NfG7xy_kat3-C9Eczm/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(174, 255, 114, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              My Resume
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight />
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pagetwo;