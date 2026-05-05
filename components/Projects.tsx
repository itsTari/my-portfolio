'use client'

import React from "react";
import { myProjects } from "@/data";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-5 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className=" heading text-3xl md:text-4xl font-bold text-white mb-4">
            A Selection of {''} <span className="text-purple">Recent Projects</span>
          </h1>
          <p className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto">
            A selection of projects I&apos;ve built and deployed, showcasing my expertise in modern web development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap items-center justify-center p-4 mt-10 gap-8">
          {myProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:border-blue-500/50 transition duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-black/50">
                {project.img && (
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  {project.des}
                </p>

                {/* Tech Stack Icons */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                    >
                      <Image src={icon} alt={`tech-${index}`} width={20} height={20} />
                    </div>
                  ))}
                </div>

                {/* Visit Link */}
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <MagicButton
                    title="Visit Project"
                    icon={<FaLocationArrow />}
                    position="left"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
