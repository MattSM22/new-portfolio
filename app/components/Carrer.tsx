import database from "@/app/database/Experiences.json";
import ExperienceCard from "../utils/ExperienceCard";

export default function Carrer(){
  return(
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
      {/* Cabeçalho */}
      <div className="mb-10 sm:mb-12 lg:mb-16">
        <span className="text-xs tracking-[0.25em] text-violet-500 font-mono">
          03 — EXPERIENCE
        </span>

        <h2 className="font-display mt-6 text-4xl sm:text-5xl lg:text-6xl">
          Where I-&apos;ve worked
        </h2>
      </div>
      <div>
        {database.Experiences.map((experience) => {
          return(
            <ExperienceCard 
              key={experience.id}
              title={experience.title}
              company={experience.company}
              period={experience.period}
              description={experience.description}
              logo={experience.logo}
              technologies={experience.technologies}
            />
          );
        })}
      </div>
    </section>
  )
}