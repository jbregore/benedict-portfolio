import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="w-full bg-white mt-20 ">
      <div className="p-4 grid sm:grid-cols-2 gap-4 xl:gap-8 xl:grid-cols-3 lg:w-[60%] lg:m-auto">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Projects;
