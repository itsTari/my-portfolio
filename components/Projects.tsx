"use client";

import React from "react";
import { myProjects } from "@/data";
import Image from "next/image";
import { PinContainer } from "./ui/3d-pin";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-5 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h1 className=" heading text-3xl md:text-4xl font-bold text-white mb-4">
            A Selection of {""}{" "}
            <span className="text-purple">Recent Projects</span>
          </h1>
          <p className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto">
            A selection of projects I&apos;ve built and deployed, showcasing my
            expertise in modern web development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="flex items-center justify-center p-2 mt-10 gap-4">
          {myProjects.map((project) => (
            <div key={project.id} className="">
              <PinContainer title={project.title} href={project.link}>
                <div className="flex basis-full flex-col relative overflow-hidden p-3 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] ">
                  <div>
                    <img src="/bg.png" alt="bg-img" />
                  </div>
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="absolute bottom-0 top-0 z-10"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-400 mb-4">
                      {project.des}
                    </p>

                    {/* Tech Stack Icons */}
                    <div className="flex gap-2 flex-wrap">
                    {project.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                    >
                      <Image src={icon} alt={`tech-${index}`} width={20} height={20} />
                    </div>
                    ))}
                    </div>
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
