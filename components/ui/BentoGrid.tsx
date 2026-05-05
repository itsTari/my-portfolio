'use client';
import { cn } from "@/lib/utils";
import { useState } from "react";
import MagicButton from "./MagicButton";
import { IoCopy } from "react-icons/io5";

// import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        " w-full grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4 px-4 md:px-1 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  id,
  techStack,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  id?: number;
  techStack?: string[];
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(description as string);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        id === 5 ? "bg-gradient-to-br from-blue-500/20 via-black-100 to-purple-500/20 border border-blue-500/30" : "",
        className
      )}
      style={
        id !== 5
          ? {
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }
          : {}
      }
    >
      <div className={cn(id === 5 && "flex justify-center h-full")}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
      </div>
      <div className={cn(
        id === 5 && "flex flex-col items-center justify-center h-full"
      )}>
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-center">
          {title}
        </div>
        {id === 5 ? (
          <div className="flex flex-col items-center gap-4">
            <MagicButton
              title="Copy my email"
              icon={<IoCopy />}
              position="left"
              handleClick={handleCopyEmail}
              fitContent={true}
            />
            <span className="text-xs text-neutral-500">
              {copied ? "Copied to clipboard!" : ""}
            </span>
          </div>
        ) : id === 3 && techStack ? (
          <div className="flex flex-col items-center gap-3">
            <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 mb-2">
              {description}
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              {techStack.map((icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition duration-200"
                >
                  <img src={icon} alt={`tech-${index}`} className="w-6 h-6" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};
