
import Image from "next/image";

type ExperienceProps = {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  logo: string;
};

export default function ExperienceCard({
  title,
  company,
  period,
  description,
  technologies,
  logo,
}: ExperienceProps) {
  return (
    <div className="group relative pb-6 pl-10 last:pb-0">

      {/* Linha da timeline */}
      <div className="absolute top-0 bottom-0 left-[7px] w-px bg-violet-500/40 group-last:bottom-auto group-last:h-5" />

      {/* Indicador circular */}
      <div className="absolute top-5 left-0 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-violet-500 bg-[#0d0d14]">
        <div className="h-[6px] w-[6px] rounded-full bg-violet-500" />
      </div>

      {/* Card */}
      <article className="rounded-[16px] border border-white/10 bg-[#101017] p-5 transition-all duration-300 hover:border-violet-500/40 md:p-6">

        {/* Cabeçalho */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

          <div className="flex min-w-0 items-center gap-3">

            {/* Logo da empresa */}
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <Image
                src={logo}
                alt={`Logo da ${company}`}
                fill
                sizes="44px"
                className="object-contain p-2"
              />
            </div>

            {/* Cargo e empresa */}
            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-white">
                {title}
              </h3>

              <p className="mt-1 text-sm font-medium text-violet-400">
                {company}
              </p>
            </div>
          </div>

          {/* Período */}
          <span className="w-fit shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400">
            {period}
          </span>
        </div>

        {/* Descrição */}
        <p className="mt-4 text-sm leading-relaxed text-gray-400">
          {description}
        </p>

        {/* Tecnologias */}
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}
