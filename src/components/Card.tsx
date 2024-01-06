import Image, { StaticImageData } from "next/image";
import React from "react";
import TestImage from "@/images/test.jpeg";

interface CardProps {
  id: number;
  img: StaticImageData;
  title: string;
  subtitle: string;
  link: string;
}

const Card = (props: CardProps) => {
  const { id, img, title, subtitle, link } = props;

  return (
    <div className="w-full bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Image
        src={img}
        alt="Logo"
        className="w-full h-[300px] md:h-[230px] rounded-md"
      />
      `
      <div className="py-2 px-3">
        <h5 className="mb-2 text-lg font-semibold tracking-tight text-[#15295f]">
          {title}
        </h5>
        <p className="mb-3 text-gray-600  text-sm">{subtitle}</p>
        <a href={link} target="_blank">
          <p className="text-right p-2 text-[#fd6e0a] hover:underline hover:cursor-pointer">
            View
          </p>
        </a>
      </div>
    </div>
  );
};

export default Card;
