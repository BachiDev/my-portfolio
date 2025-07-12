'use client'
import Image from "next/image";
import { useState } from "react";

type ProjectCardProps = {
  project: {
    name: string;
    type: string;
    description: string;
    image: string;
    stack: { name: string; icon: string }[];
    githubUrl: string;
    liveUrl: string;
  };
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  const toggleImageEnlarge = () => {
    setIsImageEnlarged(!isImageEnlarged);
  };

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 flex flex-col h-full font-mono transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.5)]">
      <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
      <h4 className="text-md text-gray-500 dark:text-gray-400 mb-2">{project.type}</h4>
      <div
        className="group relative w-full h-48 mb-4 rounded-md overflow-hidden cursor-pointer"
        onClick={toggleImageEnlarge}
      >
        <Image src={project.image} alt={project.name} layout="fill" objectFit="contain" className="transition-opacity duration-300 group-hover:opacity-75" />
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Image src="/magnifying-glass.svg" alt="Enlarge" width={48} height={48} className="invert" />
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow flex items-center justify-center text-center">{project.description}</p>
      <div className="flex items-center justify-center w-full bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 mb-4">
        <div className="flex gap-2">
          {project.stack.map((tech) => (
            <div key={tech.name} className="group relative flex justify-center">
              <Image
                src={tech.icon}
                alt={tech.name}
                width={24}
                height={24}
                className="dark:invert transition-transform duration-200 hover:scale-110"
              />
              <span className="absolute bottom-full mb-2 hidden group-hover:block w-auto p-2 text-xs text-white whitespace-no-wrap bg-gray-800 rounded-md shadow-lg">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-auto">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors w-full"
        >
          <Image src="./github.svg" alt="GitHub" width={20} height={20} className="dark:invert" />
          Source Code
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-colors w-full"
        >
          <Image src="./link.svg" alt="Live Demo" width={20} height={20} className="dark:invert" />
          Live Demo
        </a>
      </div>

      {isImageEnlarged && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 cursor-pointer" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
          onClick={toggleImageEnlarge}
        >
          <div className="relative w-full h-full max-w-[90vw] max-h-[90vh]">
            <Image
              src={project.image}
              alt={project.name}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
