import React from "react";
import Button from "./Inputs/Button";
import Image from "next/image";
import HeroImage from "@/images/hero.png";
import { TbCoffee } from "react-icons/tb";
import { GoProjectRoadmap } from "react-icons/go";
import { SlBadge } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";
import { Typewriter } from "nextjs-simple-typewriter";

const Hero = () => {
  return (
    <div className="pt-8 md:pt-0" id="about">
      <div className="mt-16  w-full lg:w-8/12 h-full lg:m-auto lg:min-h-[600px] lg:h-auto flex flex-col lg:flex-row items-center justify-center bg-[#f7f3f2] p-4">
        <div className="flex-1 lg:w-8/12 flex flex-col items-center lg:items-start text-center lg:text-left p-4 lg:pl-8 lg:pr-16 md:p-8">
          <p className="text-[#fd6e0a] text-2xl sm:text-3xl font-semibold 2xl:mb-6 2xl:pl-2">
            Hi, I{"'"}m
          </p>
          <p className="text-[#15295f] text-2xl sm:text-3xl 2xl:text-[4rem] font-bold 2xl:mb-8 ">
            John Benedict Regore
          </p>
          <p className="text-[#15295f] text-md sm:text-lg md:text-2xl pr-6 font-maven_pro">
            <Typewriter
              words={[
                `A passionate web developer on a mission to transform ideas into immersive digital experiences.`,
                `Let's collaborate and turn your digital dreams into reality.`,
                `Dive into the world of software development, where innovation meets implementation!`,
              ]}
              loop={0}
              cursorBlinking
              typeSpeed={30}
              deleteSpeed={20}
            />
          </p>
          <div className="mt-4">
            <a
              href="https://firebasestorage.googleapis.com/v0/b/midterm-redux.appspot.com/o/John%20Benedict%20T%20Regore.pdf?alt=media&token=a19fcf0a-a24e-4126-b038-a30cabc57f72"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
              }}
            >
              <Button title="Download CV" icon={<FaRegFilePdf />} />
            </a>

            <a
              href="https://github.com/jbregore"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
              }}
            >
              <Button title="Github" icon={<FaGithub />} />
            </a>
          </div>
        </div>
        <div className=" flex-none flex items-center justify-center order-first lg:order-last">
          <Image
            src={HeroImage}
            alt="Logo"
            className="rounded-full w-[150px] h-[150px] sm:w-[230px] sm:h-[230px] md:w-[300px] md:h-[300px]"
          />
        </div>
      </div>

      <div className="p-4 grid sm:grid-cols-2 gap-4 lg:grid-cols-3 lg:w-7/12 lg:m-auto lg:bg-white lg:rounded-full lg:shadow-sm">
        <div className="flex items-center justify-start xl:justify-center md:border-r-2 md:border-r-gray-100 bg-white p-6 lg:p-2 rounded-md shadow-sm lg:shadow-none">
          <div className="flex justify-between space-x-4">
            <div className="bg-[#fd6e0a] rounded-full w-[55px] h-[55px] flex items-center justify-center">
              <SlBadge color="#fff" size={30} />
            </div>
            <div>
              <p className="text-[#15295f] text-xl font-semibold">
                2 Years Job
              </p>
              <p className="text-[#fd6e0a] text-lg">Experience</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start xl:justify-center md:border-r-2 md:border-r-gray-100 bg-white p-6 lg:p-2 rounded-md shadow-sm lg:shadow-none">
          <div className="flex justify-between space-x-4">
            <div className="bg-[#fd6e0a] rounded-full w-[55px] h-[55px] flex items-center justify-center">
              <GoProjectRoadmap color="#fff" size={30} />
            </div>
            <div>
              <p className="text-[#15295f] text-xl font-semibold">
                ++ Projects
              </p>
              <p className="text-[#fd6e0a] text-lg">Completed</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start xl:justify-center md:border-r-2 md:border-r-gray-100 lg:border-r-0 bg-white p-6 lg:p-2 rounded-md shadow-sm lg:shadow-none">
          <div className="flex justify-between space-x-4">
            <div className="bg-[#fd6e0a] rounded-full w-[55px] h-[55px] flex items-center justify-center">
              <TbCoffee color="#fff" size={30} />
            </div>
            <div>
              <p className="text-[#15295f] text-xl font-semibold">++ Cups of</p>
              <p className="text-[#fd6e0a] text-lg">Coffee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
