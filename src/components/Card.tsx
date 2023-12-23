import Image from "next/image";
import React from "react";
import HeroImage from "@/images/hero.png";

const Card = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image
          src={HeroImage}
          alt="Logo"
          className="rounded-full w-[150px] h-[150px] sm:w-[230px] sm:h-[230px] md:w-[300px] md:h-[300px]"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Project Name
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Project Description
        </p>
        <p>View</p>
      </div>
    </div>
  );
};

export default Card;
