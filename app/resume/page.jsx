"use client";

import { Description } from "@radix-ui/react-dialog";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaNodeJs,
  FaReact,
  FaAngular,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
  title: "About me",
  description: "hello",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ange Gardien",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+250782245728)",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Rwanda",
    },
    {
      fieldName: "Email",
      fieldValue: "angegirishyaka@gmail.com",
    },
    {
      fieldName: "Github",
      fieldValue: "@angeGardien1",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Kiswahili",
    },
  ],
};

const experience = {
  icon: "/assets",
  title: "My Experience",
  description: "hello",
  items: [
    {
      company: "Fatherhood Tech",
      position: "Backend Engineer ",
      duration: "2024 - present",
    },
    {
      company: "Seven X",
      position: "Backend Engineer ",
      duration: "2024 - 2024",
    },
    {
      company: "Fatherhood Sanctuary",
      position: "Media & I.T Manager ",
      duration: "2021 - 2023",
    },
    {
      company: "Bethel schoold of Technology",
      position: "Peer to peer tutor",
      duration: "2024 - 2024",
    },
    {
      company: "Bethel schoold of Technology",
      position: "Peer to peer tutor",
      duration: "2024 - 2024",
    },
    {
      company: "Bethel schoold of Technology",
      position: "Peer to peer tutor",
      duration: "2024 - 2024",
    },
  ],
};

const education = {
  icon: "/assets",
  title: "My Ducation",
  description: "hello",
  items: [
    {
      institution: "Online Cource",
      degree: "Full Stack Web Development ",
      duration: "2024",
    },
    {
      institution: "Code Academy",
      degree: "Frent-end developer ",
      duration: "2024",
    },
    {
      institution: "Online Cource",
      degree: "Programming",
      duration: "2024",
    },
    {
      institution: "Online Cource",
      degree: "Coding",
      duration: "2024",
    },
    {
      institution: "Online Cource",
      degree: "Coding",
      duration: "2024",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "Helllo",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaJs />,
      name: "Java Script",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next Js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaAngular />,
      name: "Angular",
    },
  ],
};
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container max-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
               experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
