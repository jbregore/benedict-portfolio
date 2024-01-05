import React from "react";
import Card from "./Card";
import Highminds from "@/images/highminds.png";
import EhireMo from "@/images/ehiremo.png";
import Wefixit from "@/images/wefixit.jpg";
import Awake from "@/images/awake.png";
import StudentReview from "@/images/student-review.png";
import FacebookClone from "@/images/fbclone.png";
import HuluClone from "@/images/hulu.png";
import Cryptoverse from "@/images/cryptoverse.png";
import BrandSample from "@/images/brand.png";
import Gericht from "@/images/gericht.png";

const Projects = () => {
  const projects = [
    {
      id: 2,
      img: Highminds,
      title: "Highminds",
      subtitle:
        "e-commerce website made with html, css, js, php (rest api), mysql",
      link: "https://e-hghmnds.000webhostapp.com/test_hghmnds/index.php",
    },
    {
      id: 3,
      img: EhireMo,
      title: "eHireMo",
      subtitle: `job posting website made with html, css, js, php (rest api), mysql.
         also have a react native android app.`,
      link: "https://btech-ehiremo.000webhostapp.com/eHireMo/frontend/index.php",
    },
    {
      id: 4,
      img: Wefixit,
      title: "Wefixit mobile app",
      subtitle: `service finder application made with react native and php as backend`,
      link: "https://drive.google.com/file/d/1xZGsduTM10c5JPqHIQCsF_tz0xWKElvR/view?usp=sharing",
    },
    {
      id: 5,
      img: Awake,
      title: "Awake social media",
      subtitle: `made with react js, firebase`,
      link: "https://awake-l0b.pages.dev/login",
    },
    {
      id: 6,
      img: StudentReview,
      title: "Student Review",
      subtitle: `made with react js, firebase and redux`,
      link: "https://7fa22fb3.redux-midterm.pages.dev/studentlist",
    },
    {
      id: 7,
      img: FacebookClone,
      title: "Facebook clone",
      subtitle: `simple facebook UI made with next js, tailwind css, firebase`,
      link: "https://facebook-clone-green-zeta.vercel.app/",
    },
    {
      id: 8,
      img: HuluClone,
      title: "Hulu clone",
      subtitle: `Hulu UI made with next js, tailwind css`,
      link: "https://hulu-clone-f0irwfhvo-jbregore.vercel.app/",
    },
    {
      id: 9,
      img: Cryptoverse,
      title: "Cryptoverse",
      subtitle: `Crypto tracker made with react js, redux`,
      link: "https://cryptoverse-clone.pages.dev/",
    },
    {
      id: 10,
      img: BrandSample,
      title: "Brand",
      subtitle: `simple page made with react js, tailwind css`,
      link: "https://e0ba76b6.tailwind-practice-1.pages.dev/",
    },
    {
      id: 11,
      img: Gericht,
      title: "Restaurant page",
      subtitle: `made with react js, css`,
      link: "https://restaurant-page.pages.dev/",
    },
  ];

  return (
    <div
      className="w-full bg-[#f7f3f2] mt-10 max-w-screen-xl m-auto"
      id="projects"
    >
      <p className="text-[#15295f] text-2xl sm:text-3xl font-semibold text-center mb-6 font-maven_pro">
        Some Old Projects:
      </p>

      <div className="p-4 grid grid-cols-1 gap-4 xl:gap-8 md:grid-cols-2 xl:grid-cols-3 lg:m-auto">
        {projects.map((item: any, index: number) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
