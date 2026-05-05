import React from "react";
import { socialLinks } from "@/data";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Footer = () => {
  return (
    <footer style={{background: 'url(/footer-grid.svg)'}} id="contact" className="w-full py-20 px-5 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Section Title */}
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              <TextGenerateEffect words="Ready to take your digital Presence to the Next level?"/>
            </h2>
            <p className="text-neutral-400 text-sm md:text-base">
              Reach out through any of these channels and let&apos;s <br /> create something amazing together!
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 flex-wrap justify-center">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/30 hover:to-purple-500/30 transition duration-300 transform hover:scale-110"
                title={link.name}
              >
                <Image 
                  src={link.icon} 
                  alt={link.name}
                  width={20}
                  height={20}
                />
              </a>
            ))}
          </div>

          {/* Divider */}
          {/* <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div> */}

          {/* Copyright */}
          <div className="text-center text-neutral-600 text-xs md:text-sm">
            <p>&copy; {new Date().getFullYear()} Glory Tariebi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
