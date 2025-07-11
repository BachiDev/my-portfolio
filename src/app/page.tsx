import ProjectCard from "./components/ProjectCard";
import { projects } from "./projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <a
          href="https://github.com/your-github-username/your-overview-repo"
          
          className="fixed top-4 left-4 px-4 py-2 rounded-md bg-gray-200 dark:bg-zinc-800/30 border border-gray-300 dark:border-neutral-800 hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors"
        >
          Back to Overview
        </a>
      </div>

      <div className="mb-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center max-w-5xl w-full lg:mb-0 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </main>
  );
}
