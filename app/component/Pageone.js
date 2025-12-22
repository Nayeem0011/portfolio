'use client';

import Marquee from "react-fast-marquee"
import { FaReact, FaHtml5, FaGitAlt, FaCss3, FaSass } from "react-icons/fa"
import { SiTailwindcss, SiJavascript, SiNextdotjs, SiDaisyui, SiTypescript } from "react-icons/si"

const Pageone = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "CSS3", icon: <FaCss3 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "JAVASCRIPT", icon: <SiJavascript className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "REACT.JS", icon: <FaReact className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "NEXT.JS", icon: <SiNextdotjs className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "TYPESCRIPT", icon: <SiTypescript className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "TAILWIND CSS", icon: <SiTailwindcss className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "DAISY UI", icon: <SiDaisyui className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "SASS & PUG", icon: <FaSass className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
    { name: "GIT & GITHUB", icon: <FaGitAlt className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]" /> },
  ]

  return (
    <div className="w-full py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 bg-secondary overflow-hidden">
      <Marquee speed={60} gradient={false} pauseOnHover={false}>
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2 sm:gap-4 md:gap-4 lg:gap-6 xl:gap-8 mx-1 sm:mx-2 md:mx-2 lg:mx-3 xl:mx-4">
            <div className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 bg-primary/20 py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 rounded-full">
              <span className="text-primary dark:text-primary">{skill.icon}</span>
              <span className="text-primary dark:text-primary font-bold text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] whitespace-nowrap uppercase tracking-wide">
                {skill.name}
              </span>
            </div>
            <span className="text-primary dark:text-primary text-[18px] sm:text-[20px] md:text-[21px] lg:text-[22px] xl:text-[23px] 2xl:text-[24px]">✦</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Pageone;