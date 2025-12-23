'use client';

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image';
import project1 from './image/project_image_01.png';
import project2 from './image/project_image_02.png';
import project3 from './image/project_image_03.png';
import project4 from './image/project_image_04.png';
import project5 from './image/project_image_05.png';
import project6 from './image/project_image_06.png';
import project7 from './image/project_image_07.png';
import project8 from './image/project_image_08.png';
import project9 from './image/project_image_09.png';
import project10 from './image/project_image_10.png';
import project11 from './image/project_image_11.png';

const Pageone = () => {
  const MotionImage = motion(Image);
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React and Tailwind CSS. Features smooth animations and responsive design.",
      tech: ["React", "Tailwind", "Framer Motion"],
      image: project1,
      github: "https://github.com/Nayeem0011/ANIMATION_PORTFOLIO",
      live: "https://nayeem-portfolio-website-01.netlify.app/"
    },
    {
      title: "Genesis Landing Page",
      description: "A modern landing page converted from a design into a live website. Focused on clean layout, smooth sections, and visual consistency.",
      tech: ["React", "CSS", "Tailwind"],
      image: project2,
      github: "https://github.com/Nayeem0011/web3_landing",
      live: "https://web3-landing-page-zeta.vercel.app/"
    },
    {
      title: "Business Landing Page",
      description: "A professional landing page built from Figma design using React and Tailwind CSS, focused on responsiveness and modern layout.",
      tech: ["React", "CSS", "Tailwind"],
      image: project3,
      github: "https://github.com/Nayeem0011/business-landing-page-react-tailwindcss",
      live: "https://business-landing-page-react-tailwin-gamma.vercel.app/"
    },
    {
      title: "E-commerce Shop",
      description: "A fully functional online store built with React and Tailwind CSS, featuring user authentication, cart management, address handling, and API integration.",
      tech: ["React", "API", "Router", "State management"],
      image: project4,
      github: "https://github.com/Nayeem0011/SPRWFORGE_ONLINE_SHOPPING_PROJECT",
      live: "https://sprwforge-online-shopping-project.vercel.app/"
    },
    {
      title: "Trading Landing Page",
      description: "A fully responsive landing page coded from Figma using Next.js and Tailwind CSS, designed for trading businesses.",
      tech: ["Next.js", "Typescript", "CSS", "Tailwind"],
      image: project10,
      github: "https://github.com/Nayeem0011/trading_landing_page",
      live: "https://trading-landing-page-one.vercel.app/"
    },
    {
      title: "Evogym Application",
      description: "A gym application website built with React and Tailwind CSS, allowing users to apply and register seamlessly.",
      tech: ["React", "CSS", "Tailwind"],
      image: project5,
      github: "https://github.com/Nayeem0011/EVOGYM_APPLICATION_WEBSITE",
      live: "https://evogym-application-website.vercel.app/"
    },
    {
      title: "Flavor Finder Website",
      description: "A recipe website built with React and Tailwind CSS, featuring category filters and video tutorials for creating a variety of dishes.",
      tech: ["React", "Router", "API", "Tailwind"],
      image: project6,
      github: "https://github.com/Nayeem0011/FLAVORFINDER_UI_WEBSITE",
      live: "https://flavorfinder-ui-website-crf1.vercel.app/"
    },
    {
      title: "Movies Website",
      description: "A dynamic entertainment platform built with React and Tailwind CSS, displaying API-driven data for movies and TV shows, including Now Playing, and Popular sections.",
      tech: ["React", "API", "Typescript", "Tailwind"],
      image: project7,
      github: "https://github.com/Nayeem0011/MOVIES_WEBSITE_PROJECT",
      live: "https://movies-website-project-seven.vercel.app/"
    },
    {
      title: "Smartphone Shop",
      description: "An online store built with React, Tailwind CSS, and Firebase, featuring user authentication, add-to-cart functionality, and order submission.",
      tech: ["React", "Firebase", "API", "Tailwind"],
      image: project8,
      github: "https://github.com/Nayeem0011/SIMPLE_SMART_PHONE_WEBSITE",
      live: "https://simple-smart-phone-website.vercel.app/"
    },
    {
      title: "Foods Website",
      description: "A full-featured food ordering platform, including search, cart, user authentication, order confirmation, and detailed order management.",
      tech: ["React", "Firebase", "API", "Tailwind"],
      image: project9,
      github: "https://github.com/Nayeem0011/FOOD_DELIVERY_WEBSITE_PROJECT",
      live: "https://food-delivery-website-07.netlify.app/"
    },
    {
      title: "FoxAI Landing Page",
      description: "A fully responsive landing page coded from Figma using Next.js and Tailwind CSS, designed with modern layouts and smooth user experience.",
      tech: ["Next.js", "Typescript", "CSS", "Tailwind"],
      image: project11,
      github: "https://github.com/Nayeem0011/foxai",
      live: "https://foxai-six.vercel.app/"
    }
  ]

  return (
    <section ref={ref} className="w-full max-w-7xl mx-auto py-20">
      <motion.div
        className="mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16"
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
          <span className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-medium text-gray-700 dark:text-gray-300">My Projects</span>
        </motion.div>

        <motion.h2
          className="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[61px] font-bold text-gray-900 dark:text-white leading-tight mb-2 md:mb-3 lg:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Showcasing my <span className="text-secondary">creative work</span>
        </motion.h2>
        <motion.p
          className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-gray-600 dark:text-gray-400 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Projects I&apos;ve built while learning web development
        </motion.p>
      </motion.div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="projects-swiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-secondary h-full"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden h-56">
                <MotionImage
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />

                <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/50 to-transparent opacity-60"></div>
                <motion.div
                  className="absolute bottom-4 left-4 right-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-[18px] sm:text-[19px] md:text-[20px] lg:text-[21px] xl:text-[22px] 2xl:text-[24px] font-bold text-white mb-2">{project.title}</h3>
                </motion.div>
              </div>
              <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                <p className="text-gray-600 text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] dark:text-gray-400 mb-2 sm:mb-3 md:mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="bg-secondary/20 text-secondary text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] py-1 px-2 md:py-1.5 md:px-3 rounded-full font-semibold"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(174, 255, 114, 0.3)" }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] items-center gap-2 bg-primary text-white py-1.5 px-3 md:py-2 md:px-4 rounded-full font-semibold"
                    whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(13, 36, 38, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-lg" /> Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] gap-2 bg-secondary text-primary px-4 py-2 rounded-full font-semibold"
                    whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(174, 255, 114, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Pageone;