"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Socialseed",
    description: "A Modern Social Media Platform Build from Scratch , with new AI Integration ,currently under construction.",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/Kuntal-Gain/Socialseed/",
  },
  {
    id: 2,
    title: "Startup-Investor Network",
    description: "A Simple App for making connection between startup owners and Investors.",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/Kuntal-Gain/Invester-Startup-Demo",
  },
  {
    id: 3,
    title: "Weatherify",
    description: "A Weather Forcast Application with weather condition and user alerts",
    image: "/images/projects/3.jpg",
    gitUrl: "https://github.com/Kuntal-Gain/Weatherify"
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };



  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}

            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
