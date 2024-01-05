import React from "react";

const Skills = () => {
  return (
    <div className="w-full bg-[#f7f8fc77] mt-20 p-8 " id="skills">
      <p className="text-[#15295f] text-2xl sm:text-3xl font-semibold text-center mb-6 font-maven_pro">
        Knowledgable in:
      </p>
      <div
        className="w-full sm:w-11/12 lg:w-8/12 m-auto relative grid gap-4 grid-cols-2 
      md:grid-cols-3 lg:grid-cols-4 md:gap-6"
      >
        <SkillCard title="Photoshop" iconClass="devicon-photoshop-plain" />
        <SkillCard title="Java" iconClass="devicon-java-plain" />
        <SkillCard title="HTML" iconClass="devicon-html5-plain" />
        <SkillCard title="CSS" iconClass="devicon-css3-plain" />
        <SkillCard title="Javascript" iconClass="devicon-javascript-plain" />
        <SkillCard title="React Native" iconClass="devicon-android-plain" />
        <SkillCard title="React Js" iconClass="devicon-react-original" />
        <SkillCard title="Next Js" iconClass="devicon-nextjs-original" />
        <SkillCard title="Node Js" iconClass="devicon-nodejs-plain" />
        <SkillCard title="Adonis Js" iconClass="devicon-adonisjs-original" />
        <SkillCard title="Php" iconClass="devicon-php-plain" />
        <SkillCard title="Laravel" iconClass="devicon-laravel-plain" />
        <SkillCard title="Mysql" iconClass="devicon-mysql-plain" />
        <SkillCard title="Firebase" iconClass="devicon-firebase-plain" />
        <SkillCard title="Git" iconClass="devicon-git-plain" />
      </div>
    </div>
  );
};

interface SkillCardProps {
  title: string;
  iconClass: string;
}

const SkillCard = (props: SkillCardProps) => {
  const { title, iconClass } = props;
  return (
    <div className="bg-white shadow-md flex flex-col justify-center items-center w-full rounded-md p-6">
      <div>
        <i className={`${iconClass} text-[5rem] text-gray-600`}></i>
      </div>
      <div className="mt-2">
        <p className="text-[#15295f] text-md">{title}</p>
      </div>
    </div>
  );
};

export default Skills;
