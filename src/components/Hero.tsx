import React from "react";
import Button from "./Inputs/Button";
import Image from "next/image";
import HeroImage from "@/images/hero.png";
import { TbCoffee } from "react-icons/tb";
import { GoProjectRoadmap } from "react-icons/go";
import { SlBadge } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="">
      <div className="w-[70%] flex min-h-[600px] m-auto bg-[#f5eceb]">
        <div className="w-full flex flex-col pl-8 pr-8 items-start justify-center">
          <p className="text-[#fd6e0a] text-2xl font-semibold pl-2">
            Hi, I&apos;m
          </p>
          <p className="text-[#15295f] text-[3rem] font-bold">
            John Benedict Regore
          </p>
          <p className="text-[#15295f] text-3xl font-bold mt-2 mb-4">
            Web Developer
          </p>
          <p className="text-[#15295f] text-lg">
            A talented IT Individual with passion for tailored solutions seeks
            the position for Web Developer in a thriving, exciting, and growing
            company. Experienced in web development programming language, to
            provide quality support to company&apos;s IT team in developing and
            deploying web-based system and software tool.
          </p>
          <div className="mt-4">
            <Button title="Download CV" icon={<FaRegFilePdf />} />
            <Button title="Github" icon={<FaGithub />} />
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <Image
            src={HeroImage}
            width={300}
            height={300}
            alt="Logo"
            className="rounded-full"
          />
        </div>
      </div>

      <div className="w-[50%] h-[90px] m-auto -mt-8 rounded-full grid grid-cols-3 gap-4 bg-white shadow-md">
        <div className="flex items-center justify-center border-r-2 border-r-gray-100">
          <div className="flex justify-between space-x-4">
            <div className="bg-[#fd6e0a] rounded-full w-[55px] h-[55px] flex items-center justify-center">
              <SlBadge color="#fff" size={30} />
            </div>
            <div>
              <p className="text-[#15295f] text-lg font-semibold">
                2 Years Job
              </p>
              <p className="text-[#fd6e0a] ">Experience</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center border-r-2 border-r-gray-100">
          <div className="flex justify-between space-x-4">
            <div className="bg-[#fd6e0a] rounded-full w-[55px] h-[55px] flex items-center justify-center">
              <GoProjectRoadmap color="#fff" size={30} />
            </div>
            <div>
              <p className="text-[#15295f] text-lg font-semibold">
                24 Projects
              </p>
              <p className="text-[#fd6e0a] ">Completed</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex justify-between space-x-4">
            <div className="bg-[#fd6e0a] rounded-full w-[55px] h-[55px] flex items-center justify-center">
              <TbCoffee color="#fff" size={30} />
            </div>
            <div>
              <p className="text-[#15295f] text-lg font-semibold">
                200+ Cups of
              </p>
              <p className="text-[#fd6e0a] ">Coffee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
