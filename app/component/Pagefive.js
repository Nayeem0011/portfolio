'use client';

import { FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

const Pagefive = () => {
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    const payload = {
      firstName: formData.get("First Name"),
      lastName: formData.get("Last Name"),
      email: formData.get("email"),
      phone: formData.get("Phone Number"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setShowSuccess(true);
        e.target.reset();
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="w-full max-w-7xl mx-auto py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side - Info */}
        <motion.div
          className="space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <div>
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
              <span className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-medium text-gray-700 dark:text-gray-300">Contact Us</span>
            </motion.div>

            <motion.h2
              className="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[61px] font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get in touch to discuss your <span className="text-secondary">next project</span>
            </motion.h2>

            <motion.p
              className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-gray-600 dark:text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Are you ready to take your project to the next level? Whether you&apos;re looking for a new website, a web application, or simply need advice.
            </motion.p>
          </div>

          <motion.div
            className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 pt-2 sm:pt-3 md:pt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="flex items-start gap-2 sm:gap-3 md:gap-4"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 bg-secondary/20 rounded-full flex items-center justify-center shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaMapMarkerAlt className="text-secondary text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]" />
              </motion.div>
              <div>
                <h3 className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-bold text-gray-900 dark:text-white mb-0 md:mb-1">Address</h3>
                <p className="text-gray-600 dark:text-gray-400 text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">
                  Kaliganj, Satkhira, <br /> Khlna, Bangladesh
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-2 sm:gap-3 md:gap-4"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 bg-secondary/20 rounded-full flex items-center justify-center shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaPhone className="text-secondary text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]" />
              </motion.div>
              <div>
                <h3 className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-bold text-gray-900 dark:text-white mb-0 md:mb-1">Phone Number</h3>
                <a href="tel:+8801799649027" className="text-gray-600 text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] dark:text-gray-400 hover:text-secondary transition-colors">
                  +880 1852 705 818
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Resume Badge */}
          <motion.a
            href="/Nayeem_Frontend_Developer_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-22 h-22 sm:w-24 sm:h-24 md:w-26 md:h-26 lg:w-28 lg:h-28 xl:w-30 xl:h-30 2xl:w-32 2xl:h-32 mt-8 block cursor-pointer group"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="absolute inset-0 bg-secondary rounded-full flex items-center justify-center animate-spin-slow group-hover:bg-primary transition-colors">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[8px] fill-primary group-hover:fill-white font-semibold uppercase tracking-wider transition-all">
                  <textPath href="#circlePath">
                    • MY RESUME • MY RESUME • MY RESUME • MY RESUME
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="w-11 h-11 sm:w-12 sm:h-12 md:w-13 md:h-13 lg:w-14 lg:h-14 xl:w-15 xl:h-15 2xl:w-16 2xl:h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
              >
                <span className="text-[18px] sm:text-[19px] md:text-[20px] lg:text-[21px] xl:text-[22px] 2xl:text-[24px]">📄</span>
              </motion.div>
            </div>
          </motion.a>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          className="bg-[#1a3a3a] dark:bg-gray-800 rounded-3xl p-6 sm:p-7 md:p-8 lg:p-10 shadow-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-300 mb-8 text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] leading-relaxed">
            Fill out the form below to connect with me. I&apos;ll get back to you soon to discuss your project or answer any questions.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
            <input type="hidden" name="_next" value="https://portfolio-eight-brown-1oc6wa2xk9.vercel.app/?success=true" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              <div>
                <label className="block text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-gray-400 mb-1 md:mb-2">First Name</label>
                <input
                  type="text"
                  name="First Name"
                  required
                  className="w-full py-2 px-3 lg:py-3 lg:px-4 bg-[#0f2828] border border-gray-700 rounded-lg text-white outline-none focus:border-primary transition-all text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-gray-400 mb-1 md:mb-2">Last Name</label>
                <input
                  type="text"
                  name="Last Name"
                  required
                  className="w-full py-2 px-3 lg:py-3 lg:px-4 bg-[#0f2828] border border-gray-700 rounded-lg text-white outline-none focus:border-primary transition-all text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              <div>
                <label className="block text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-gray-400 mb-1 md:mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full py-2 px-3 lg:py-3 lg:px-4 bg-[#0f2828] border border-gray-700 rounded-lg text-white outline-none focus:border-primary transition-all text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-gray-400 mb-1 md:mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="Phone Number"
                  className="w-full py-2 px-3 lg:py-3 lg:px-4 bg-[#0f2828] border border-gray-700 rounded-lg text-white outline-none focus:border-primary transition-all text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                  placeholder="+880 1852 705 818"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-gray-400 mb-1 md:mb-2">Message</label>
              <textarea
                rows="5"
                name="message"
                required
                className="w-full py-2 px-3 lg:py-3 lg:px-4 bg-[#0f2828] border border-gray-700 rounded-lg text-white outline-none focus:border-primary resize-none transition-all text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                placeholder="Your message here..."
              ></textarea>
            </div>

            {showSuccess && (
              <div className="bg-secondary/20 border md:border-2 border-secondary text-secondary py-2 px-4 md:py-3 md:px-5 lg:py-4 lg:px-6 rounded-lg text-center font-semibold text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">
                ✓ Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="bg-secondary text-primary font-medium md:font-bold py-2.5 px-5 sm:py-2.5 sm:px-6 md:py-3 md:px-7 lg:py-4 lg:px-8 rounded-full disabled:opacity-50 disabled:cursor-not-allowed text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(174, 255, 114, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Submit Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div
        className="flex justify-center gap-3 md:gap-4 mt-11 sm:mt-12 md:mt-14 lg:mt-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <motion.a
          href="https://github.com/Nayeem0011"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.2, backgroundColor: "#AEFF72", color: "#0D2426" }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px]" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/nayeem-11bd/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.2, backgroundColor: "#AEFF72", color: "#0D2426" }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px]" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/sknayeem6906/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.2, backgroundColor: "#AEFF72", color: "#0D2426" }}
          whileTap={{ scale: 0.9 }}
        >
          <FaInstagram className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px]" />
        </motion.a>
        <motion.a
          href="https://x.com/SknayeemIslam3"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.2, backgroundColor: "#AEFF72", color: "#0D2426" }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTwitter className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px]" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Pagefive;