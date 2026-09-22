import ToolsCard from "../utils/ToolsCard";

export default function Tools() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">

      {/* Cabeçalho */}
      <div className="mb-10 sm:mb-12 lg:mb-16">
        <span className="text-xs tracking-[0.25em] text-violet-500 font-mono">
          02 — SKILLS
        </span>

        <h2 className="font-display mt-6 text-4xl sm:text-5xl lg:text-6xl">
          Tools & Craft
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="w-full">
          <ToolsCard
            title="◈ FRONTEND"
            tools={["React.js", "Typescript", "Next.js", "Tailwindcss"]}
          />
        </div>

        <div className="w-full">
          <ToolsCard
            title="⬡ BACKEND"
            tools={["Node.js", "PostgreSQL", "MongoDB", "Prisma"]}
          />
        </div>

        <div className="w-full">
          <ToolsCard
            title="◇ DESIGN"
            tools={[
              "Figma",
              "Design Systems",
              "Prototyping",
              "Accessibility",
            ]}
          />
        </div>

        <div className="w-full">
          <ToolsCard
            title="◉ DEVOPS"
            tools={["Git", "Vercel"]}
          />
        </div>
      </div>

    </section>
  );
}