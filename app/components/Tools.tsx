import ToolsCard from "../utils/ToolsCard";

export default function Tools() {
  return (
    <section className="w-full px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">

        {/* Cabeçalho */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <span className="text-xs tracking-[0.25em] text-violet-500">
            02 — SKILLS
          </span>

          <h2 className="font-playfair mt-6 text-4xl sm:text-5xl lg:text-6xl">
            Tools & Craft
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="w-full">
          <ToolsCard 
            title="◈ Frontend"
            tools={["React.js", "Typescript", "Next.js", "Tailwindcss"]}
          />
        </div>
        <div className="w-full">
          <ToolsCard 
            title="⬡ Backend"
            tools={["Node.js", "PostgreSQL", "MongoDB", "Prisma"]}
          />
        </div>
        <div className="w-full">
          <ToolsCard 
            title="◇ Design"
            tools={["Figma", "Design Systems", "Prototyping", "Accessibility"]}
          />
        </div>
        <div className="w-full">
          <ToolsCard 
            title="◉ DevOps"
            tools={["Git", "Vercel"]}
          />
        </div>
      </div>
    </section>
  );
}