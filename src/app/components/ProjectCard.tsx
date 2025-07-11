
import Image from "next/image";

type ProjectCardProps = {
  project: {
    name: string;
    description: string;
    image: string;
    stack: { name: string; icon: string }[];
    githubUrl: string;
    liveUrl: string;
  };
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 flex flex-col h-full">
      <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
      <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
        <Image src={project.image} alt={project.name} layout="fill" objectFit="contain" className="dark:invert" />
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
      <div className="flex items-center justify-center w-full bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 mb-4">
        <div className="flex gap-2">
          {project.stack.map((tech) => (
            <Image key={tech.name} src={tech.icon} alt={tech.name} width={24} height={24} className="dark:invert" />
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
          <Image src="/github.svg" alt="GitHub" width={20} height={20} className="dark:invert" />
          Source
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors w-full"
        >
          <Image src="/link.svg" alt="Live Demo" width={20} height={20} />
          Live Demo
        </a>
      </div>
    </div>
  );
}
