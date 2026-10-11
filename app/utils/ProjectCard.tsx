import Image from "next/image";

export type ProjectsProps = {
  Image: {
    alt: string;
    src: string;
  },
  Content: {
    typeProject: string,
    titleProject: string,
    textProject: string,
    toolsProject: string[],
  },
  color: "purple" | "green" | "orange" | "blue";
}

export default function ProjectCard(ProjectProps: ProjectsProps){
  const colorVariants = {
    purple: "text-violet-400 border-violet-500/30 bg-violet-500/5",
    green: "text-lime-400 border-lime-500/30 bg-lime-500/5",
    orange: "text-orange-400 border-orange-500/30 bg-orange-500/5",
    blue: "text-sky-400 border-sky-500/30 bg-sky-500/5",
  };

  return(
    <div className="relative rounded-[20px] overflow-hidden bg-[#0d0d14] border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300 hover:-translate-y-0.5 hover:cursor-pointer">
      <div className="relative h-52 overflow-hidden bg-[#0d0d14]">
        <Image 
          alt={ProjectProps.Image.alt} 
          className="w-full h-full object-cover opacity-55 hover:opacity-75 hover:scale-[1.04] transition-all duration-300 hover:transalte-y-0.5" 
          src={ProjectProps.Image.src}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 to-transparent"/>
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button className="px-3 py-1.5 text-xs font-medium text-[#f0ece5] bg-black/50 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/10 transition-colors">Demo -&gt;</button>
          <button className="px-3 py-1.5 text-xs font-medium text-[#f0ece5] bg-black/50 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/10 transition-colors">Code -&gt;</button>
        </div>
      </div>
      <div className="p-6">
        <span className="text-xs font-mono text-[#7a7a90]">{ProjectProps.Content.typeProject}</span>
        <h3 className="font-display text-2xl font-bold text-[#f0ece5]">{ProjectProps.Content.titleProject}</h3>
        <p className="text-sm text-[#7a7a90] leading-relaxed mb-4">
          {ProjectProps.Content.textProject}
        </p>
        <div className="flex flex-wrap gap-2">
          {ProjectProps.Content.toolsProject.map((tool) => {
            return(
              <span 
                key={tool} 
                className={`
                  px-2.5 
                  py-1 
                  text-xs 
                  font-mono 
                  rounded-lg 
                  border
                  ${colorVariants[ProjectProps.color]}
                  `
              }>
                {tool}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}