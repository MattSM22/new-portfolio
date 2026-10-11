import Database from "@/app/database/Projects.json";
import ProjectCard, { ProjectsProps } from "../utils/ProjectCard";

export default function Projects(){
  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
      {/* Cabeçalho */}
      <div className="mb-10 sm:mb-12 lg:mb-16">
        <span className="text-xs tracking-[0.25em] text-violet-500 font-mono">
          03 — PROJECTS
        </span>

        <h2 className="font-display mt-6 text-4xl sm:text-5xl lg:text-6xl">
          Selected work
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {Database.Projects.map((projects) => {
          return(
            <ProjectCard 
              key={projects.Content.titleProject} 
              Image={projects.Image} 
              Content={projects.Content}
              color={projects.color as ProjectsProps["color"]}
            />
          )
        })}
      </div>
    </section>
  );
} 