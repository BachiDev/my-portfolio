import FloatingActionButton from "./components/FloatingActionButton";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 p-4 lg:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <a
          href="https://github.com/your-github-username/your-overview-repo"
          
          className="fixed top-4 left-4 px-4 py-2 rounded-md bg-gray-200 dark:bg-zinc-800/30 border border-gray-300 dark:border-neutral-800 hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors flex items-center gap-2"
        >
          <Image src="./arrow-left.svg" alt="Back arrow" width={20} height={20} className="dark:invert" />
          Back to Overview
        </a>
      </div>

      

      <div className="mb-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center max-w-5xl w-full lg:mb-0 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      <FloatingActionButton href="https://github.com/BachiDev/my-portfolio" />
      <Footer />
    </main>
  );
}
