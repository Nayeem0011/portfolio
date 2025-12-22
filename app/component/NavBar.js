"use client";

import { useState, useEffect, useRef } from 'react'
import { MdMenu, MdClose } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCode } from "react-icons/fa";

function NavBar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(id)
      setIsMobileMenuOpen(false) // Close mobile menu after clicking
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    ["home", "about", "skills", "projects", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll direction hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY.current && currentScroll > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-sm"
        >

          <nav className="max-w-7xl mx-auto px-3 py-3 md:px-4 md:py-6 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer">
              <FaCode className="text-secondary text-xl" />
              <span className="text-xl font-bold text-white tracking-wide">
                Nayeem<span className="text-secondary">.dev</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 text-gray-600 dark:text-gray-300">
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-medium px-4 py-2 rounded-full transition-all cursor-pointer 
                    ${activeSection === section
                      ? "bg-secondary text-primary"
                      : "text-white opacity-60"}
                       hover:bg-secondary dark:hover:text-primary hover:opacity-100
                    `}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            {/* Right Section: CV + Mobile Hamburger */}
            <div className="flex items-center space-x-4">
              <a
                className="hidden lg:block bg-secondary text-primary font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all"
                href="https://drive.google.com/file/d/14caD1rlRM_QEF0NfG7xy_kat3-C9Eczm/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>

              {/* Hamburger Button */}
              <button
                className="lg:hidden flex items-center justify-center p-2 mr-1 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <MdClose className="text-3xl text-gray-900 dark:text-white" />
                ) : (
                  <MdMenu className="text-3xl text-gray-900 dark:text-white" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Menu - Compact Version */}
          <div className="fixed top-16 right-4 z-50 lg:hidden">
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 200, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="bg-primary/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6 w-64"
                >
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.05
                        }
                      }
                    }}
                    className="flex flex-col space-y-3"
                  >
                    {["home", "about", "skills", "projects", "contact"].map((section, index) => (
                      <motion.button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 50, opacity: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`text-base font-medium px-4 py-2 rounded-lg text-left cursor-pointer transition-all ${activeSection === section
                          ? "bg-secondary text-primary"
                          : "text-white hover:bg-secondary/20"
                          }`}
                      >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </motion.button>
                    ))}

                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 50, opacity: 0 }}
                      transition={{ delay: 0.3 }}
                      className="pt-2 border-t border-white/20"
                    >
                      <a
                        className="block text-center bg-secondary text-primary font-semibold px-4 py-2 rounded-lg cursor-pointer"
                        href="https://drive.google.com/file/d/14caD1rlRM_QEF0NfG7xy_kat3-C9Eczm/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Download CV
                      </a>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </motion.header>
      )}
    </AnimatePresence>
  )
}

export default NavBar;

