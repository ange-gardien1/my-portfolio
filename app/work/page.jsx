"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// import { Swiper, SwiperSlider } from "swiper/react";
// import "swipper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";

const projects = [
  {
    num: "01",
    category: "front-end",
    title: "project 1",
    description: "hello",
    stack: [{ name: "Html 5" }, { name: "css 3" }, { name: "javascript" }],
    image: "/assets/work/mockapone.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description: "hello",
    stack: [{ name: "next.js" }, { name: "tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/mockup3.jpg",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "front-end",
    title: "project 3",
    description: "hello",
    stack: [
      { name: "next.js" },
      { name: "tailwind.css" },
      { name: "Typescript" },
    ],
    image: "/assets/work/mockup3.jpg",
    live: "",
    github: "",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[8vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none"> 
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
            <p className="text-white/60">{project.description}</p>
            <ul  className="flex gap-4">
              {project.stack.map((item,index) => {
                return <li key={index} className="text-xl text-accent">
                   {item.name}
                   {index !== project.stack.length - 1 && ","}
                </li>
              })}
            </ul>
            <div className="border border-white">
               
            </div>
            <div>
              <Link href={project.live}> 
                <TooltipProvider delayDuration={100}>
                   <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent>
                       <p>Live Project</p>
                    </TooltipContent>
                   </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">slider</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
